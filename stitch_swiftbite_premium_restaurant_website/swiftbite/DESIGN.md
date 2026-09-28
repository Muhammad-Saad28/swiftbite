---
name: SwiftBite
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#ffe5b1'
  on-secondary: '#3f2e00'
  secondary-container: '#fec300'
  on-secondary-container: '#6d5200'
  tertiary: '#e1e1e1'
  on-tertiary: '#2f3131'
  tertiary-container: '#c4c5c5'
  on-tertiary-container: '#505252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#ffdf99'
  secondary-fixed-dim: '#f7be00'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-xl:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  price-tag:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a cinematic, late-night culinary aesthetic: high-contrast, moody, electric, and unapologetically appetizing. Built for swift modern dining and curated on-demand food delivery, the interface merges the visceral visual energy of haute street-food culture with the precision of a high-end luxury lifestyle app. 

### Visual Tone & Aesthetic
- **Cinematic Dark Contrast:** The environment is bathed in deep carbon and obsidian planes, allowing hyper-saturated food photography and golden culinary accents to ignite the viewport.
- **Electric Energy:** High-voltage amber and warm gold tones pierce the dark canvas to signal immediate action, heat, crispness, and speed.
- **Editorial Polish Meets Utility:** Structural elegance driven by bold, characterful editorial headlines balanced against high-density, hyper-legible geometric sans interfaces.

### Emotional Response
The interface must evoke instant craveability, rapid momentum, and premium dependability. Every tap feels crisp, responsive, and indulgent.

## Colors

The palette relies on absolute darkness punctured by concentrated warmth. It rejects washed-out mid-grays in favor of deep obsidian layers and luminous golden glows.

### Palette Architecture
- **Primary Accent (`#FFB800`):** Vibrant brand yellow. Represents heat, speed, and flavor. Reserved strictly for key interactive elements, primary CTAs, active status toggles, and brand badges.
- **Secondary Accent (`#FFC400`):** Luminous bright yellow. Used for hover states, focused triggers, micro-badges, rating stars, and directional glows.
- **Canvas Base (`#080808`):** Deepest void black. Ground-level background across screens and viewports.
- **Surface Elevation 1 (`#111111`):** Deep black. Default card base, list containers, and structural panels.
- **Surface Elevation 2 (`#1C1C1C`):** Dark gray. Interactive inputs, elevated modals, popovers, and segmented controls.
- **Typography & Content:**
  - **Crisp White (`#FFFFFF`):** High-priority titles, prices, critical data points, and inverted pill button labels.
  - **Soft White (`#F5F5F5`):** Standard body text, primary descriptors, and secondary iconography.
  - **Muted Gray (`#A5A5A5`):** Supporting metadata, ingredients, delivery timestamps, and disabled states.

### Contrast & Micro-Accents
Subtle borders using white at `0.08` opacity or primary gold at `0.18` opacity separate dark planes without creating rigid visual clutter. Yellow micro-accents should be deployed surgically—a dot indicator next to "Live Order", an illuminated culinary tag, or an active cart count.

## Typography

The typographic strategy balances editorial display drama with mechanical speed and clarity:

- **Headlines (Epilogue):** An expressive, structural typeface with deliberate geometric cuts. It delivers an appetizing culinary magazine presence when set in heavy weights (`700` and `800`) across large hero headers, promotional campaigns, and restaurant titles.
- **Body & Continuous Copy (Outfit):** A clean, modern geometric sans that ensures frictionless scanning of dish ingredients, prep notes, dietary badges, and customer reviews.
- **Labels, System Metrics & Currency (Space Grotesk):** A technical grotesque designed for rapid operational comprehension. Applied to timestamps ("18-24 MIN"), pricing badges, calories, tracking tags, and uppercase button states.

## Layout & Spacing

The layout model is driven by dense, high-frequency modules that lock together with clear visual boundaries:

- **Desktop (1024px+):** 12-column fluid grid with `margin: 2rem` and `gutter: 1.25rem`. Structural panels (e.g., sticky order summaries, side navigations, and live filters) adhere to 3 or 4 column allocations.
- **Tablet (768px - 1023px):** 8-column layout. Restaurant items shift from wide 4-column blocks to flexible 2-column food cards.
- **Mobile (<768px):** 4-column fluid layout with tight `margin-mobile: 1rem` and `gutter-mobile: 0.75rem`. Cards flow into vertical single-column feeds with horizontal overflow rails for quick dietary categories and top-selling dishes.
- **Component Padding Rhythm:** Strict application of base 4 increments. Internal food item padding stays compact (`space-md`) to maximize photographic hero space.

