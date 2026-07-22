---
name: AeroVista
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
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#64a8fe'
  on-secondary-container: '#003c70'
  tertiary: '#3d454a'
  on-tertiary: '#ffffff'
  tertiary-container: '#545d62'
  on-tertiary-container: '#cdd6db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 64px
  gutter: 16px
  section-gap: 48px
---

## Brand & Style

The brand identity centers on the concept of "The Professional Explorer." It balances the reliability of an established airline with the excitement of global discovery. The visual language is defined by **Corporate Modernism**—clean, systematic, and highly functional—infused with **Glassmorphism** to reflect the ethereal quality of the sky and clouds.

The design system prioritizes a high-end travel experience through generous whitespace, high-fidelity imagery, and a refined color palette. The target audience is mobile-first travelers who value efficiency and a premium aesthetic. The emotional response is one of calm confidence, clarity, and the "magic of flight."

## Colors

The palette is rooted in a spectrum of atmospheric blues and crisp whites. 

- **Primary (Sky Blue):** A bold, trustworthy blue used for primary actions, navigation highlights, and brand reinforcement.
- **Secondary (Horizon Blue):** A lighter, vibrant blue used for secondary indicators and accentuating key features.
- **Surface (Cloud Tint):** A very light blue-white used for backgrounds and container fills to soften the interface compared to pure white.
- **Neutral (Midnight):** Deep navy used for high-contrast typography and essential UI borders, ensuring maximum legibility against light backgrounds.
- **Accent (Success/Action):** Specifically reserved for interactive "Book" or "Confirm" states, often utilizing a gradient of the primary and secondary blues.

## Typography

This design system utilizes **Manrope** for all levels to maintain a contemporary, geometric, yet highly legible feel. 

- **Headlines:** Use tighter letter-spacing and heavier weights to create a strong visual anchor for travel destinations and promotional offers.
- **Body Text:** Set with generous line heights to ensure readability during the high-stress activity of booking travel.
- **Labels:** Uppercase styles are used sparingly for category tags (e.g., "WORLD-CLASS TRAVEL") to differentiate metadata from primary content.
- **Hierarchy:** Contrast is achieved through weight variance rather than font switching, maintaining a unified professional aesthetic.

## Layout & Spacing

The layout philosophy follows a **fluid grid** model with a focus on vertical rhythm and "breathing room."

- **Mobile:** A 4-column grid with 20px side margins. Content cards typically span the full width or 2 columns for side-by-side comparison.
- **Desktop:** A 12-column grid with a maximum content width of 1280px.
- **Rhythm:** An 8px base unit governs all padding and margins. Vertical spacing between logical sections is intentionally large (48px+) to prevent the "clutter" common in travel booking sites.
- **Safe Areas:** Interactive elements like buttons always maintain a minimum 44px hit area, regardless of their visual size.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Soft Ambient Shadows**.

- **Level 1 (Base):** Flat, Cloud Tint background (#F0F9FF).
- **Level 2 (Cards/Containers):** Pure white backgrounds with a subtle, 1px border in a slightly darker blue tint. These use a very soft, diffused shadow (15% opacity, 20px blur) to appear "resting" on the surface.
- **Level 3 (Overlays/Modals):** Heavy backdrop blur (20px+) with 80% white opacity. This creates the sensation of looking through a window into the sky.
- **Z-Index:** Flight search bars and floating action buttons occupy the highest elevation, often using a primary color fill to "pop" against the blurs.

## Shapes

The shape language is "Rounded-Soft," mimicking the aerodynamic curves of aircraft and the softness of clouds.

- **Standard Elements:** 0.5rem (8px) for input fields and small cards.
- **Large Containers:** 1.5rem (24px) for hero sections and major content blocks to create a friendly, modern silhouette.
- **Interactive Elements:** Buttons utilize a pill-shape (full rounding) to clearly distinguish them as touchpoints and provide a sense of motion and speed.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Blue fill, White text. Uses a subtle horizontal gradient to suggest movement.
- **Secondary:** Pill-shaped, Transparent fill, Primary Blue border and text.
- **Ghost:** No border, Primary Blue text. Used for "Learn More" or "Cancel" actions.

### Cards
Travel destination cards use a fixed 4:5 aspect ratio for images. They feature a bottom-aligned text overlay with a slight glassmorphic gradient to ensure legibility over diverse photography.

### Input Fields
Booking inputs (Dates, Guests, Destination) use a "Large Label" style. The input container is white with a soft 1px blue border, turning into a 2px Primary Blue border on focus.

### Chips & Tags
Small, highly rounded (pill) tags used for status (e.g., "20% OFF" or "Business Class"). Backgrounds should be low-saturation versions of the primary blue to keep the focus on the headline.

### Navigation
Mobile navigation is anchored by a bottom bar for thumb-reachability, while Desktop uses a high-contrast top bar with clear utility icons for "Search," "Account," and "Saved Trips."