# Navbar Section Candidates (Professional Terminology)

## 1. Horizontal Navigation Bar with Logo Left, Links Right

- **구조**: Flexbox layout with space-between alignment, fixed height (64-80px)
- **좌측**: Brand logo (max-height 32-40px), clickable link to homepage
- **중앙/우측**: Horizontal navigation links with 16-24px spacing, 14-16px font size
- **CTA 버튼**: Primary button (distinct color, padding 12px 24px) at far right
- **상태**: Sticky/fixed position on scroll, background opacity or blur effect
- **반응형**: Desktop full → Mobile hamburger menu icon (hidden links)
- **Mobile**: Hamburger icon (24x24px) top-right, logo left (max-height 28px), height reduced to 56-64px, full-width touch targets (min 44px)

---

## 2. Centered Logo Navbar with Split Navigation

- **구조**: Three-section layout - left nav links, center logo, right nav links
- **로고 배치**: Absolute center positioning with flexbox or grid
- **링크 분배**: Even distribution of links on both sides (2-3 links each)
- **시각적 균형**: Symmetric layout, logo as focal point
- **높이**: Taller navbar (80-100px) for prominent logo display
- **반응형**: Mobile collapses to standard hamburger layout
- **Mobile**: Logo moves to left, hamburger right, centered layout impossible on small screens, height 56px

---

## 3. Mega Menu Dropdown Navigation

- **구조**: Standard horizontal navbar with dropdown mega menu on hover/click
- **드롭다운**: Full-width or wide dropdown panel (800-1200px) with multi-column layout
- **메가 메뉴 구성**: 3-4 columns with category headers, list of sub-links, optional featured content/images
- **인터랙션**: Hover trigger with delay (200ms), click for mobile, smooth fade-in animation
- **오버레이**: Optional dark overlay on background content when menu open
- **깊이**: Z-index layering, box-shadow for depth perception
- **Mobile**: Full-screen overlay menu, single-column vertical layout, accordion sub-menus, swipe-to-close gesture, 100vh height

---

## 4. Sidebar Navigation (Hamburger Menu)

- **구조**: Mobile-first approach, hamburger icon (24-32px) triggers slide-in sidebar
- **사이드바**: Full-height overlay panel (280-320px width) sliding from left or right
- **컨텐츠**: Vertical stack of navigation links, large touch targets (48-56px height)
- **애니메이션**: Transform translateX with backdrop blur/fade, 300ms transition
- **닫기**: X icon in corner, click outside to close, ESC key support
- **스크롤**: Scrollable content if links exceed viewport height
- **Mobile**: Optimized for touch, 80-90% viewport width, swipe gesture to close, safe-area-inset padding for notched devices

---

## 5. Transparent Navbar with Scroll-Triggered Background

- **구조**: Initially transparent overlay on hero section, solid background on scroll
- **전환**: IntersectionObserver or scroll event triggers background-color change
- **텍스트 색상**: White text on transparent state, dark text after scroll (smooth transition)
- **애니메이션**: Background-color and color transition (300ms ease)
- **그림자**: Box-shadow appears on scroll for depth
- **높이**: Optional height reduction on scroll (80px → 64px)
- **Mobile**: Height 56px always, faster scroll threshold (50px instead of 100px), hamburger menu maintains color consistency

---

## 6. Two-Tier Navigation (Top Bar + Main Nav)

- **구조**: Two stacked horizontal bars - utility bar (top, 32-40px) + main nav (bottom, 64-80px)
- **상단 바**: Small announcements, language selector, social icons, contact info
- **하단 바**: Primary navigation with logo and main links
- **스크롤 동작**: Top bar hides on scroll, main nav becomes sticky
- **시각적 구분**: Different background colors or border separation
- **반응형**: Top bar collapses first, main nav converts to hamburger
- **Mobile**: Top bar hidden or shows only critical info (phone/language), main nav 56px height, single-tier approach preferred

---

## 7. Inline Navigation with Underline Indicators

- **구조**: Horizontal links with active state underline indicator
- **활성 상태**: Animated underline (2-3px thick) beneath current page link
- **호버 효과**: Underline expands from center on hover (transform scaleX animation)
- **전환**: Smooth indicator movement when switching pages (position transition)
- **타이포그래피**: Medium font-weight (500-600), letter-spacing for readability
- **간격**: Generous padding (16-20px horizontal) for clear hit areas
- **Mobile**: Converts to hamburger menu, underline indicators in vertical menu, active page highlighted with background color or left border

---

## 8. Split Navigation with Search Bar

- **구조**: Logo left, search input center, utility icons right
- **검색 바**: Prominent search input (300-400px width) with icon, rounded corners
- **우측 아이콘**: User profile, cart, notifications (icon-only, 24px size)
- **인터랙션**: Search expands on focus, autocomplete dropdown appears below
- **반응형**: Desktop full-width search → Mobile icon that expands overlay search
- **시각적**: Search as hero element, minimal link clutter
- **Mobile**: Logo left (compressed), search icon, utility icons right (max 3 icons), tap search for full-screen search overlay with back button

---

## 9. Navbar with Integrated Breadcrumb

- **구조**: Standard navbar with breadcrumb trail below main navigation
- **브레드크럼**: Horizontal trail with chevron separators, small text (12-14px)
- **레이아웃**: Breadcrumb appears below logo/links or in separate row
- **조건부 표시**: Only shows on sub-pages, hidden on homepage
- **링크**: Each breadcrumb level clickable, current page non-interactive
- **반응형**: Truncate long breadcrumbs with ellipsis on mobile
- **Mobile**: Breadcrumb below navbar (separate row, 32-40px height), show only last 2 levels with "..." for previous, horizontal scroll if needed

---

## 10. Floating Action Button (FAB) Navigation

- **구조**: Fixed position circular button (56-64px diameter) in bottom-right corner
- **트리거**: Click/tap opens radial menu or vertical list of nav options
- **애니메이션**: Expand animation with staggered item appearance
- **컨텐츠**: 4-6 key actions/links with icons and optional labels
- **백드롭**: Semi-transparent overlay when menu open
- **용도**: Secondary navigation, quick actions, mobile-optimized
- **Mobile**: Perfectly suited for mobile, 56px diameter, 16px margin from edges, haptic feedback on tap, avoid conflict with browser UI elements
