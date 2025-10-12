# Social Proof Section Candidates (Professional Terminology)

## 1. Logo Wall Grid with Grayscale Hover Effect

- **구조**: CSS Grid 4-6 column layout, equal-width cells with consistent spacing (40-60px gap)
- **로고 처리**: Grayscale filter (100%) on default state, full color on hover with smooth transition (300ms)
- **정렬**: Center-aligned logos within each cell, max-width constraint for size consistency
- **반응형**: Desktop 6-col → Tablet 4-col → Mobile 3-col
- **여백**: Section padding 60-80px vertical, contained max-width 1200px
- **타이포그래피**: Optional overline "Trusted by" with centered alignment above grid

---

## 2. Testimonial Carousel with Avatar Cards

- **구조**: Horizontal slider with navigation controls, single testimonial per view
- **카드 구성**: Quote text (18-22px) + Customer avatar (circular, 64-80px) + Name + Role/Company
- **레이아웃**: Center-aligned card with max-width 800px, generous padding (48-64px)
- **네비게이션**: Prev/Next arrows + dot pagination indicators below content
- **인터랙션**: Swipe gesture support, auto-play optional (5-7s interval), pause on hover
- **디자인**: Quotation mark icon, subtle shadow or border treatment

---

## 3. Stats Bar with Animated Counter Numbers

- **구조**: Horizontal flexbox layout with 3-4 stat modules, equal distribution
- **스탯 모듈**: Large number (48-72px bold) + descriptive label (14-16px) + optional icon
- **애니메이션**: Count-up animation triggered by IntersectionObserver, easing function for smooth increment
- **구분선**: Vertical dividers between modules (1px, subtle color)
- **반응형**: Desktop horizontal → Mobile vertical stack
- **시각적 강조**: Color accent on numbers, icon/illustration per metric

---

## 4. Masonry Grid Testimonial Wall

- **구조**: Masonry layout (CSS columns or JS library) with variable height cards, 3-4 columns
- **카드**: Compact testimonial card with quote + avatar + name + rating stars
- **카드 크기**: Auto-height based on content length, consistent width within column
- **간격**: 16-24px gap between cards, staggered visual rhythm
- **반응형**: Desktop 3-col → Tablet 2-col → Mobile 1-col
- **인터랙션**: Hover state with subtle scale or shadow increase

---

## 5. Featured Testimonial with Large Quote Block

- **구조**: Single prominent testimonial with asymmetric layout, 60:40 split
- **좌측**: Large pull quote with oversized quotation marks, 32-40px text size
- **우측**: Customer photo (large format, 400x400px+) with name, title, company logo
- **타이포그래피**: Serif font for quote text, distinct visual weight
- **배경**: Subtle background color or gradient to separate from surrounding content
- **CTA**: Optional "Read more stories" link below

---

## 6. Video Testimonial Grid with Thumbnail Preview

- **구조**: Grid layout 2x2 or 3x2 with video thumbnails, play button overlay
- **썸네일**: Aspect-ratio 16:9, poster frame with customer face visible
- **오버레이**: Play button icon (48-64px) centered, hover state with opacity change
- **모달**: Click to open video in lightbox/modal, native video player controls
- **하단 정보**: Customer name + company below each thumbnail
- **반응형**: Desktop 3-col → Tablet 2-col → Mobile 1-col

---

## 7. Review Aggregation Display with Star Ratings

- **구조**: Horizontal layout with multiple review platform scores (G2, Capterra, Trustpilot, etc.)
- **플랫폼 카드**: Platform logo + star rating (visual stars) + numerical score (4.8/5.0) + review count
- **레이아웃**: Flexbox horizontal scroll on mobile, fixed grid on desktop
- **시각적 처리**: Star icons in brand color (filled/half-filled), subtle card borders
- **신뢰 요소**: "Verified reviews" badge, recent update timestamp
- **간격**: 16-24px gap between platform cards

---

## 8. Inline Quote Ticker with Continuous Scroll

- **구조**: Horizontal auto-scrolling marquee with short testimonial snippets
- **컨텐츠**: Brief quotes (1-2 sentences) with attribution, repeated in loop
- **애니메이션**: CSS animation or JS-based continuous horizontal scroll (infinite loop)
- **속도**: Slow, readable scroll speed (30-50px per second), pause on hover optional
- **스타일**: Inline format with subtle separators (dots or vertical bars) between quotes
- **배경**: Contrasting background color to stand out from surrounding sections
- **접근성**: Duplicate content for screen readers, reduced motion consideration

---

## 9. Case Study Preview Cards with Metrics

- **구조**: 2-3 column grid with substantial case study cards
- **카드 구성**: Company logo + brief description + key metrics (2-3 stats) + "Read case study" CTA
- **메트릭 표시**: Bold numbers with percentage or multiplier indicators (e.g., "3x revenue growth")
- **이미지**: Optional product screenshot or customer photo
- **호버 효과**: Card lift with shadow increase, CTA color change
- **반응형**: Desktop 3-col → Tablet 2-col → Mobile 1-col stack

---

## 10. Social Media Embed Wall

- **구조**: Grid or masonry layout with embedded social posts (Twitter, LinkedIn, Instagram)
- **임베드**: Native platform embeds with iframe or API integration
- **큐레이션**: Selected positive mentions, customer success posts, user-generated content
- **레이아웃**: Mixed aspect ratios, organic feel with varied content types
- **로딩**: Lazy loading for performance, skeleton screens during load
- **CTA**: "Follow us" or "Join the conversation" link below grid
