# BuildCorp - Enhanced Corporate Website

A modern, fully responsive corporate website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional design with gradients and subtle animations
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations using Motion/Framer Motion
- **Custom Color Scheme**: Blue-based color palette with purple and green accents
- **Accessibility**: Focus states, ARIA labels, and keyboard navigation support

### 🚀 Interactive Features
- **Sticky Header**: Navigation bar that sticks to the top with scroll effects
- **Mobile Menu**: Hamburger menu for mobile devices with smooth transitions
- **Smooth Scrolling**: Click navigation links for smooth scroll to sections
- **Scroll to Top Button**: Appears after scrolling down, smooth return to top
- **Loading Animation**: Initial page load animation with brand logo
- **Animated Counters**: Statistics count up when scrolled into view
- **Hover Effects**: Interactive hover states on buttons, cards, and links
- **Form Validation**: Contact form with validation and success notifications

### 📱 Sections
1. **Header/Navigation**
   - Sticky header with blur effect on scroll
   - Smooth scroll navigation
   - Mobile-responsive hamburger menu

2. **Hero Section**
   - Eye-catching headline and call-to-action
   - Animated background blobs
   - Statistics overlay on hero image
   - Multiple CTA buttons

3. **About Us**
   - Company history and values
   - Info highlight cards (Founded Year, Industry, Status)
   - Floating awards badge
   - Professional imagery

4. **Services**
   - Three service cards with icons
   - Hover effects with gradient backgrounds
   - Individual service descriptions
   - "Learn More" buttons

5. **Why Choose Us**
   - Five key features with icons
   - Animated statistics counters
   - Trust indicators section
   - Gradient background highlights

6. **Projects/Capabilities**
   - Image gallery with hover effects
   - Project categories
   - Overlay information on hover
   - "View All" button

7. **Contact Section**
   - Functional contact form
   - Form validation
   - Company information cards
   - Location map image
   - Toast notifications on submit

8. **Footer**
   - Company branding
   - Quick navigation links
   - Social media icons
   - Newsletter subscription
   - Copyright information

### 🛠️ Technical Features
- **React 18**: Latest React features with functional components
- **TypeScript**: Type-safe code throughout
- **Tailwind CSS v4**: Utility-first CSS framework
- **Motion**: Advanced animations and transitions
- **Intersection Observer**: Scroll-triggered animations
- **Custom Hooks**: `useInView` for scroll detection
- **Lucide Icons**: Modern icon library
- **Sonner**: Toast notifications
- **Custom Scrollbar**: Styled scrollbar matching brand colors

### 🎭 Animations
- Fade in animations on scroll
- Slide animations (left, right, up, down)
- Scale and hover animations
- Loading spinner
- Animated blob backgrounds
- Counter animations
- Smooth page transitions

### 📦 Components Structure
```
src/
├── app/
│   ├── components/
│   │   ├── enhanced-header.tsx
│   │   ├── enhanced-hero.tsx
│   │   ├── enhanced-about.tsx
│   │   ├── enhanced-services.tsx
│   │   ├── enhanced-why-choose.tsx
│   │   ├── enhanced-projects.tsx
│   │   ├── enhanced-contact.tsx
│   │   ├── enhanced-footer.tsx
│   │   ├── scroll-to-top.tsx
│   │   ├── page-loader.tsx
│   │   └── counter.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   └── App.tsx
└── styles/
    ├── index.css
    ├── theme.css
    ├── tailwind.css
    └── fonts.css
```

### 🎨 Color Palette
- **Primary**: Blue (#2563EB)
- **Secondary**: Purple (#9333EA)
- **Accent**: Green (#10B981)
- **Text**: Gray-900 (#111827)
- **Background**: White (#FFFFFF)
- **Muted**: Gray-50 to Gray-100

### 🔧 Customization
All components are modular and can be easily customized:
- Update colors in Tailwind config
- Modify section content in component files
- Add/remove sections in App.tsx
- Adjust animations in component motion properties

### 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Max Width: 1440px

### 🌟 Performance
- Optimized images from Unsplash
- Lazy loading with Intersection Observer
- Smooth 60fps animations
- Minimal re-renders with React best practices
- Tree-shaking for smaller bundle size

## 🚀 Getting Started

The website is ready to use and fully functional. Simply update the content in each component file to match your company's information.

### Quick Edits
1. **Company Name**: Search for "BuildCorp" and replace
2. **Colors**: Update Tailwind classes throughout components
3. **Images**: Replace Unsplash URLs with your own images
4. **Content**: Update text in each component file
5. **Social Links**: Update URLs in footer component

## 📝 Notes
- All animations are optimized for performance
- Forms include basic validation
- Toast notifications provide user feedback
- Custom scrollbar enhances brand consistency
- Accessibility features included throughout
