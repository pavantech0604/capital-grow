/**
 * CAPITAL GROW - TELEGRAM GROUP & COMMUNITY INTERACTION CONTROLLER
 * Direct Group Invite: https://t.me/+V-tniChKYqxmNTg1
 */

const TELEGRAM_LINK = "https://t.me/+V-tniChKYqxmNTg1";

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initFAQAccordion();
  initCalculator();
  initSocialProofToast();
  initSmoothNav();
  initUniversalTelegramTriggers();
});

/* --------------------------------------------------------------------------
   1. Interactive Position Risk & Allocation Tool
   -------------------------------------------------------------------------- */
function initCalculator() {
  const slider = document.getElementById('capital-slider');
  const amountDisplay = document.getElementById('calc-amount-display');
  const riskDisplay = document.getElementById('calc-risk-display');
  const positionDisplay = document.getElementById('calc-position-display');

  if (!slider || !amountDisplay) return;

  function formatRupees(amount) {
    if (amount >= 100000) {
      const inLakhs = amount / 100000;
      return `₹${inLakhs % 1 === 0 ? inLakhs.toFixed(0) : inLakhs.toFixed(1)} Lakh`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  function updateCalc() {
    const capital = parseInt(slider.value, 10);
    const maxRisk = Math.round(capital * 0.02); // 2% strict risk rule
    const allocation = Math.round(capital * 0.20); // 20% setup allocation rule

    amountDisplay.textContent = formatRupees(capital);
    if (riskDisplay) riskDisplay.textContent = `₹${maxRisk.toLocaleString('en-IN')}`;
    if (positionDisplay) positionDisplay.textContent = `₹${allocation.toLocaleString('en-IN')}`;
  }

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

/* --------------------------------------------------------------------------
   2. Scroll Reveal Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   3. FAQ Accordion Logic
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all accordion items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Social Proof Toast Notification (Subtle, Real-time & Clickable)
   -------------------------------------------------------------------------- */
function initSocialProofToast() {
  const toast = document.getElementById('social-toast');
  const nameEl = document.getElementById('toast-name');
  if (!toast || !nameEl) return;

  const joiners = [
    { name: "Aditya S.", city: "Bengaluru" },
    { name: "Rohan M.", city: "Mumbai" },
    { name: "Vikram R.", city: "Pune" },
    { name: "Kunal P.", city: "Delhi NCR" },
    { name: "Suresh N.", city: "Hyderabad" },
    { name: "Deepak G.", city: "Ahmedabad" },
    { name: "Meera K.", city: "Chennai" }
  ];

  let index = 0;

  function showToast() {
    const member = joiners[index];
    nameEl.textContent = `${member.name} (${member.city})`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);

    index = (index + 1) % joiners.length;
  }

  // Clicking toast directly opens Telegram Group
  toast.addEventListener('click', () => {
    window.open(TELEGRAM_LINK, '_blank', 'noopener,noreferrer');
  });

  // First toast appears after 4 seconds, then every 20 seconds
  setTimeout(showToast, 4000);
  setInterval(showToast, 20000);
}

/* --------------------------------------------------------------------------
   5. Smooth Anchor Nav & CTA Event Telemetry
   -------------------------------------------------------------------------- */
function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Track CTA clicks cleanly if analytics are enabled
  document.querySelectorAll('a[href*="t.me"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.gtag) {
        window.gtag('event', 'join_telegram_click', {
          event_category: 'engagement',
          event_label: btn.textContent.trim()
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Universal Click-to-Join Telegram Trigger System
   Ensures EVERY interactive element, card, preview, and badge converts!
   -------------------------------------------------------------------------- */
function initUniversalTelegramTriggers() {
  const triggerSelectors = [
    '[data-join-telegram="true"]',
    '.tg-post-card',
    '.chart-container-card',
    '.stat-box',
    '.feature-pill',
    '.pillar-card',
    '.review-card',
    '.calc-stat-box',
    '.pill-authority',
    '.pill-status',
    '.toast-box'
  ];

  document.addEventListener('click', (e) => {
    // Never intercept active slider adjustments or accordion toggles
    if (e.target.closest('#capital-slider') || e.target.closest('.faq-header')) {
      return;
    }

    const matchedCard = e.target.closest(triggerSelectors.join(', '));
    if (matchedCard) {
      // If it is already a native link to Telegram, let browser handle naturally
      if (matchedCard.tagName === 'A' && matchedCard.getAttribute('href')?.includes('t.me')) {
        return;
      }
      
      // Open Telegram Group in new window
      window.open(TELEGRAM_LINK, '_blank', 'noopener,noreferrer');

      // Telemetry event if analytics exists
      if (window.gtag) {
        window.gtag('event', 'telegram_card_join_click', {
          event_category: 'conversion',
          event_label: matchedCard.className || 'card_trigger'
        });
      }
    }
  });
}