## Elevation & Depth

Visual depth is achieved through layered dark tones, fine translucent outlines, and selective amber radiance rather than heavy murky shadows.

### Surface Tiers
- **Tier 0 (Canvas):** `#080808` base. Static background.
- **Tier 1 (Resting Cards & Containers):** `#111111` with a `1px` continuous border in `rgba(255, 255, 255, 0.07)`.
- **Tier 2 (Floating Modals & Interactive Drawers):** `#1C1C1C` with `rgba(255, 255, 255, 0.12)` boundary outline and ambient deep-field shadow: `0 16px 36px rgba(0, 0, 0, 0.65)`.
- **Tier 3 (Active Overlays & Cart Bars):** Translucent `#111111` with `backdrop-filter: blur(16px)` and a directional top highlight border of `1px solid rgba(255, 184, 0, 0.25)`.

### Chromatic Light Embers
Hero dishes and promotional checkout triggers utilize ambient brand halos:
- `box-shadow: 0 8px 24px -4px rgba(255, 184, 0, 0.22)`
This creates a subtle culinary heat emission, pulling critical buttons off the dark canvas.

## Shapes

The interface balances sleek structural dark blocks with punchy, welcoming radii. Standard containers and interactive controls feature `roundedness: 2` (0.5rem / 8px).

### Curvature Hierarchies
- **Cards, Sheets & Carousels:** Standard container radius (`1rem` / 16px via `rounded-lg`) prevents the dark layout from appearing harsh or industrial.
- **Interactive Buttons & Pill Badges:** Full-capsule rounding (`9999px`) provides tactile, thumb-friendly targets that stand out starkly against rectangular card surfaces.
- **Images & Visual Assets:** Consistent `0.75rem` (12px) interior rounding to maintain harmonious spacing inside card borders.

## Components

### Buttons
- **Primary Action (Add to Cart / Place Order):** Solid `#FFB800` background, rich pitch-black text (`#080808`), full-pill radius, uppercase `label-lg` typography. Active hover lifts slightly with `#FFC400` and amber glow `0 0 16px rgba(255, 184, 0, 0.35)`.
- **Secondary Action (View Details / Modifiers):** Dark surface `#1C1C1C`, crisp white text (`#FFFFFF`), `1px solid rgba(255, 255, 255, 0.12)`. Hover shifts border to `rgba(255, 184, 0, 0.40)`.
- **Ghost Action (Clear / Counter Steppers):** Transparent fill, muted text (`#A5A5A5`), with immediate transition to `#FFFFFF` on interaction.

### Cards (Menu Items & Restaurant Profiles)
- Base fill of `#111111`, subtle `1px` border of `rgba(255, 255, 255, 0.06)`, `rounded-lg`.
- Top edge features high-contrast food imagery with an organic edge vignette.
- Bottom details present dish name in `Epilogue` (`headline-sm`), description in `Outfit` (`body-sm`), and a split footer featuring `#FFFFFF` price (`price-tag`) anchored by a circular primary yellow `+` add trigger.

### Chips & Filter Tags
- Fully rounded pills (`9999px`) set in `Space Grotesk` (`label-md`).
- **Inactive:** `#111111` surface with `1px solid rgba(255, 255, 255, 0.10)`, text in `#A5A5A5`.
- **Active:** `#FFB800` text, dark background `#1C1C1C`, defined by an electrified border `1px solid #FFB800`.

### Form Inputs & Search
- Container fill `#111111`, minimum height `48px`, border `1px solid rgba(255, 255, 255, 0.10)`.
- Placeholder text in `#A5A5A5`. Active focus creates a crisp `1px solid #FFB800` border with zero outline ring clutter.

### Checkboxes & Radio Selectors (Customizations & Add-ons)
- **Checkboxes:** Custom rounded squares (`4px`), base dark border `1.5px solid rgba(255, 255, 255, 0.2)`. Selected state fills `#FFB800` with an obsidian `#080808` checkmark.
- **Radios:** Outer ring transforms from muted gray to `#FFB800`, inner pip glows `#FFB800`.

### Domain-Specific Components
- **Live Order Progress Tracker:** Segmented dark rail with blazing `#FFB800` fill lines and pulsating amber micro-indicators marking kitchen prep, transit, and delivery milestones.
- **Cart Sticky Drawer:** Bottom-anchored glass sheet (`rgba(17, 17, 17, 0.88)` with `backdrop-filter: blur(20px)`), topped with an amber accent hairline border, showcasing dynamic total and instant primary checkout pill.