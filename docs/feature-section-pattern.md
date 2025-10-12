# Feature Section Candidates (Professional Terminology)

## 1. Three-Column Icon Feature Grid with Hover States

- **구조**: CSS Grid 3-column layout, equal-width columns with 24-32px gap
- **카드 구성**: Icon container (64x64px) + Heading (H3, 24px) + Body text (16px, line-height 1.6)
- **아이콘**: Line-style icons 또는 filled icons with brand color accent
- **인터랙션**: Hover시 card elevation increase (box-shadow transition), subtle transform translateY(-8px)
- **반응형**: Desktop 3-col → Tablet 2-col → Mobile 1-col stack
- **여백**: Padding 32-40px per card, margin-bottom 80px for section spacing
- **Mobile**: Single-column stack, full-width cards, icon 56x56px, heading 20-22px, body text 15-16px, card padding 24-32px, gap between cards 16-20px, hover effects replaced with tap states (no translateY), increased touch target for entire card, section margin-bottom 60px

---

## 2. Alternating Image-Text Feature Showcase (Zigzag Layout)

- **구조**: Stacked rows with alternating 60:40 split layout (image-text / text-image)
- **이미지 영역**: High-fidelity mockup 또는 feature screenshot with subtle shadow, aspect-ratio 16:9
- **텍스트 영역**: Vertical-centered content with eyebrow label, headline, description, optional CTA link
- **정렬**: Odd rows - image left / text right, Even rows - text left / image right
- **간격**: 80-120px vertical spacing between features, 60px horizontal gap
- **애니메이션**: Scroll-triggered fade-in with staggered delay (IntersectionObserver API)
- **Mobile**: Single-column stack, image always at top (no alternating), image full-width with 16:9 aspect-ratio, text below with padding 24-32px, headline 24-28px, description 15-16px, eyebrow 12-14px, vertical spacing reduced to 48-60px between features, horizontal gap removed, CTA link increased tap target (min 44px height), animation delay removed for faster load perception

---

## 3. Tabbed Feature Interface with Content Switching

- **구조**: Horizontal tab navigation + single content display area
- **탭 바**: Pill-style buttons with active state (background fill, color change), smooth sliding indicator
- **컨텐츠 영역**: Tab panel with fade transition (opacity + transform), 600px max-width for readability
- **레이아웃**: Tabs positioned above content, sticky positioning optional for long pages
- **상태 관리**: Active tab highlighting with aria-selected attribute for accessibility
- **인터랙션**: Click/tap to switch, smooth transition 300ms cubic-bezier easing
- **Mobile**: Tabs horizontal scroll (overflow-x: scroll, scroll-snap), tab buttons min-width 120-140px, smaller font (14px), content area full-width (no max-width), padding 20-24px, sticky tabs on scroll, swipe gesture support for content switching, simplified sliding indicator or removed, increased tap target height (min 44px), reduced transition duration (200ms for snappier feel)

---

## 4. Bento-Style Feature Mosaic with Variable Card Sizes

- **구조**: CSS Grid with explicit grid-template-areas, asymmetric module sizing
- **카드 크기**: Large (2x2), Medium (2x1 or 1x2), Small (1x1) mixed composition
- **내용 밀도**: Large cards - full feature explanation with visual, Small cards - icon + concise label
- **시각적 계층**: Primary features in large modules with high contrast, secondary features in smaller units
- **간격**: 16-24px gap, rounded corners 16-20px border-radius
- **배경**: Alternating background colors or gradient fills for visual interest
- **Mobile**: Single-column stack (all cards full-width), maintain visual hierarchy through order and padding, large cards first, gap reduced to 12-16px, card min-height 200px for large, 120px for small, all text readable (no truncation), padding per card 20-24px, rounded corners 12px, maintain color/gradient treatments, staggered entrance animation (100ms delay per card)

---

## 5. Accordion Feature List with Expandable Details

- **구조**: Vertical stack of collapsible accordion items, single-column layout
- **아코디언 헤더**: Feature title + expand/collapse icon (chevron rotation 180deg transition)
- **컨텐츠 패널**: Hidden by default (max-height: 0 → auto), padding transition for smooth expansion
- **상태**: One or multiple panels can be open simultaneously (controlled component state)
- **인터랙션**: Click header to toggle, smooth height transition 400ms ease-in-out
- **접근성**: Proper ARIA attributes (aria-expanded, role="button"), keyboard navigation support
- **Mobile**: Optimized for mobile (native behavior), header min-height 56px (full touch target), title font-size 16-18px, chevron 20-24px, content padding 16-20px, increased line-height (1.6-1.7) for readability, single panel open at a time (mobile optimization), smooth scroll to opened panel, reduced transition duration (300ms), clear visual separation between items (border or background)

---

## 6. Horizontal Scrolling Feature Cards (Carousel/Slider)

- **구조**: Overflow-x scroll container with snap-scroll behavior (scroll-snap-type: x mandatory)
- **카드**: Fixed-width feature cards (320-400px), scroll-snap-align: start
- **네비게이션**: Prev/Next arrow buttons + dot indicators for current position
- **터치**: Swipe gesture support on mobile, momentum scrolling enabled
- **페이징**: 3-4 cards visible on desktop, 1-2 on mobile, partial card peek for scroll hint
- **인터랙션**: Auto-scroll optional with pause on hover, manual control preferred
- **Mobile**: Single card view (card width 85-90vw), prominent partial peek (10-15% of next card), arrow buttons hidden (swipe only), dot indicators enlarged (12-16px with spacing), snap-scroll enhanced (scroll-snap-stop: always), card padding 20-24px, reduced card content for mobile (icon + title + short description), horizontal padding 16-20px on container, momentum scrolling optimized

---

## 7. Split-Screen Feature Comparison with Toggle Switch

- **구조**: 50:50 split layout with vertical divider, left/right feature comparison
- **토글 스위치**: Center-aligned toggle to switch between two feature sets or modes
- **컨텐츠**: Mirror layout on both sides - headline, list of sub-features, supporting image
- **전환 효과**: Cross-fade animation when toggling (opacity transition + slight scale transform)
- **용도**: "Basic vs Pro", "Before vs After", "Option A vs Option B" 비교
- **반응형**: Desktop split → Mobile stacked with toggle above
- **Mobile**: Stacked layout (toggle at top), selected option displayed first (full-width), inactive option below with reduced opacity (0.5-0.6), toggle switch enlarged (width 64-72px, height 36-40px), clear labels (16px font), smooth scroll to selected section, headline 22-26px, feature list items 15-16px, padding 24-32px per section, scale animation removed (performance), optional: show only active section and hide inactive

---

## 8. Interactive Feature Matrix with Filtering

- **구조**: Grid of feature cards with category filter buttons at top
- **필터 바**: Horizontal button group (All, Category 1, Category 2...) with active state styling
- **카드 그리드**: 3-4 column responsive grid that re-renders based on filter selection
- **필터 로직**: Click filter button → fade out non-matching cards (opacity 0 + scale 0.95) → fade in matches
- **애니메이션**: Staggered re-entrance animation with 50ms delay per card
- **카운터**: Display filtered count "Showing X of Y features" for user feedback
- **상태**: Active filter button with distinct visual treatment (filled background, bold text)
- **Mobile**: Single-column card grid, filter buttons horizontal scroll (snap-scroll), button min-width 100-120px, filter bar sticky on scroll, card full-width with padding 20-24px, reduced animation complexity (simple fade without scale), stagger delay removed (all appear together), counter text 14px below filters, active filter button larger tap target (min 44px height), simplified grid transitions (instant rather than animated for better mobile UX), card gap 12-16px
