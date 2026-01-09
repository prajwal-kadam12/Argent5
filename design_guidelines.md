# Home Page Design Guidelines - Contemporary Minimalist Redesign

## Design Approach
**Reference-Based**: Drawing inspiration from Notion's clarity, Linear's polish, and Apple's minimalism - creating a clean, high-impact professional design with note-like simplicity and modern sophistication.

## Core Design Principles
- **Visual Hierarchy Through Space**: Generous whitespace creates breathing room and directs focus
- **Typography-Led Design**: Bold statements with restrained supporting elements
- **Purposeful Imagery**: Every image reinforces value, no decorative filler
- **Clean Geometric Layouts**: Crisp alignment and structured grids

---

## Typography System

**Primary Font**: Inter (Google Fonts) - clean, modern, highly legible
**Secondary Font**: Inter (same family, different weights for hierarchy)

**Hierarchy**:
- Hero Headline: 64px (4rem), font-weight: 700, letter-spacing: -0.02em
- Section Headings: 48px (3rem), font-weight: 600
- Subsection Titles: 32px (2rem), font-weight: 600
- Body Large: 20px (1.25rem), font-weight: 400, line-height: 1.7
- Body Standard: 16px (1rem), font-weight: 400, line-height: 1.6
- Small Text: 14px (0.875rem), font-weight: 500

---

## Layout System

**Spacing Primitives**: Use Tailwind units: 4, 8, 12, 16, 20, 24, 32
- Component internal padding: p-4 to p-8
- Section spacing: py-20 to py-32
- Element gaps: gap-8 to gap-12

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl for optimal readability

**Grid Systems**:
- Hero/Primary: Single column, centered
- Features: 3-column grid (lg:grid-cols-3, md:grid-cols-2, mobile: grid-cols-1)
- Content Blocks: 2-column layouts for balance (lg:grid-cols-2)

---

## Page Structure & Sections

### 1. Hero Section (80vh minimum)
- Full-width, impactful image background (see Images section)
- Centered content overlay with blurred button backgrounds
- Large hero headline + supporting subheadline (max-w-3xl)
- Primary CTA button + secondary text link below
- Subtle trust indicator text below CTAs ("Trusted by 50,000+ professionals")

### 2. Value Proposition Strip
- Single row highlighting 3-4 key metrics/benefits
- Clean icons (Heroicons) with bold numbers and labels
- Minimal design: white/light background, ample spacing
- 4-column grid on desktop, stacks on mobile

### 3. Core Features Grid
- 3-column card layout showcasing main features
- Each card: Icon (48px), bold title, concise description (2-3 lines)
- Cards with subtle borders, generous padding (p-8)
- Hover state: gentle lift effect (no aggressive animations)

### 4. Visual Showcase Section
- 2-column layout: Large image on left, content stack on right
- Content: Section heading, 3-4 bullet points with checkmark icons, CTA button
- Image shows product/service in context (see Images section)
- Alternate image/content sides for visual rhythm if multiple showcases

### 5. Social Proof Section
- Clean testimonial cards in 3-column grid
- Each card: Quote text, author name, role/company, small avatar image
- Minimal styling: light background, clean typography
- No carousel - static grid for credibility

### 6. Final CTA Section
- Centered, focused design with gradient or image background
- Large headline restating core value
- Single primary CTA button with blurred background
- Optional: Small supporting text about getting started

### 7. Footer
- 4-column layout: Company info, Product links, Resources, Contact
- Newsletter signup form integrated into footer
- Social media icons (Heroicons)
- Clean divider separating footer from main content
- Copyright and legal links at bottom

---

## Component Library

**Buttons**:
- Primary: Rounded-lg, px-8, py-4, font-semibold, text-lg
- Secondary: Outlined variant with same sizing
- On-image buttons: backdrop-blur-md with semi-transparent background

**Cards**:
- Border: 1px solid with subtle shadow
- Padding: p-8
- Border-radius: rounded-xl
- Background: Clean white/surface color

**Icons**:
- Use Heroicons via CDN
- Consistent sizing: 24px for inline, 48px for feature highlights
- Stroke-width: 2 for visual consistency

**Form Inputs** (Newsletter, Contact):
- Height: h-12
- Padding: px-4
- Border-radius: rounded-lg
- Focus state: subtle ring effect

---

## Images Section

### Required Images:

1. **Hero Background Image** (1920x1080px minimum)
   - Professional, high-quality photograph relevant to product/service
   - Subtle depth of field or gradient overlay for text readability
   - Placement: Full-width hero section background
   - Description: Modern workspace, product in use, or abstract professional imagery

2. **Product Showcase Image** (1200x800px)
   - Product interface screenshot or service in action
   - Placement: Visual Showcase Section (left side, 2-column layout)
   - Description: Clean, well-lit screenshot showing key functionality

3. **Testimonial Avatar Images** (3 images, 80x80px each)
   - Professional headshots of customers/clients
   - Placement: Social Proof Section within testimonial cards
   - Description: Diverse, authentic professional portraits

4. **Optional: CTA Section Background** (1920x600px)
   - Subtle pattern or gradient-enhanced image
   - Placement: Final CTA section background
   - Description: Abstract, professional background supporting call-to-action

**Image Treatment**: All images should feel modern, professional, and high-quality. Avoid stock photo clichés. Use real product shots and authentic customer photos where possible.

---

## Animation Guidelines
- **Minimal approach**: Only subtle hover states and scroll-triggered fades
- **Button hovers**: Gentle background shift (handled by component)
- **Card hovers**: Slight elevation with shadow increase (translateY: -2px)
- **Scroll effects**: Fade-in on viewport entry for sections (no aggressive parallax)

---

## Accessibility & Polish
- Maintain 4.5:1 contrast ratio for all text
- Focus states clearly visible on all interactive elements
- Semantic HTML structure for screen readers
- Responsive breakpoints: mobile (base), tablet (md: 768px), desktop (lg: 1024px)

This design creates a professional, contemporary home page that balances visual impact with clean minimalism - giving users a clear, engaging experience focused on value and credibility.