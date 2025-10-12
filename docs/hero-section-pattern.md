# Hero Section Candidates (Professional Terminology)

## 1. Full-Viewport Centered Hero with Split-Screen Layout

- **구조**: 100vh 풀스크린 히어로, 좌우 50:50 스플릿 레이아웃
- **좌측**: Vertical-centered text container with headline (H1), subheadline (H2/P), dual CTA buttons (primary/secondary)
- **우측**: Hero image/illustration with subtle parallax scroll effect
- **타이포그래피**: Large-scale display font (64-72px), high contrast ratio (WCAG AAA)
- **인터랙션**: Fade-in on load, staggered animation with 200ms delay between elements
- **반응형**: Desktop 50:50 split → Tablet 60:40 → Mobile single-column stack
- **Mobile**: Single-column vertical stack, image above or below text, headline 36-48px, subheadline 18-20px, CTA buttons stacked vertically (full-width or max-width 280px centered), min-height 100vh with safe-area-inset, padding 24-32px horizontal, parallax effect disabled for performance

---

## 2. Minimal Centered Hero with Background Video/Image Overlay

- **구조**: Single-column centered layout, full-viewport height with background media
- **배경**: Auto-playing muted video loop 또는 high-resolution hero image with gradient overlay (opacity 0.6-0.7)
- **컨텐츠**: Center-aligned content stack - eyebrow text (overline), headline, body copy, single prominent CTA
- **Z-index 레이어링**: Background media (z-0), gradient overlay (z-1), content layer (z-2)
- **타이포그래피**: Maximum contrast white text on dark overlay, 48-56px headline
- **반응형**: Content max-width reduces from 900px to 100% with padding
- **Mobile**: Headline 32-40px, body copy 16-18px, CTA full-width button (max-width 320px), background video replaced with static image (performance), gradient overlay opacity increased to 0.75 for better text readability, padding 20-24px, eyebrow text 12-14px

---

## 3. Asymmetric Grid Hero with Floating Card Components

- **구조**: CSS Grid 12-column layout, asymmetric content distribution (8-4 또는 7-5 비율)
- **메인 영역**: Headline + body copy with left-aligned text block, max-width 600px
- **서브 영역**: Floating card components with glassmorphism effect (backdrop-blur, semi-transparent background)
- **그리드 배치**: Primary content spans columns 1-8, cards positioned with grid-area overlapping
- **마이크로인터랙션**: Hover state with transform scale(1.05), smooth transition 300ms ease-out
- **반응형**: Desktop asymmetric → Tablet 60:40 → Mobile single-column
- **Mobile**: Single-column stack, cards below main content (no overlap), glassmorphism reduced or removed (performance), headline 32-36px, body copy 16px max-width 100%, cards horizontal scroll or 2-column grid, padding 20px, no hover effects (replaced with tap states)

---

## 4. Bento Grid Hero with Multi-Content Modules

- **구조**: Bento box style grid layout, 2x2 또는 3x2 모듈 배치
- **모듈 구성**: Hero headline module (large), feature highlights (medium), social proof/stats (small), visual media module
- **반응형**: Desktop 4-column grid → Mobile single-column stack
- **간격**: Consistent gap spacing (24-32px), rounded corners (12-16px border-radius)
- **계층**: Primary module 2x size, secondary modules 1x size with visual weight variation
- **Mobile**: Single-column vertical stack, all modules full-width, headline module at top (hero message first), reduced gap (16-20px), module height auto (not fixed), padding 16-20px, primary module maintains 1.5x visual emphasis through typography and padding, swipe indicators for any horizontal scroll modules

---

## 5. Scroll-Triggered Reveal Hero with Layered Depth

- **구조**: Multi-layer composition with foreground/midground/background elements
- **레이어링**:
    - Background: Ambient gradient or texture (fixed position)
    - Midground: Large typography with clipping mask effect
    - Foreground: CTA elements and supporting copy
- **스크롤 인터랙션**: Parallax scrolling with different transform rates per layer (background: 0.5x, midground: 0.8x, foreground: 1x)
- **진입 애니메이션**: Opacity fade + translateY transform with intersection observer trigger
- **타이포그래피**: Extra-large display text (80-120px) with text-fill gradient or clipping effect
- **반응형**: Layer complexity reduces on smaller screens
- **Mobile**: Parallax effect disabled (performance and UX), midground text 48-64px (readable size), simplified layer structure (2 layers instead of 3), background fixed position removed (scroll with content), foreground headline 28-36px, reduced animation complexity, padding 24px, clipping mask effect simplified or removed, static composition preferred over scroll-triggered for better mobile UX
