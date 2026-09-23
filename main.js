/**
 * ============================================================================
 * CAPITAL GROW - TELEGRAM GROUP & META PIXEL INTERACTION CONTROLLER
 * Direct Group Invite: https://t.me/capsgrowtm
 * ============================================================================
 * 
 * META PIXEL INTEGRATION:
 * 1. Base Pixel initialized in index.html with 'PageView'.
 * 2. On any CTA or feature click, 'TelegramJoinClick' and 'Lead' events are
 *    dispatched with lead parameters.
 * 3. Verify in browser console: window.testTelegramPixelEvent()
 * ============================================================================
 */

const TELEGRAM_LINK = "https://t.me/capsgrowtm";

document.addEventListener('DOMContentLoaded', () => {
  initMetaPixelTracking();
  initDisclaimerModal();
});

/* --------------------------------------------------------------------------
   1. Meta Pixel & Conversion Analytics Tracking
   -------------------------------------------------------------------------- */
let lastTelegramClickTime = 0;

/**
 * Dispatches Meta Pixel and Analytics events when a user clicks any conversion element.
 * Debounced to prevent accidental double-clicks within 400ms.
 * 
 * @param {string} sourceLabel - Identifier of the clicked element (e.g. 'primary_telegram_cta')
 */
function trackTelegramJoin(sourceLabel = 'telegram_button') {
  const now = Date.now();
  if (now - lastTelegramClickTime < 400) {
    return;
  }
  lastTelegramClickTime = now;

  const eventPayload = {
    value: 1,
    currency: 'INR',
    content_name: 'TelegramGroupJoin',
    content_category: 'Lead',
    button_location: sourceLabel,
    page_title: document.title,
    landing_page: window.location.pathname || '/'
  };

  // 1. Fire Meta Pixel 'TelegramJoinClick' & 'Lead'
  if (typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'TelegramJoinClick', eventPayload);
      window.fbq('trackCustom', 'TelegramJoinClick', eventPayload);

      // Meta standard 'Lead' event for campaign objective optimization
      window.fbq('track', 'Lead', {
        value: 1,
        currency: 'INR',
        content_name: 'TelegramGroupJoin',
        content_category: 'Lead'
      });

      console.log(`%c[Meta Pixel] Event 'TelegramJoinClick' & 'Lead' fired! Source: ${sourceLabel}`, 'color: #0088CC; font-weight: bold;', eventPayload);
    } catch (err) {
      console.error('[Meta Pixel] Error firing event:', err);
    }
  } else {
    console.warn('[Meta Pixel] fbq function not detected. Ensure ad blockers are disabled for tracking.');
  }

  // 2. Google Analytics (gtag.js) fallback if present
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'join_telegram_click', {
        event_category: 'conversion',
        event_label: sourceLabel,
        value: 1
      });
    } catch (err) {}
  }
}

/**
 * Initializes click listeners on all Telegram links and conversion pills.
 */
function initMetaPixelTracking() {
  const conversionLinks = document.querySelectorAll('a[href*="t.me"]');
  
  conversionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const sourceLabel = link.id || link.className.split(' ')[0] || 'telegram_link';
      trackTelegramJoin(sourceLabel);
    });
  });
}

/**
 * Global helper function for console testing and verification.
 * Run in browser console: window.testTelegramPixelEvent()
 */
window.testTelegramPixelEvent = function(testLocation = 'console_test') {
  console.group('🔍 Meta Pixel Verification Diagnostic');
  
  if (typeof window.fbq !== 'function') {
    console.error('❌ fbq is NOT defined on window. Check if Meta Pixel script is in <head> or blocked by ad-blocker.');
    console.groupEnd();
    return false;
  }
  console.log('✅ window.fbq is active and initialized.');
  console.log('🚀 Triggering test TelegramJoinClick & Lead events...');
  trackTelegramJoin(testLocation);
  console.log('💡 Verification Steps:');
  console.log('1. Open Meta Pixel Helper Chrome extension to inspect fired events.');
  console.log('2. Check Meta Events Manager "Test Events" tab.');
  console.groupEnd();
  return true;
};

/* --------------------------------------------------------------------------
   2. Regulatory Disclaimer Modal Controller
   -------------------------------------------------------------------------- */
function initDisclaimerModal() {
  const modal = document.getElementById('disclaimer-modal');
  const openBtn = document.getElementById('open-disclaimer-btn');
  const closeBtn = document.getElementById('close-disclaimer-btn');
  const dismissBtn = document.getElementById('modal-dismiss-btn');

  if (!modal || !openBtn) return;

  function openModal() {
    modal.hidden = false;
    // Force layout reflow before adding transition class
    void modal.offsetHeight;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.hidden = true;
      document.body.style.overflow = '';
    }, 250);
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
}
