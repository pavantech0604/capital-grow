# Capital Grow — Landing Page & Meta Pixel Integration

This repository hosts the high-conversion landing page for the **Capital Grow** Telegram Trading Community.

---

## 🎯 Meta Pixel Setup & Event Tracking

### 1. Where the Code Was Added
- **Base Pixel Code (`<head>`)**: Inserted directly into [`index.html`](./index.html) before `</head>`. It initializes the Meta Pixel and fires the standard `PageView` event on every visitor's page load.
- **Conversion Tracking Engine**: Located in [`main.js`](./main.js) in `trackTelegramJoin()`, `initMetaPixelTracking()`, `initUniversalTelegramTriggers()`, and `initSocialProofToast()`.
- **Test Diagnostic Helper**: Accessible via `window.testTelegramPixelEvent()` in [`main.js`](./main.js).

---

### 2. Event Configuration
Whenever a visitor clicks any "Join Telegram" button, link, badge, preview card, or social proof popup, the following events fire before opening Telegram:

1. **Custom Event**: `TelegramJoinClick`
   - **Event Name**: `TelegramJoinClick`
   - **Parameters**:
     ```json
     {
       "value": 1,
       "currency": "INR",
       "content_name": "TelegramGroupJoin",
       "content_category": "Lead",
       "button_location": "hero_primary_cta",
       "landing_page": "/"
     }
     ```
2. **Standard Event**: `Lead`
   - **Event Name**: `Lead`
   - **Why this is included**: Meta Ad campaigns can immediately optimize for the native **"Lead"** conversion objective without requiring custom conversion mapping, while still recording `TelegramJoinClick` for custom reporting.

---

### 3. Step-by-Step: Activating Your Real Pixel ID

1. Open [`index.html`](./index.html).
2. Locate line 35 & 40:
   ```html
   fbq('init', 'YOUR_PIXEL_ID');
   ...
   src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
   ```
3. Replace both instances of `YOUR_PIXEL_ID` with your actual 15-to-16-digit Meta Pixel ID (e.g., `1234567890123456`).
4. Save the file and deploy.

---

### 4. How to Verify It’s Working

#### Method A: Browser Console Helper
1. Open your landing page in Chrome or any browser.
2. Press `F12` to open DevTools, switch to the **Console** tab.
3. Type:
   ```javascript
   testTelegramPixelEvent()
   ```
4. Look for the green success message:
   `[Meta Pixel] Event 'TelegramJoinClick' & 'Lead' sent successfully!`

#### Method B: Meta Pixel Helper (Chrome Extension)
1. Install the official [Meta Pixel Helper Chrome Extension](https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcofllicjlajpkdmockpc).
2. Visit your site. The extension badge should turn blue and show `1` or `2` (`PageView`).
3. Click any **Join Free Telegram Group** button.
4. The extension will immediately show `TelegramJoinClick` and `Lead` with a green checkmark.

#### Method C: Meta Events Manager "Test Events"
1. Go to [Meta Events Manager](https://adsmanager.facebook.com/events_manager2).
2. Select your Data Source (Pixel).
3. Click the **Test Events** tab.
4. Under "Confirm your website's events are set up correctly", enter your website URL and click **Open Website**.
5. Click the Telegram button on your site.
6. Return to Events Manager: you will see `PageView`, `TelegramJoinClick`, and `Lead` arriving in real-time.

---

### 5. Meta Ads Manager Setup (Optimizing for Telegram Joins)

1. **Option A (Recommended: Custom Conversion)**:
   - In Meta Events Manager, click **Custom Conversions** (left menu) > **Create Custom Conversion**.
   - Name: `Telegram Group Join`.
   - Data Source: Select your Pixel.
   - Event: Select `TelegramJoinClick`.
   - Rules: `URL` contains your domain (or leave default to all traffic).
   - In your Meta Ads campaign: Set Campaign Objective to **Leads** or **Sales**, and choose `Telegram Group Join` as the conversion event.

2. **Option B (Direct Standard Lead)**:
   - In Ads Manager, set Campaign Objective to **Leads**.
   - Under Conversion location, choose **Website**.
   - Under Conversion Event, select **Lead** (which automatically fires on every Telegram click).

---

### 6. Important Production Caveats
- **Ad Blockers**: Brave shields, uBlock Origin, and AdBlock block `connect.facebook.net`. If testing locally, disable your ad blocker.
- **In-App Browsers (Instagram/Facebook)**: Meta's in-app browser handles cookies and pixel tracking natively with 1st-party cookie parity (`_fbc` and `_fbp`).
- **Domain Verification**: Ensure your custom domain is verified under Meta Business Settings > Brand Safety > Domains.
