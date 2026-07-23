---
name: Nocturnal Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c4c5d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e90a0'
  outline-variant: '#434655'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#2151da'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ffb59c'
  on-tertiary: '#5c1900'
  tertiary-container: '#a73400'
  on-tertiary-container: '#ffc9b7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The brand personality is authoritative, sophisticated, and technologically advanced. It targets professional users who require high-density information environments that remain legible during long-duration usage. 

The design style is **Corporate Modern** with a **Minimalist** focus on hierarchy. It leverages a deep, immersive dark mode to reduce eye strain while maintaining a sense of premium quality. Visual interest is generated through precise typography and purposeful use of the primary brand color against a monochromatic foundation. The emotional response should be one of calm, focused efficiency and unwavering reliability.

## Colors
The palette is anchored by **Deep Navy (#0f172a)** for the primary background, providing a rich, ink-like depth. **Slate (#1e293b)** serves as the secondary container color to establish visual hierarchy and separate content modules.

The **Corporate Blue (#1d4ed8)** is the primary accent, reserved for high-priority actions and active states. To ensure this blue "pops," it is supported by a brighter **Sky Blue (#38bdf8)** for secondary indicators or interactive hover states. Typography utilizes **High-Contrast White (#f8fafc)** for headlines and **Cool Gray (#94a3b8)** for secondary text to ensure maximum readability and reduced cognitive load.

## Typography
This design system utilizes a tiered typographic approach to balance character with utility. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary professional feel. **Inter** is the workhorse for body copy, chosen for its exceptional legibility in dark mode and systematic feel. For technical data, labels, and developer-facing UI elements, **Geist** provides a precise, monospaced-influenced aesthetic.

Large headlines should use tight tracking and bold weights to command attention, while body text requires generous line heights to prevent "halo" effects on dark backgrounds.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px spatial rhythm. On desktop, a 12-column grid is used with 24px gutters. On mobile, the system collapses to a 4-column grid with 16px margins.

Spacing is used to create grouping rather than relying on heavy lines. Large vertical gaps (64px+) are encouraged between major sections to allow the dark background to provide visual "breathing room." Content containers should utilize consistent internal padding (24px) to maintain a structured, architectural feel.

## Elevation & Depth
Depth is expressed through **Tonal Layering** rather than traditional shadows. Higher elevation levels are represented by lighter surface colors.
- **Level 0 (Base):** #0f172a.
- **Level 1 (Cards/Sections):** #1e293b.
- **Level 2 (Modals/Popovers):** #334155.

To maintain structure without adding visual noise, use **Low-contrast outlines**. Borders should be 1px solid with a 10% white opacity (`rgba(255, 255, 255, 0.1)`). This creates a subtle "glint" effect that defines edges without breaking the immersive dark aesthetic.

## Shapes
The shape language is **Rounded**, reflecting a modern and approachable corporate identity. A standard radius of 8px (0.5rem) is used for buttons and input fields. Larger containers like cards use 16px (1rem), while high-level layout sections or modals use 24px (1.5rem). This geometric consistency ensures the UI feels cohesive and engineered.

## Components
- **Buttons:** Primary buttons use the corporate blue (#1d4ed8) with white text. Secondary buttons are ghost-style with the subtle 10% white border and white text.
- **Input Fields:** Backgrounds should be #0f172a (darker than the container) to create an "inset" feel. Borders use the standard low-opacity white, turning primary blue on focus.
- **Cards:** Use #1e293b with a subtle 1px border. No shadows are required; the color shift from the base background provides sufficient separation.
- **Chips:** Small, pill-shaped elements using #334155 backgrounds and Geist Medium labels.
- **Lists:** Separated by thin, 1px horizontal lines at 5% white opacity. Hover states should use a subtle #334155 background highlight.
- **Status Indicators:** Use semantic colors (Green for Success, Red for Error) but desaturate them slightly (approx 10-15%) to prevent vibration against the deep navy background.