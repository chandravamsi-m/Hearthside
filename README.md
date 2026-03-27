# 🏨 Hearthside — Bed & Breakfast & Boutique Hotel HTML Template

> **Development Blueprint** — Architecture & Planning Document
> For use with AI coding tools (Cursor, Windsurf, etc.) and human developers.
> Built with HTML · Tailwind CSS (CDN) · Vanilla JavaScript — No JS frameworks assumed.

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [Guest Dashboard Pages](#6-guest-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field              | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Template Name**  | Hearthside — Bed & Breakfast & Boutique Hotel Template                     |
| **Template Category** | Booking / Reservation (per Architecture Guide §2, Type 4)          |
| **Target Audience** | Independent B&B owners, boutique hotel operators, luxury guesthouses, countryside retreats, heritage properties |
| **Template Purpose** | Drive commission-free direct bookings by replacing third-party OTA dependency with a high-conversion property website. Combines editorial-quality room photography presentation, local attraction storytelling, and a self-service guest dashboard for end-to-end booking management. |
| **Design Aesthetic** | Refined luxury editorial — warm ivory/parchment tones, deep forest green and brass/gold accents. Serif display headings (e.g. Playfair Display or Cormorant Garamond) paired with clean humanist body text. Feels like a lifestyle magazine, not a hotel booking engine. |
| **Dashboard Required** | Yes — Guest Dashboard + Admin Dashboard |

---

## 2. Architecture Overview

The template is split into two distinct but visually unified layers:

### Layer 1 — Public Marketing Website
A storytelling-first website designed to convert visitors into direct bookers. Emphasizes property character, photography, local context, and trust signals (reviews, awards, certifications). All pages share a consistent navbar, footer, and brand identity. The goal is to compete with OTA listing quality while owning the guest relationship.

### Layer 2 — Guest Dashboard (Authenticated)
A private portal accessible after login. Guests can check real-time room availability, initiate and manage bookings, submit special requests (dietary needs, room setup, arrival time), view their booking history, download invoices, and manage their profile. The dashboard replaces the need for guests to call the property for routine tasks.

### Layer 3 — Admin Dashboard (Authenticated, Separate Role)
A property management interface for the owner/staff. Provides a birds-eye view of occupancy, manages incoming bookings (confirm/cancel/modify), handles guest communications and special requests, controls room inventory and pricing, and generates reports. No heavy CMS — content remains static HTML with clearly marked customisation points.

```
PUBLIC SITE  ──→  Authentication Gateway  ──→  GUEST DASHBOARD
                                          ──→  ADMIN DASHBOARD
```

---

## 3. Public Website Pages

### 3.1 Core Pages (Required by Architecture Guide §1.1)

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | Home 1 | `index.html` | Cinematic hero variant — full-bleed video/image hero, emotional property story |
| 2 | Home 2 | `home-2.html` | Availability-first variant — hero contains embedded room search bar as primary CTA |
| 3 | About Us | `about.html` | Property story, founding narrative, host profiles, philosophy, awards |
| 4 | Rooms & Suites | `rooms.html` | Filterable room listing grid (all room types) |
| 5 | Room Detail | `room-detail.html` | Single room deep-dive with gallery, amenities, rates, booking CTA |
| 6 | Services & Amenities | `amenities.html` | Breakfast menu, spa, concierge, event hosting, pet policy, parking |
| 7 | Local Attractions | `explore.html` | Curated local area guide — restaurants, landmarks, experiences, map |
| 8 | Gallery | `gallery.html` | Full property photography showcase, lightbox enabled, filterable by area |
| 9 | Experiences | `experiences.html` | Packaged stays (honeymoon package, weekend retreat, culinary escape) |
| 10 | Testimonials / Reviews | `reviews.html` | Verified guest reviews, star ratings, response from host |
| 11 | Contact | `contact.html` | Enquiry form, Google Maps embed, phone/email, directions |
| 12 | FAQ | `faq.html` | Check-in/out times, cancellation policy, accessibility, pet policy |
| 13 | Blog / Journal | `blog.html` | Property news, seasonal guides, local events, hosting stories |
| 14 | Blog Post | `blog-post.html` | Single article template with related posts |
| 15 | Booking Confirmation | `booking-confirm.html` | Post-booking summary page (public-facing, pre-login) |
| 16 | 404 Error | `404.html` | Custom error page with search and navigation |
| 17 | Coming Soon | `coming-soon.html` | Pre-launch or seasonal closure page with newsletter signup |

### 3.2 Additional Template-Specific Pages

| # | Page | File | Rationale |
|---|------|------|-----------|
| 18 | Special Offers | `offers.html` | Direct booking incentives (early bird, last-minute, extended stay discounts) |
| 19 | Weddings & Events | `events.html` | Property hire for private events — enquiry-driven, no online checkout |
| 20 | Gift Vouchers | `gift-vouchers.html` | Purchasable stays or experiences as gifts — Stripe placeholder |
| 21 | Sustainability | `sustainability.html` | Eco credentials, local sourcing, community involvement — brand trust page |
| 22 | Accessibility | `accessibility.html` | WCAG compliance statement, accessible room info, assistance services |

---

## 4. Homepage Layouts

Both homepages share the same footer and global navbar but differ in hero strategy, section order, and primary CTA placement. A visitor arriving via Google Ads (conversion intent) sees Home 2; a visitor exploring organically sees Home 1.

---

### Home 1 — "The Story Homepage" (Cinematic / Emotional)

**Design Intent:** Lead with atmosphere and feeling. Let the property's character seduce the visitor before presenting the booking mechanism.

| Section | Component | Notes |
|---------|-----------|-------|
| **S1 — Cinematic Hero** | Full-bleed background video or parallax image with layered headline, subheadline, and a single ghost-button CTA ("Explore Rooms") | Video autoplay muted, fallback image for mobile. Subtle text-reveal animation on load. |
| **S2 — Quick Availability Strip** | Inline horizontal form: Check-in / Check-out / Guests / Search button | Sticky behaviour on scroll. Positioned below hero fold. |
| **S3 — Property Introduction** | Two-column layout: editorial headline left, short atmospheric paragraph right + small decorative rule | Sparse, magazine-style. No stock-style copywriting. |
| **S4 — Signature Rooms** | Horizontal scroll or 3-column grid: room name, one hero image, key detail (size, bed type), price-from, Book CTA | Lazy-loaded images. Hover reveals secondary image. |
| **S5 — The Experience** | Alternating left/right image + text blocks for 3 selling pillars (e.g. Handcrafted Breakfast / Curated Local Guide / Private Garden) | Each block has an icon, headline, 2-line description. Scroll-reveal animations. |
| **S6 — Local Area Teaser** | Full-width illustrated or photography map section with 4 featured nearby attractions as overlay cards | Links to `explore.html`. |
| **S7 — Guest Reviews** | Minimal testimonial slider: large quote, guest name, stay date, star rating | Auto-advance with pause-on-hover. No third-party widget dependency. |
| **S8 — Special Offers Banner** | Full-width warm-tone banner with current direct booking offer (e.g. 10% off) and CTA | Dismissible cookie-based behaviour. |
| **S9 — Photo Gallery Teaser** | Masonry 6-image grid with "View Full Gallery" CTA | Lightbox opens inline. Links to `gallery.html`. |
| **S10 — Blog / Journal Teaser** | 3-card article grid: featured image, category tag, title, read-time | Links to `blog.html`. |
| **S11 — Newsletter / Loyalty Strip** | Minimal single-field email capture with Mailchimp/ConvertKit placeholder | Value proposition: "Be first to hear about exclusive offers." |
| **S12 — Footer** | Full footer component (see Navigation Structure §8) | |

---

### Home 2 — "The Booking Homepage" (Conversion / Functional)

**Design Intent:** Visitor arrives ready to book. Reduce friction. Put availability and rooms front-and-centre without sacrificing brand quality.

| Section | Component | Notes |
|---------|-----------|-------|
| **S1 — Hero with Embedded Search** | Shorter hero (60vh) with property name, one-line tagline, and full booking search form embedded in the hero area (check-in, check-out, guests, room type dropdown, Search CTA) | The form is the hero's anchor, not a secondary element. |
| **S2 — Trust Bar** | Single row of trust signals: star rating, review count, award badges, "No booking fees" badge, "Best Rate Guarantee" | Immediately beneath hero. Builds conversion confidence. |
| **S3 — Room Availability Grid** | Live-state room cards (6–9 rooms shown): image, name, key amenity icons, nightly rate, availability badge (Available / Only 2 Left / Unavailable), Book Now button | Filtered by search form. "Unavailable" cards greyed with a "Join Waitlist" option. |
| **S4 — Why Book Direct** | Icon + text 3-column block: "Lowest Rate Guaranteed" / "Free Cancellation" / "Complimentary Upgrade" | Short, punchy copy. Directly addresses OTA comparison shopping behaviour. |
| **S5 — Featured Packages** | 3 horizontal cards: experience package name, included items checklist, price, CTA | Links to `experiences.html`. |
| **S6 — Property Highlights Carousel** | Auto-advancing 5-slide carousel with full-width room/property images, minimal text overlay | Touch-swipe enabled. |
| **S7 — Guest Reviews** | Review widget: aggregate score, count, latest 3 reviews in card format | Same component as Home 1 but condensed 3-card layout. |
| **S8 — Location Section** | Embedded Google Maps placeholder with distance chips to key local landmarks | Answers "where is it?" objection quickly. |
| **S9 — FAQ Accordion** | 5 most common pre-booking questions (check-in time, cancellation, parking, breakfast, pets) | Inline accordion, no page redirect needed. |
| **S10 — Footer** | Full footer component | |

---

## 5. Authentication Pages

All authentication pages share a consistent two-column layout: left column — full-height branded property image with an overlaid quote; right column — the form. On mobile, the image column collapses and a header logo + minimal decoration replaces it.

| # | Page | File | Fields / Features |
|---|------|------|--------------------|
| 1 | **Login** | `auth/login.html` | Email, Password, "Remember me" checkbox, Forgot Password link, Login CTA, Social login placeholders (Google/Facebook), "New guest? Create account" link |
| 2 | **Sign Up / Register** | `auth/register.html` | First Name, Last Name, Email, Password, Confirm Password, Phone (optional), Marketing opt-in checkbox, Terms agreement, Register CTA, "Already have an account?" link |
| 3 | **Forgot Password** | `auth/forgot-password.html` | Email field, "Send Reset Link" CTA, back-to-login link, success state message |
| 4 | **Reset Password** | `auth/reset-password.html` | New Password, Confirm New Password, strength indicator, "Set New Password" CTA |
| 5 | **Email Verification** | `auth/verify-email.html` | Confirmation state page shown after registration, "Resend Email" link |
| 6 | **Logout Confirmation** | `auth/logout.html` | Simple confirmation of logout with redirect to home |

**Authentication UI Notes:**
- All forms include client-side validation with inline error messages (no alert dialogs)
- Password fields have show/hide toggle
- Loading state on submit buttons (spinner replaces button text)
- WCAG 2.1 AA compliant: labels, ARIA attributes, keyboard navigation fully functional
- No backend required — forms are placeholder-ready (Formspree or custom endpoint swap)

---

## 6. Guest Dashboard Pages

The guest dashboard uses a persistent left sidebar on desktop and a top-slide drawer on mobile. The header displays the property logo, guest name, notifications bell, and profile avatar.

### Dashboard Shell

| Element | Description |
|---------|-------------|
| **Sidebar** | Property mini-logo, navigation items with icons, collapse toggle, user card at bottom (avatar, name, logout) |
| **Top Bar** | Page title breadcrumb, notification bell with badge, dark/light toggle, profile avatar dropdown |
| **Content Area** | Main page body, 12-column grid system, responsive card layouts |

---

### Guest Dashboard Pages Detail

| # | Page | File | Key Sections / Widgets |
|---|------|------|------------------------|
| 1 | **Dashboard Home** | `dashboard/index.html` | Welcome message with guest name, upcoming booking card (prominent), quick-action buttons (New Booking, View History, Special Request), property announcements notice, loyalty points widget (if applicable) |
| 2 | **Check Availability** | `dashboard/availability.html` | Interactive availability calendar (month view), room type filter tabs, colour-coded availability (green/amber/red), room cards appear below for selected date range, direct "Book This Room" CTA per card |
| 3 | **New Booking** | `dashboard/new-booking.html` | Multi-step booking wizard — Step 1: Date & Guests selection → Step 2: Room Selection (cards with images) → Step 3: Add-ons & Special Requests → Step 4: Review & Confirm → Step 5: Payment Placeholder (Stripe embed point). Progress indicator at top. |
| 4 | **My Bookings** | `dashboard/bookings.html` | Tab navigation: Upcoming / Past / Cancelled. Each booking shown as a card: room name, thumbnail, dates, booking reference, status badge, action buttons (View, Modify Request, Cancel). |
| 5 | **Booking Detail** | `dashboard/booking-detail.html` | Full booking summary card, room detail panel, guest count, add-on items listed, total amount paid, payment receipt link, special requests submitted, status timeline (Confirmed → Checked In → Checked Out), "Add Special Request" button |
| 6 | **Special Requests** | `dashboard/requests.html` | Form to submit new requests (text field + category selector: Dietary / Room Setup / Transport / Other / Celebration). Table of submitted requests with status (Pending / Confirmed / Declined) and property response column. |
| 7 | **Invoices** | `dashboard/invoices.html` | Table: Invoice #, Booking Ref, Date, Amount, Status (Paid/Pending), Download PDF button. Filterable by year. |
| 8 | **Local Guide** | `dashboard/explore.html` | Personalised version of the public explore page — bookmarking capability, "Recommended for you" section based on stay type (e.g. romantic, family). |
| 9 | **Profile Settings** | `dashboard/profile.html` | Tab layout — Personal Info (name, phone, address, date of birth), Login & Security (change email, change password, 2FA placeholder), Communication Preferences (email notifications, SMS opt-in), Saved Payment Methods (placeholder) |
| 10 | **Notifications** | `dashboard/notifications.html` | Chronological list of notifications: booking confirmations, special request updates, promotional offers. Read/unread state. Mark all read CTA. |
| 11 | **Help & Support** | `dashboard/help.html` | FAQ accordion (booking-specific), direct contact form to property, emergency contact number, live chat placeholder widget |

---

## 7. Admin Dashboard Pages

The admin dashboard shares the same shell design system as the guest dashboard but uses a richer sidebar (more sections), a distinctive role indicator in the header (e.g. "Admin" badge), and expanded data tables. Admin is accessible via a separate login route.

| # | Page | File | Key Sections / Widgets |
|---|------|------|------------------------|
| 1 | **Admin Overview** | `admin/index.html` | KPI stat cards (Tonight's Occupancy Rate, Arrivals Today, Departures Today, Revenue This Month), weekly occupancy bar chart, upcoming arrivals table (next 7 days), recent bookings feed, low inventory alert banner |
| 2 | **Booking Management** | `admin/bookings.html` | Master bookings table with full filters (date range, room, status, source). Bulk actions (confirm, cancel). Per-row: expand for details, edit status, add internal note, send guest message. Export to CSV placeholder. |
| 3 | **Booking Detail (Admin)** | `admin/booking-detail.html` | Extended view of a single booking — all guest data, payment status, special request thread, internal notes section, status change controls, communication log |
| 4 | **Room Management** | `admin/rooms.html` | Grid of all rooms: thumbnail, name, type, capacity, base rate, current status (Available/Occupied/Maintenance). Edit modal per room: name, description, amenities checklist, rate override, image upload point, availability block tool |
| 5 | **Availability Calendar** | `admin/calendar.html` | Full-property month/week calendar. Each room is a row. Cells show booking status colour-codes. Click cell to view/create booking. Drag-to-block unavailable dates. |
| 6 | **Guest Management** | `admin/guests.html` | Guest directory table: name, email, total stays, total spend, last stay, loyalty tier. Click guest to view full history. Flag for VIP, add notes. |
| 7 | **Guest Profile (Admin)** | `admin/guest-profile.html` | Complete guest record: contact details, booking history, all invoices, special request history, internal notes, communication history, blacklist/flag controls |
| 8 | **Special Requests** | `admin/requests.html` | Inbox-style view of all active special requests. Filter by status (Pending / Confirmed / Declined). Per-request: respond with action + message, mark resolved. |
| 9 | **Payments & Revenue** | `admin/payments.html` | Revenue summary cards (daily/weekly/monthly/YTD). Transactions table (booking ref, guest, amount, method, date, status). Refund action placeholder. Export to CSV. |
| 10 | **Reports & Analytics** | `admin/reports.html` | Chart panels: Occupancy rate over time (line chart), Revenue by room type (bar chart), Booking sources breakdown (pie/donut), Average length of stay, Cancellation rate. Date range selector. Print/export placeholder. |
| 11 | **Content Management** | `admin/content.html` | Light CMS interface for property staff to update: Special Offers banner text/dates/discount code, Blog post editor (title, body, featured image — placeholder), Announcements sent to guest dashboards |
| 12 | **Staff Management** | `admin/staff.html` | Team member table: name, role, email, access level. Invite new staff form. Deactivate account toggle. |
| 13 | **Settings** | `admin/settings.html` | Tabs: Property Info (name, address, check-in times, cancellation policy text), Booking Rules (min stay, max advance days, deposit %), Email Templates (confirmation, reminder, cancellation — editable text areas), Integrations (API key placeholder fields for Stripe, Google Maps, Mailchimp), System (date format, currency, timezone) |
| 14 | **Notifications** | `admin/notifications.html` | System-level notification feed: new bookings, cancellations, special requests, payment alerts, low availability warnings |

---

## 8. Navigation Structure

### 8.1 Public Website Navbar

**Desktop Layout:** Logo (left) | Nav Items (centre) | Utility Items (right)

```
Logo (Hearthside)  |  Home ▾  |  Rooms  |  Experiences  |  Explore  |  Gallery  |  Blog  |  Contact  |  [🌙 Dark Mode] [EN▾] [Book Now CTA]
```

**Home Dropdown (required — two homepage variants):**
```
Home ▾
├── Home 1 — The Story
└── Home 2 — Book Direct
```

**Rooms Dropdown:**
```
Rooms ▾
├── All Rooms & Suites
├── [Room Name 1]
├── [Room Name 2]
├── [Room Name 3]
└── Check Availability →
```

**Utility Area (right of navbar):**
- Dark/Light Mode Toggle (icon button)
- Language selector dropdown (EN / AR for RTL support)
- "My Account" link (shows "Sign In" if logged out, avatar dropdown if logged in)
- "Book Now" — primary CTA button (accent colour, rounded)

**Mobile Navbar:**
- Hamburger icon (top-right)
- Full-screen slide-in drawer from right
- Accordion-style dropdowns for Home and Rooms
- Book Now button pinned to bottom of drawer

---

### 8.2 Guest Dashboard Sidebar

```
[Property Logo + "Guest Portal"]
─────────────────────────
🏠  Overview
📅  Check Availability
🛏️  New Booking
📋  My Bookings
⭐  Special Requests
🧾  Invoices
🗺️  Local Guide
─────────────────────────
🔔  Notifications
❓  Help & Support
─────────────────────────
[Guest Avatar] [Name]     [→ Logout]
```

### 8.3 Admin Dashboard Sidebar

```
[Property Logo + "Admin"]
─────────────────────────
📊  Overview
📋  Bookings
🏨  Room Management
📅  Availability Calendar
👥  Guest Management
⭐  Special Requests
─────────────────────────
💳  Payments & Revenue
📈  Reports & Analytics
✏️   Content Management
👤  Staff Management
─────────────────────────
⚙️   Settings
🔔  Notifications
─────────────────────────
[Admin Avatar] [Name]     [→ Logout]
```

---

## 9. Component Library

All components are built as standalone HTML partials styled with **Tailwind CSS utility classes** and minimal JS. Each component must work in both light and dark mode via Tailwind's `dark:` variant (class-based dark mode strategy).

### 9.1 Global Components

| Component | Description |
|-----------|-------------|
| `c-navbar` | Public site navigation with dropdown support, mobile drawer |
| `c-footer` | 4-column footer: logo+tagline, quick links, contact details, social icons, awards badges, newsletter form |
| `c-hero` | Configurable hero: full-bleed image/video variant and compact variant with search form |
| `c-breadcrumb` | Accessible breadcrumb trail for all inner pages |
| `c-section-header` | Centred or left-aligned section title + subtitle + optional decorative rule |
| `c-toast` | Notification toast (success, error, warning, info) — stacked, auto-dismiss |
| `c-modal` | Accessible modal overlay with close button, focus trap, ESC key dismiss |
| `c-dark-toggle` | Animated sun/moon toggle icon button |
| `c-language-switcher` | Dropdown for EN/AR (triggers RTL class on `<html>`) |
| `c-cookie-banner` | GDPR-style consent banner, localStorage state persistence |
| `c-back-to-top` | Floating button appears after 300px scroll |

### 9.2 Booking & Availability Components

| Component | Description |
|-----------|-------------|
| `c-search-bar` | Horizontal date-range picker + guest count stepper + room type select + Search button. Used in hero and availability page. |
| `c-date-picker` | Custom inline calendar component (no external dependency). Check-in/check-out range selection. Blocked dates rendered in grey. |
| `c-room-card` | Room listing card: image (with secondary image on hover), room name, key icons (bed type, area, max guests), nightly rate, availability badge, Book/View CTA |
| `c-room-card--unavailable` | Greyed state variant of room card, "Join Waitlist" CTA |
| `c-availability-calendar` | Full-page calendar grid showing per-room availability by colour (dashboard use) |
| `c-booking-wizard` | Multi-step container component with step indicator, step content slot, prev/next navigation |
| `c-booking-summary-card` | Sticky aside panel showing current booking: selected room, dates, guests, add-ons, subtotal |
| `c-addon-selector` | Checkbox card group for booking add-ons (breakfast, late checkout, airport transfer, etc.) |
| `c-price-breakdown` | Itemised cost table: room rate × nights, add-ons, tax, total |
| `c-booking-status-badge` | Colour-coded pill badge: Confirmed (green), Pending (amber), Cancelled (red), Completed (grey) |
| `c-booking-timeline` | Vertical stepper showing booking lifecycle stages |

### 9.3 Dashboard UI Components

| Component | Description |
|-----------|-------------|
| `c-dashboard-shell` | Page layout wrapper: sidebar + topbar + content area |
| `c-sidebar` | Navigation sidebar with collapse toggle, active state tracking |
| `c-topbar` | Dashboard header: breadcrumb, notifications bell, theme toggle, profile menu |
| `c-stat-card` | KPI card: icon, metric value, label, trend indicator (up/down %) |
| `c-data-table` | Responsive table: sortable columns, pagination, row actions menu, empty state, loading skeleton |
| `c-filter-bar` | Horizontal row of filter controls above data tables (date range, dropdowns, search input, reset) |
| `c-notification-item` | Single notification row: icon, message, timestamp, read/unread dot |
| `c-request-thread` | Conversation-style thread for special request messages between guest and admin |
| `c-chart-panel` | Card wrapper for chart.js/vanilla chart embeds with title, period selector, export button |
| `c-profile-tabs` | Tab-navigation pattern for settings/profile pages |

### 9.4 Content & Marketing Components

| Component | Description |
|-----------|-------------|
| `c-testimonial-slider` | Quote, guest name, stay date, star rating. Auto-advance, touch-swipe. |
| `c-gallery-grid` | Masonry or uniform-grid image gallery with lightbox. Filter by room/area. |
| `c-lightbox` | Full-screen image lightbox: prev/next arrows, keyboard navigation, caption overlay |
| `c-attraction-card` | Local attraction card: image, name, category tag, distance, short description, external link |
| `c-package-card` | Experience package card: name, image, what's included checklist, price, CTA |
| `c-blog-card` | Article preview card: image, category, title, excerpt, author avatar, read time, date |
| `c-offer-banner` | Dismissable promotional banner with countdown timer option |
| `c-faq-accordion` | Accessible accordion with smooth CSS animation, keyboard support |
| `c-team-card` | Host/staff profile: photo, name, role, short bio |
| `c-award-badge` | Property accolade display: icon/logo + description |

### 9.5 Form Components

| Component | Description |
|-----------|-------------|
| `c-input` | Styled text/email/tel input with label, helper text, error state, success state |
| `c-textarea` | Multi-line input with character counter |
| `c-select` | Custom styled dropdown (matches theme, not OS default) |
| `c-checkbox` | Styled checkbox with label |
| `c-radio-group` | Styled radio button group |
| `c-form-validation` | Client-side validation: required, email, min-length, pattern. Inline error messages below fields. |
| `c-step-counter` | +/− stepper for guest count inputs |
| `c-file-upload` | Drag-and-drop file upload zone (for enquiry attachments) |

---

## 10. Feature Breakdown

### 10.1 Core Booking Features

| Feature | Location | Notes |
|---------|----------|-------|
| **Real-Time Availability Display** | Public (`home-2`, `rooms`), Dashboard (`availability`) | Colour-coded calendar. "Only X left" scarcity indicator. UI is static HTML; availability state driven by JS data object (placeholder for backend API swap). |
| **Multi-Step Booking Wizard** | Dashboard (`new-booking`) | 5 steps: Date → Room → Add-ons → Review → Payment. Step validation before advancing. Progress indicator. State maintained in `sessionStorage` across steps. |
| **Booking Management** | Dashboard (`bookings`, `booking-detail`) | Upcoming/Past/Cancelled tabs. Per-booking: view full details, request modification, cancel (with policy reminder). |
| **Direct Booking Incentive System** | Public (all pages) | "Book Direct" badge, price comparison callout, exclusive perks list, best rate guarantee seal |
| **Special Requests System** | Dashboard (`requests`) | Category-tagged request form. Status tracking. Admin response thread. |
| **Invoice Downloads** | Dashboard (`invoices`) | Per-booking PDF invoice download placeholder (browser print-to-PDF via CSS print stylesheet) |
| **Room Waitlist** | Public (`rooms`), Dashboard (`availability`) | "Unavailable" rooms show "Join Waitlist" which submits email + date range |

### 10.2 Property Showcase Features

| Feature | Location | Notes |
|---------|----------|-------|
| **High-Quality Room Photography** | `rooms`, `room-detail`, Gallery | Lazy loading, WebP format, lightbox, hover secondary image. Portrait and landscape orientations supported. |
| **Local Attractions Guide** | Public (`explore`), Dashboard (`explore`) | Categorised (Dining / Nature / Culture / Activities). Distance from property. Map embed. Bookmark in dashboard version. |
| **Experience Packages** | Public (`experiences`) | Bundled offer cards: romantic getaway, culinary weekend, active retreat. Each shows what's included, price from, booking CTA. |
| **Virtual Tour Placeholder** | `room-detail` | Placeholder element for embedding a 360° tour iframe |
| **Breakfast Menu Showcase** | `amenities` | Styled food menu section with dietary tags |
| **Seasonal Content** | `blog`, Home banners | Blog articles and offer banners tagged/filterable by season |

### 10.3 Trust & Conversion Features

| Feature | Location | Notes |
|---------|----------|-------|
| **Guest Reviews System** | Public (`reviews`), Home pages | Static review cards. Schema.org `Review` structured data. Aggregate rating displayed. |
| **Awards & Certifications** | Footer, `about`, `sustainability` | Badge component for travel awards, eco certifications |
| **Cancellation Policy Display** | `faq`, Booking wizard step 4 | Clearly visible before booking confirmation |
| **Real-Time Occupancy Signals** | `rooms`, Home 2 hero | "Only 2 rooms left this weekend" — JS-driven text populated from data object |
| **Trust Bar** | Home 2 | Review score, review count, award logos, "Best Rate Guaranteed" |

### 10.4 Admin & Operations Features

| Feature | Location | Notes |
|---------|----------|-------|
| **Occupancy Dashboard** | `admin/index` | Tonight's occupancy %, arrivals/departures count, revenue KPIs |
| **Availability Blocking** | `admin/calendar`, `admin/rooms` | Manual date blocking for maintenance, private use, seasonal closure |
| **Special Request Management** | `admin/requests` | Reply to requests, update status, filter by date/type |
| **Revenue Reporting** | `admin/reports`, `admin/payments` | Chart-based reporting with printable/exportable views |
| **Guest Notes & VIP Flagging** | `admin/guest-profile` | Internal notes visible only to staff. VIP tier badge. Dietary/preference notes. |
| **Light Content Editor** | `admin/content` | Text area editor for offer banners, announcements, blog titles — no heavy CMS |

---

## 11. Folder Structure

```
hearthside-template/
│
├── assets/
│   ├── css/
│   │   └── custom.css           # Tailwind @layer overrides, custom animations, RTL tweaks
│   │
│   ├── js/
│   │   ├── main.js              # Global: navbar, dark mode, RTL toggle, back-to-top
│   │   ├── booking.js           # Booking wizard step logic, availability calendar
│   │   ├── gallery.js           # Lightbox, masonry layout
│   │   ├── dashboard.js         # Sidebar collapse, topbar, dashboard interactions
│   │   ├── charts.js            # Admin report charts (vanilla canvas or Chart.js)
│   │   ├── validation.js        # Form validation utilities
│   │   ├── date-picker.js       # Custom date range picker component
│   │   ├── slider.js            # Testimonial slider, hero carousel
│   │   └── data/
│   │       ├── rooms.js         # Room data objects (name, images, amenities, rate, availability)
│   │       ├── reviews.js       # Sample guest review data
│   │       ├── bookings.js      # Sample booking data (dashboard demo)
│   │       └── attractions.js   # Local attractions data
│   │
│   ├── images/
│   │   ├── rooms/               # Per-room photography (room-1-hero.webp, room-1-alt.webp, etc.)
│   │   ├── property/            # Exterior, common areas, breakfast, garden
│   │   ├── attractions/         # Local area photography
│   │   ├── team/                # Host/staff portraits
│   │   ├── blog/                # Article featured images
│   │   ├── packages/            # Experience package imagery
│   │   ├── icons/               # SVG icon set
│   │   ├── awards/              # Award/certification logos
│   │   └── og/                  # Open Graph images per page (1200×630)
│   │
│   └── fonts/                   # Self-hosted Google Fonts (GDPR-compliant option)
│       ├── playfair-display/    # Display / headline font
│       └── source-serif-4/      # Body / UI font
│
├── pages/
│   ├── index.html               # Home 1 — Story Homepage
│   ├── home-2.html              # Home 2 — Booking Homepage
│   ├── about.html
│   ├── rooms.html
│   ├── room-detail.html
│   ├── amenities.html
│   ├── explore.html
│   ├── gallery.html
│   ├── experiences.html
│   ├── reviews.html
│   ├── offers.html
│   ├── events.html
│   ├── gift-vouchers.html
│   ├── blog.html
│   ├── blog-post.html
│   ├── contact.html
│   ├── faq.html
│   ├── sustainability.html
│   ├── accessibility.html
│   ├── booking-confirm.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   ├── verify-email.html
│   └── logout.html
│
├── dashboard/                   # Guest portal
│   ├── index.html               # Guest overview
│   ├── availability.html
│   ├── new-booking.html
│   ├── bookings.html
│   ├── booking-detail.html
│   ├── requests.html
│   ├── invoices.html
│   ├── explore.html
│   ├── profile.html
│   ├── notifications.html
│   └── help.html
│
├── admin/                       # Admin portal
│   ├── index.html               # Admin overview
│   ├── bookings.html
│   ├── booking-detail.html
│   ├── rooms.html
│   ├── calendar.html
│   ├── guests.html
│   ├── guest-profile.html
│   ├── requests.html
│   ├── payments.html
│   ├── reports.html
│   ├── content.html
│   ├── staff.html
│   ├── settings.html
│   └── notifications.html
│
├── components/                  # HTML partial snippets (for developer reference)
│   ├── navbar.html
│   ├── footer.html
│   ├── sidebar-guest.html
│   ├── sidebar-admin.html
│   ├── topbar.html
│   └── [other reusable partials]
│
├── documentation/
│   ├── installation.md
│   ├── customisation.md
│   ├── page-structure.md
│   ├── color-system.md
│   ├── rtl-guide.md
│   ├── credits.md
│   └── changelog.md
│
├── sitemap.xml
├── robots.txt
└── README.md                    # This file
```

---

## 12. Responsive Design Strategy

This template follows a **mobile-first** approach as mandated by the Architecture Guide — aligned perfectly with Tailwind's default breakpoint system. All base styles target mobile; responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) layer in complexity upward.

### Breakpoints

```
Tailwind Breakpoint Mapping:
Mobile:   default (no prefix)    — < 640px
Tablet:   sm: prefix             — ≥ 640px
Desktop:  lg: prefix             — ≥ 1024px
Large:    xl: prefix             — ≥ 1280px
```

### Behaviour by Breakpoint

| Element | Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---------|------------------|---------------------|---------------------|
| Navbar | Hamburger → full-screen drawer | Hamburger → side drawer | Full horizontal bar, dropdowns on hover |
| Hero | 100vh, stacked text, no video autoplay | 80vh, image only | Full-bleed video/image, overlay text |
| Booking Search Bar | Stacked vertical form (full width) | 2-column grid | Single horizontal row |
| Room Grid | 1 column | 2 columns | 3 columns |
| Dashboard Sidebar | Hidden; accessible via slide-in drawer (top bar hamburger) | Collapsed icon-only sidebar | Full expanded sidebar (240px) |
| Dashboard Data Tables | Horizontal scroll with sticky first column | Partial columns visible | Full table visible |
| Availability Calendar | Month view, swipe between months | Month view + summary panel | Month + week view toggle |
| Gallery Grid | 1 column, scroll | 2 columns masonry | 3–4 columns masonry |
| Blog Grid | 1 column stacked | 2 columns | 3 columns |
| Footer | Single stacked column | 2 columns | 4 columns |
| Auth Pages | Full-width form only (image hidden) | Full-width form | 2-column (image left, form right) |

### Mobile-Specific Technical Requirements

- Minimum tap target: 44×44px for all interactive elements (per Architecture Guide)
- Touch-swipe enabled on carousels, gallery, and calendar
- Reduced or disabled animations on mobile (via `prefers-reduced-motion` media query)
- Hamburger navigation uses `aria-expanded`, `aria-controls` for accessibility
- Booking wizard steps collapse to a full-width linear flow (no side-by-side panels)
- Simplified data tables: non-critical columns hidden below 640px via `data-priority` attribute pattern
- Image `srcset` and `sizes` attributes used throughout for optimised mobile data usage

---

## 13. Animation & Interaction Ideas

All animations must respect `prefers-reduced-motion: reduce` — wrap in `@media (prefers-reduced-motion: no-preference)` or check in JS before applying.

### 13.1 Public Site Animations

| Element | Animation Idea | Technique |
|---------|---------------|-----------|
| **Hero text** | Staggered fade-up on page load (headline, subheadline, CTA, in sequence with 150ms delays) | CSS `animation` + `animation-delay` |
| **Hero background** | Slow Ken Burns zoom (scale 1.0 → 1.05 over 8 seconds) | CSS `@keyframes` on `background-size` |
| **Section reveals** | Elements fade up 20px as they enter the viewport | `IntersectionObserver` adds `.is-visible` class; CSS handles the transition |
| **Room cards** | Hover: secondary image cross-fades in, room name underline draws left-to-right, CTA button slides up from card bottom | CSS `transition` on `opacity` and `transform` |
| **Stat counters** | KPI numbers count up from 0 to target value when scrolled into view | Vanilla JS counter with `requestAnimationFrame` |
| **Navigation dropdown** | Smooth height expand + fade in | CSS `max-height` transition |
| **Availability badge** | "Only X left" badge pulses subtly with CSS `animation: pulse` | CSS keyframes |
| **Gallery hover** | Slight scale-up + caption overlay fades in | `transform: scale(1.03)` + overlay `opacity` |
| **Blog card hover** | Featured image zooms inside fixed frame (overflow hidden) | `transform: scale` on inner `<img>` |
| **Testimonial slider** | Fade-cross between slides (no jarring horizontal scroll) | Opacity transition managed by JS |

### 13.2 Dashboard Animations

| Element | Animation Idea | Technique |
|---------|---------------|-----------|
| **Sidebar collapse/expand** | Smooth width transition (240px → 64px), labels fade out | CSS `transition: width` + JS class toggle |
| **Dashboard page load** | Stat cards stagger in from below with delay | CSS animation delay (50ms per card) |
| **KPI stat change** | Number rolls/counts to new value | JS `requestAnimationFrame` |
| **Status badge change** | Brief scale pulse when status updates | CSS `animation: bump` keyframe |
| **Booking wizard steps** | Slide-in from right, slide-out to left for each step | CSS `transform: translateX` + `opacity` |
| **Notification bell** | Shake animation when new notification arrives | CSS `@keyframes shake` triggered by JS |
| **Availability calendar** | Date cell hover: gentle background fill | CSS `transition: background-color` |
| **Table row hover** | Subtle left-border colour reveal | CSS `border-left` transition |
| **Modal open/close** | Backdrop fade + modal scale from 95%→100% | CSS transitions on backdrop `opacity` and modal `transform` |
| **Toast notifications** | Slide in from top-right, auto-dismiss with progress bar | CSS animation + JS timeout |
| **Loading skeletons** | Shimmer/wave animation on grey placeholder blocks | CSS `background: linear-gradient` animated via keyframes |
| **Chart rendering** | Bars/lines draw in on first render | Chart.js animation config or canvas JS |

### 13.3 Micro-Interaction Details

- **All buttons:** Subtle `transform: translateY(-1px)` on hover + `box-shadow` lift
- **All links:** Underline draws from left to right on hover (CSS `background-size` trick)
- **Form inputs:** Bottom border slides in from left on focus
- **Dark mode toggle:** Sun ↔ Moon icon rotates 180° during switch
- **Hamburger:** Lines morph into × on open (CSS-only 3-line → X transform)
- **Booking CTA button:** Arrow icon shifts 4px right on hover

---

## 14. SEO & Performance Strategy

### 14.1 On-Page SEO (Per Architecture Guide §5)

| Requirement | Implementation |
|-------------|----------------|
| **Unique Title Tags** | Pattern: `[Page Topic] — [Property Name] [Location]` · Max 60 chars · Defined in each `<head>` |
| **Meta Descriptions** | Unique per page · 150–160 chars · Includes primary keyword + CTA |
| **H1 per page** | Single, keyword-rich H1. Subsequent headings follow strict H2→H3 hierarchy |
| **Image Alt Text** | All `<img>` tags: descriptive alt text including room name, property name where relevant |
| **WebP Images** | All images provided in WebP with JPEG fallback via `<picture>` element |
| **Canonical Tags** | `<link rel="canonical">` on every page to prevent duplicate content |
| **Open Graph Tags** | Full OG set (title, description, image 1200×630, type, URL) on every page |
| **Twitter Card Tags** | `summary_large_image` card type on every page |
| **Structured Data (JSON-LD)** | `LodgingBusiness` schema on homepage, `Room` schema on room-detail pages, `Review`/`AggregateRating` on reviews page, `BreadcrumbList` on all inner pages, `FAQPage` on FAQ |
| **XML Sitemap** | `sitemap.xml` — all public pages listed, last-modified dates included, excludes dashboard/auth pages |
| **robots.txt** | Disallow `/dashboard/`, `/admin/`, `/auth/`. Allow all public pages. |
| **Semantic HTML** | `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` used correctly throughout |

### 14.2 Local SEO

- `LocalBusiness` JSON-LD schema with address, phone, opening hours, geo coordinates
- Google Maps embed on Contact page with consistent NAP (Name, Address, Phone)
- Local keyword targeting in page copy (property location in titles, h-tags)
- `hreflang` tags for EN/AR language variants

### 14.3 Performance Targets (Per Architecture Guide §5)

| Metric | Target |
|--------|--------|
| PageSpeed Score (mobile) | 90+ |
| PageSpeed Score (desktop) | 95+ |
| LCP (Largest Contentful Paint) | < 2.5 seconds |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### 14.4 Performance Implementation

| Technique | Details |
|-----------|---------|
| **Tailwind CDN delivery** | Tailwind's CDN build is pre-optimised. For production, swap CDN for a CLI-generated purged build to eliminate unused classes and minimise payload |
| **Critical CSS inlining** | Tailwind's CDN script auto-generates only the styles used on page — reduces render-blocking concern significantly |
| **Font loading** | `font-display: swap` · Self-host option for GDPR compliance · Preload 2 key font files |
| **Image lazy loading** | `loading="lazy"` on all below-fold images · `loading="eager"` on hero |
| **Hero preloading** | `<link rel="preload" as="image">` for hero image on each homepage |
| **JS deferred** | All non-critical scripts use `defer` attribute |
| **JS minification** | Production builds: minify `custom.css` and all JS files; comments stripped |
| **No render-blocking resources** | Tailwind CDN `<script>` tag placed in `<head>` with no additional stylesheet blocking; custom.css is minimal |
| **HTTP/2 server push ready** | File naming and structure supports CDN/HTTP2 delivery |
| **Reduced motion** | Animations disabled via `@media (prefers-reduced-motion: reduce)` |

---

## 15. Development Notes

### 15.1 Technology Constraints

- **No JavaScript frameworks** (no React, Vue, Angular). All interactivity in vanilla ES6+ JS.
- **CSS: Tailwind CSS via CDN.** Include the Tailwind CDN play script in every page `<head>`. Use a `tailwind.config` block in a `<script>` tag to define the custom brand theme (colors, fonts, spacing). Only `custom.css` is needed for things Tailwind can't handle (keyframe animations, custom scrollbar, print styles).
- **Tailwind dark mode:** Set `darkMode: 'class'` in the inline Tailwind config. Toggle by adding/removing the `dark` class on `<html>`. This replaces the need for a separate `dark-mode.css` file.
- **External plugins**: Minimise. Permitted external dependencies if needed:
  - Chart.js (only for admin dashboard charts — lightweight, well-maintained)
  - No jQuery
  - No UI component libraries
- All icons via inline SVG sprite or a minimal SVG icon library (e.g. Lucide icons — SVG only, no JS bundle)

### 15.2 Tailwind Configuration & Custom Styles

**CDN Setup (every page `<head>`):**
```html
<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Hearthside Brand Theme Config -->
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary:       { DEFAULT: '#2C4A3E', light: '#3D6358' },
          accent:        { DEFAULT: '#B8956A', light: '#D4AF8A' },
          surface:       '#FAF8F4',
          'surface-dark':'#1A1E1C',
        },
        fontFamily: {
          display: ['"Playfair Display"', 'Georgia', 'serif'],
          body:    ['"Source Serif 4"', 'Georgia', 'serif'],
        },
        borderRadius: {
          sm: '4px', md: '8px', lg: '16px',
        },
        boxShadow: {
          card: '0 4px 16px rgba(0,0,0,0.10)',
          lift: '0 12px 40px rgba(0,0,0,0.12)',
        },
      }
    }
  }
</script>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<!-- Custom CSS (animations & things Tailwind can't handle) -->
<link rel="stylesheet" href="/assets/css/custom.css">
```

**`custom.css` — only for what Tailwind can't do:**
```css
/* Keyframe animations */
@keyframes fade-up   { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes ken-burns { from { transform: scale(1.0); } to { transform: scale(1.05); } }
@keyframes shimmer   { from { background-position: -200% 0; } to { background-position: 200% 0; } }
@keyframes shake     { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }

/* Skeleton loader shimmer */
.skeleton { background: linear-gradient(90deg, #e5ddd0 25%, #f0ebe3 50%, #e5ddd0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; }

/* RTL directional overrides (Tailwind rtl: modifier handles most cases) */
[dir="rtl"] .sidebar { right: 0; left: auto; }

/* Print styles for invoices */
@media print { .no-print { display: none !important; } }

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-thumb { background: #B8956A; border-radius: 9999px; }
```

**Dark mode toggle pattern (JS):**
```javascript
const DarkMode = (() => {
  const STORAGE_KEY = 'hearthside-theme';
  const toggle = document.querySelector('[data-dark-toggle]');

  const apply = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(saved || preferred);
    toggle?.addEventListener('click', () => {
      apply(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
    });
  };

  return { init };
})();
```

### 15.3 JavaScript Patterns

```javascript
// main.js — module pattern example
const DarkMode = (() => {
  const STORAGE_KEY = 'hearthside-theme';
  const toggle = document.querySelector('[data-dark-toggle]');

  const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(saved || preferred);
    toggle?.addEventListener('click', () => {
      apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  };

  return { init };
})();
```

- Each feature is an IIFE module (`DarkMode`, `Navbar`, `BookingWizard`, `DatePicker`, etc.)
- All modules initialised in a single `DOMContentLoaded` handler in `main.js`
- No `console.log` statements in production code (use `// TODO:` comments for debug points)
- Data objects in `assets/js/data/` are the single source of truth for room/booking demo content
- State for multi-step booking stored in `sessionStorage` only (cleared on tab close)

### 15.4 RTL Implementation

```html
<!-- Language toggle updates html attributes -->
<html lang="en" dir="ltr">   <!-- Default -->
<html lang="ar" dir="rtl">   <!-- Arabic mode -->
```

Tailwind's built-in `rtl:` modifier handles the majority of directional overrides automatically when `dir="rtl"` is set on `<html>`. Use it consistently in markup:

```html
<!-- Example: margin that flips direction -->
<div class="ml-4 rtl:ml-0 rtl:mr-4"> ... </div>

<!-- Example: sidebar positioned correctly in both directions -->
<aside class="left-0 rtl:left-auto rtl:right-0"> ... </aside>
```

Remaining edge cases (custom scrollbar direction, complex positioned elements) are handled in `custom.css` under the `[dir="rtl"]` selector. Prefer Tailwind's `rtl:` modifier over `custom.css` overrides wherever possible — keep `custom.css` minimal.

### 15.5 Accessibility Checklist for Developers

- [ ] All interactive elements reachable and operable by keyboard (Tab, Enter, Space, Arrow keys)
- [ ] Focus visible at all times (custom `:focus-visible` ring, never `outline: none`)
- [ ] All images have meaningful `alt` text; decorative images use `alt=""`
- [ ] Colour contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text (verify with browser DevTools)
- [ ] All form inputs have associated `<label>` elements
- [ ] Modals: focus trapped inside when open, returns to trigger element on close
- [ ] Dropdown menus: Arrow keys navigate options, ESC closes
- [ ] Booking calendar: Full keyboard navigation, dates announced to screen readers
- [ ] Skip-to-content link as first focusable element on every page
- [ ] `aria-live` regions for dynamic content (availability updates, toast notifications, booking status changes)
- [ ] Dashboard sidebar: `aria-current="page"` on active nav item
- [ ] WCAG 2.1 Level AA target throughout

### 15.6 Integration Placeholders

All third-party integration points are marked with `<!-- INTEGRATION: [ServiceName] -->` HTML comments. No live API keys should ever be committed.

| Integration | Location | Notes |
|-------------|----------|-------|
| **Payment (Stripe)** | Booking wizard Step 5, Gift Vouchers | `<div id="stripe-payment-element">` placeholder. Stripe.js loaded via script tag. |
| **Maps (Google Maps)** | Contact, Booking confirmation, Local Explore | `<div class="c-map-embed" data-lat="" data-lng="">` with API key placeholder in `main.js` config object |
| **Newsletter (Mailchimp)** | Footer, Coming Soon, Home 1 S11 | Form `action` URL placeholder in HTML comment |
| **Contact Forms (Formspree)** | Contact page, Event enquiry | `<form action="https://formspree.io/f/YOUR_ID">` |
| **Review Widgets** | Reviews page | Placeholder `<div>` with comment for TripAdvisor/Google widget embed |
| **Live Chat** | Dashboard Help, Public footer | `<div id="chat-widget-placeholder">` with JS init comment |
| **Booking Engine API** | All availability components | Data objects in `assets/js/data/rooms.js` are designed for drop-in API replacement — see comments in that file |

### 15.7 Content Customisation Guide Reference

Developers should direct property owners to `documentation/customisation.md` for:
1. Replacing placeholder photography (all images are in `/assets/images/`, filenames documented)
2. Updating the color scheme (edit the `tailwind.config` colors block in the `<script>` tag in each page `<head>`, or centralise it in a shared `theme.js` include)
3. Replacing Google Fonts (update the `<link>` tag in `<head>` + the `fontFamily` values in `tailwind.config`)
4. Updating room data (edit `assets/js/data/rooms.js` — well-commented JSON-like objects)
5. Connecting real booking engine (swap the data fetch in `booking.js` — marked with `TODO: API`)
6. Configuring form endpoints (marked with `<!-- INTEGRATION: -->` comments in HTML)

---

*Blueprint Version: 1.0 · Template: Hearthside B&B & Boutique Hotel · Category: Booking/Reservation*
*Architecture compliance verified against HTML Template Development Guide v1.0*
