# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Neural Architect"
This design system is built to bridge the gap between high-level marketing strategy and cutting-edge artificial intelligence. We move away from the "SaaS-standard" look of white boxes and generic blue buttons. Instead, we embrace **The Neural Architect**—a vision that treats the interface as a sophisticated, living ecosystem.

The system breaks traditional template rigidity through:
*   **Intentional Asymmetry:** Using unbalanced whitespace to drive the eye toward key data points.
*   **Tonal Depth:** Replacing physical borders with light and shadow to create a sense of infinite digital space.
*   **High-Contrast Scale:** Using dramatic shifts between massive `display-lg` typography and precise `label-sm` metadata to convey both authority and technical accuracy.

## 2. Colors

The color palette is a fusion of deep, atmospheric voids and high-energy kinetic accents.

### Color Tokens
*   **Background (`#0b1326`):** Our foundation. A deep, obsidian navy that provides the necessary contrast for glowing AI elements.
*   **Primary (`#aec6ff`):** An "Electric Ice" blue used for high-visibility UI signals.
*   **Secondary (`#ffbe2e`):** A "Kinetic Gold" derived from the original brand, elevated to feel like a spark of energy.
*   **Tertiary (`#6ad9c3`):** A "Synthetic Mint" for data visualizations and success states.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Tonal Transitions:** Using subtle `4rem` (Spacing 12) gaps to let the background color act as the separator.

### Glass & Gradient Strategy
Main CTAs and hero elements must avoid flat fills. Use linear gradients transitioning from `primary` to `primary_container` at a 135-degree angle. For floating panels, use "Glassmorphism":
*   **Fill:** `surface_variant` at 40% opacity.
*   **Effect:** Backdrop-blur of 12px to 20px.
*   **Stroke:** A "Ghost Border" (see Section 4).

## 3. Typography

Typography is our primary tool for establishing an "Editorial Tech" vibe. We pair **Plus Jakarta Sans** for high-impact brand moments with **Inter** for data-heavy utility.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "Voice" of the AI. Use `display-lg` for hero statements with tight letter-spacing (-2%) to feel authoritative and architectural.
*   **Titles & Body (Inter):** These are the "Logic" of the system. `body-lg` should be used for insights, ensuring a generous line-height (1.6) to allow the text to breathe against the dark background.
*   **Labels (Inter):** Small, all-caps or high-tracking metadata. These should use the `tertiary` or `outline` tokens to provide technical detail without distracting from the narrative.

## 4. Elevation & Depth

We reject traditional drop shadows. Depth in this system is achieved through **Tonal Layering**.

### The Layering Principle
Treat the UI as a series of nested physical planes:
1.  **Level 0 (Base):** `surface`
2.  **Level 1 (Sections):** `surface-container-low`
3.  **Level 2 (Cards/Modules):** `surface-container`
4.  **Level 3 (Interactive/Modals):** `surface-container-highest`

### Ambient Shadows
When an element must "float" (e.g., a modal), use a shadow with a blur radius of at least `32px`, at `8%` opacity. The shadow color must be a tinted version of the background (`#060e20`), never pure black.

### The "Ghost Border" Fallback
If an element requires a container but background shifts are insufficient, use a **Ghost Border**:
*   **Token:** `outline_variant`
*   **Opacity:** 15%
*   **Width:** 1px
*   **Purpose:** To catch the light "specularly" rather than to box the content in.

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (0.75rem) roundedness, and a subtle outer glow using the `surface_tint` at 20% opacity on hover.
*   **Secondary:** Ghost Border style. No fill, `outline` stroke at 40% opacity, white text.
*   **Tertiary:** Text-only with an arrow icon. Uses `secondary` (Gold) for the icon to draw the eye.

### Input Fields
*   **Base:** `surface_container_lowest` fill.
*   **Border:** No bottom border. Use a 1px `outline_variant` at 10% opacity on all sides.
*   **Focus:** Transition the Ghost Border to 100% `primary` opacity with a 2px "inner glow" (box-shadow).

### Cards & Data Visualization
*   **The Divider Rule:** Forbid the use of horizontal lines. Use `spacing-6` (2rem) of vertical whitespace to separate content chunks within a card.
*   **Glow Points:** Use the `secondary` or `tertiary` tokens as small 4px "status blips" or "nodes" in data viz to represent active AI processing.

### Custom Component: The "Insight Rail"
A vertical, 2px wide gradient line (from `primary` to transparent) that sits to the left of key testimonials or AI-generated insights, grounding the text and creating a "code-editor" aesthetic.

## 6. Do's and Don'ts

### Do:
*   **Do** use `surface-bright` for hover states on dark containers to create a "lifting" effect.
*   **Do** leverage the `spacing-20` scale for hero section padding to create a sense of luxury and scale.
*   **Do** apply `backdrop-filter: blur()` to any element that sits over a background gradient.

### Don't:
*   **Don't** use pure `#000000` or pure white `#FFFFFF` for body text; use `on_surface` and `on_surface_variant` to reduce eye strain in dark mode.
*   **Don't** use sharp corners. Every container must follow the **Roundedness Scale**, typically `lg` (0.5rem) for cards and `xl` for buttons.
*   **Don't** use heavy "drop shadows" that look like 1990s skeuomorphism. If it doesn't look like light passing through glass, it's too heavy.