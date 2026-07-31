/**
 * CAPITAL GROW - LANDING PAGE INTERACTION CONTROLLER
 */

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LUkpIkiwSCECX61wZBPy0w?s=cl&p=a&ilr=4&amv=3";

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initFAQAccordion();
  initPreviewTabs();
  initLiveSpotCounter();
  initCountdownTimer();
  initSocialProofToast();
  initCalculator();
});

/* --------------------------------------------------------------------------
   1. Interactive Capital Growth Calculator
   -------------------------------------------------------------------------- */
function initCalculator() {
  const slider = document.getElementById('capital-slider');
  const amountDisplay = document.getElementById('calc-amount-display');
  const riskDisplay = document.getElementById('calc-risk-display');
  const positionDisplay = document.getElementById('calc-position-display');

  if (!slider || !amountDisplay) return;

  function formatRupees(amount) {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakh`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  function updateCalc() {
    const val = parseInt(slider.value, 10);
    const maxRisk = Math.round(val * 0.02); // 2% max risk per trade rule
    const positionSize = Math.round(val * 0.20); // 20% setup allocation

    amountDisplay.textContent = formatRupees(val);
    if (riskDisplay) riskDisplay.textContent = `₹${maxRisk.toLocaleString('en-IN')}`;
    if (positionDisplay) positionDisplay.textContent = `₹${positionSize.toLocaleString('en-IN')}`;
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
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
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
   4. Interactive Preview Showcase Tabs
   -------------------------------------------------------------------------- */
function initPreviewTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sampleContainer = document.getElementById('sample-signal-content');

  const sampleData = {
    signals: `
<div class="sample-signal-header">
  <span class="signal-type-badge">📊 Technical Setup Analysis (Educational)</span>
  <span style="font-size: 0.775rem; color: #94a3b8;">Today, 09:15 AM</span>
</div>
<div class="sample-body">
  <div>📊 <b>SAMPLE CHART ANALYSIS: NIFTY 24,500 LEVEL</b></div>
  <div>-------------------------------------</div>
  <div>🔹 Breakout Zone: 145 - 150</div>
  <div>🎯 Resistance Level 1: 185</div>
  <div>🎯 Resistance Level 2: 230</div>
  <div>🛑 Key Risk Support: 125</div>
  <div>-------------------------------------</div>
  <div>💡 <i>Technical Note: Institutional buying support observed near 24,400 level. Shared for educational market study.</i></div>
</div>`,
    analysis: `
<div class="sample-signal-header">
  <span class="signal-type-badge" style="background: rgba(37, 99, 235, 0.2); color: #60a5fa;">📊 Daily Market Brief</span>
  <span style="font-size: 0.775rem; color: #94a3b8;">Today, 08:30 AM</span>
</div>
<div class="sample-body">
  <div>🧠 <b>Pre-Market Strategy & Key Levels</b></div>
  <div>-------------------------------------</div>
  <div>• Global Markets: Tech sector leading positive momentum (+1.4%).</div>
  <div>• Key Resistance: 24,650</div>
  <div>• Key Support: 24,350</div>
  <div>-------------------------------------</div>
  <div>📌 <b>Action Plan:</b> Look for dips near 24,400 for long positions. Avoid aggressive shorts today.</div>
</div>`,
    wealth: `
<div class="sample-signal-header">
  <span class="signal-type-badge" style="background: rgba(234, 179, 8, 0.2); color: #facc15;">💡 Wealth Blueprint</span>
  <span style="font-size: 0.775rem; color: #94a3b8;">Yesterday</span>
</div>
<div class="sample-body">
  <div>💎 <b>Portfolio Building: The 50/30/20 Capital Rule</b></div>
  <div>-------------------------------------</div>
  <div>• 50% Core Allocation: High-quality blue-chip compounding stocks.</div>
  <div>• 30% Growth & Momentum: Tactical swing trades & breakout stocks.</div>
  <div>• 20% Hedging & Cash: Preserving liquidity for market corrections.</div>
  <div>-------------------------------------</div>
  <div>📥 <i>Full 14-page PDF guide uploaded in community files!</i></div>
</div>`
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      if (sampleData[target] && sampleContainer) {
        sampleContainer.innerHTML = sampleData[target];
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Live Spot Counter Animation
   -------------------------------------------------------------------------- */
function initLiveSpotCounter() {
  const spotCounter = document.getElementById('spots-left-count');
  const heroMemberCount = document.getElementById('hero-member-count');
  if (!spotCounter) return;

  let spots = 108;
  let members = 4892;

  setInterval(() => {
    if (spots > 14) {
      const drop = Math.floor(Math.random() * 2) + 1;
      spots -= drop;
      members += drop;
      
      spotCounter.textContent = spots;
      if (heroMemberCount) {
        heroMemberCount.textContent = members.toLocaleString();
      }

      spotCounter.classList.add('highlight-pulse');
      setTimeout(() => spotCounter.classList.remove('highlight-pulse'), 500);
    }
  }, 12000);
}

/* --------------------------------------------------------------------------
   6. Countdown Timer
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
  const timerElement = document.getElementById('cta-timer');
  if (!timerElement) return;

  let totalSeconds = 14 * 60 + 32;

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}

/* --------------------------------------------------------------------------
   7. Social Proof Toast Notification System
   -------------------------------------------------------------------------- */
function initSocialProofToast() {
  const toast = document.getElementById('social-toast');
  if (!toast) return;

  const members = [
    { name: "Rahul S.", city: "Mumbai", time: "Just now", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" },
    { name: "Priya V.", city: "Bengaluru", time: "2 mins ago", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" },
    { name: "Amit K.", city: "Delhi", time: "4 mins ago", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" },
    { name: "Vikram R.", city: "Pune", time: "6 mins ago", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" }
  ];

  let index = 0;

  function showNextToast() {
    const data = members[index];
    const avatarEl = toast.querySelector('.toast-avatar');
    const nameEl = toast.querySelector('.toast-name');
    const actionEl = toast.querySelector('.toast-action');
    const timeEl = toast.querySelector('.toast-time');

    if (avatarEl && nameEl && actionEl && timeEl) {
      avatarEl.src = data.img;
      nameEl.textContent = `${data.name} (${data.city})`;
      actionEl.textContent = "joined WhatsApp Group";
      timeEl.textContent = `🟢 ${data.time}`;
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);

    index = (index + 1) % members.length;
  }

  setTimeout(showNextToast, 4000);
  setInterval(showNextToast, 16000);
}
