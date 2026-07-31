---
name: Proton Flow
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006e2f'
  on-secondary: '#ffffff'
  secondary-container: '#6bff8f'
  on-secondary-container: '#007432'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-conversion lead generation, blending corporate reliability with the agility of modern SaaS. The brand personality is professional, transparent, and efficient. 

The aesthetic leans into **Modern Minimalism** with a focus on functional clarity. It utilizes significant white space to reduce cognitive load and directs the user's eye toward conversion points. The emotional response is one of "frictionless trust"—users should feel that the service is both high-tech and dependable. Visual interest is generated through precise typography and soft, depth-based layering rather than decorative ornamentation.

## Colors
The palette is anchored by a clean white background to maximize readability and perceived "freshness." 

- **Primary Blue (#2563EB):** Used for main Call-to-Action (CTA) buttons, links, and active states to establish authority and trust.
- **Secondary Green (#22C55E):** Reserved specifically for WhatsApp-related actions and success indicators, leveraging the familiar color association to drive engagement.
- **Surface Neutrals:** A range of cool grays (Slate) is used for borders, secondary surfaces, and subtle text hierarchies to maintain a professional, tech-forward feel.
- **High-Contrast Text:** Deep Navy (#0F172A) is used for headings to ensure maximum legibility and accessibility.

## Typography
This design system utilizes **Inter** for all roles to maintain a systematic, utilitarian appearance that prioritizes clarity. 

Headlines use bold weights and tight letter-spacing for a modern "SaaS" impact. Body text is set with generous line height to ensure high readability on mobile devices. For the lead generation landing page, the `headline-lg-mobile` role should be the primary choice for hero sections to ensure the value proposition is immediate and legible without overwhelming the small screen.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy optimized for mobile-first consumption.

- **Mobile:** A single-column layout with 20px side margins and 16px gutters for nested elements.
- **Desktop:** Transitions to a max-width container (1200px) with a 12-column grid.
- **Rhythm:** An 8px linear scale is used for all internal component spacing, while larger 24px-64px increments are used to separate logical sections of the landing page to create a clear visual narrative.

## Elevation & Depth
The system uses **Ambient Shadows** to create a sense of organized layers. Surfaces should feel elevated and "soft."

- **Level 1 (Cards):** Low-opacity, highly diffused shadows (Y: 4px, Blur: 12px, Spread: 0, Color: 0,0,0, 0.05) are used to lift content off the white background.
- **Level 2 (CTAs/Modals):** More pronounced shadows (Y: 8px, Blur: 24px, Color: 0,0,0, 0.1) to indicate high interactivity.
- **Transitions:** Background blurs (12px-20px) are used behind fixed navigation headers to maintain context while scrolling.

## Shapes
The shape language is defined by **Generous Roundedness**. 

All primary containers and UI elements use a base radius of 16px (rounded-lg) to evoke friendliness and modern SaaS aesthetics. Small interactive elements like checkboxes use 4px, while primary conversion buttons and lead-capture inputs utilize 12px to 16px to maintain a soft, approachable feel. Large "Success" cards or Hero background elements can scale up to 24px (rounded-xl) to further emphasize the premium, friendly nature of the design.

## Components
- **Buttons:** Primary buttons use a solid blue fill with white text. WhatsApp buttons use a solid green fill. All buttons feature a minimum height of 56px for mobile "thumb-friendliness" and 16px rounded corners.
- **Input Fields:** Use a light gray surface (#F8FAFC) with a 1px border (#E2E8F0). Focus states transition the border to Primary Blue with a subtle 4px blue outer glow.
- **Cards:** White background with Level 1 shadows and 16px padding. Used to group features, testimonials, or pricing tiers.
- **Chips:** Small, rounded-pill indicators for categories or "New" badges. Use low-saturation backgrounds (e.g., light blue tint) with dark primary text.
- **Checkboxes/Radios:** Large hit-areas (minimum 44px) to ensure ease of use during form completion on mobile.
- **Progress Bar:** A thin, Primary Blue bar at the top of multi-step lead forms to encourage completion and reduce drop-off.