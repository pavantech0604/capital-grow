/**
 * CAPITAL GROW - TELEGRAM COMMUNITY INTERACTION CONTROLLER
 * Compliant with Meta Advertising & Financial Regulations
 * Direct CTA: https://t.me/+jcO3zpdZ6Tg1MDE9
 */

const TELEGRAM_LINK = "https://t.me/+jcO3zpdZ6Tg1MDE9";

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initFAQAccordion();
  initCalculator();
  initSocialProofToast();
  initSmoothNav();
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
   4. Social Proof Toast Notification (Subtle & Non-Intrusive)
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

  // First toast appears after 5 seconds, then every 22 seconds
  setTimeout(showToast, 5000);
  setInterval(showToast, 22000);
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
