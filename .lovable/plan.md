

# 🛍️ ModeDz - The Algerian Shein
## Full MVP Implementation Plan

---

### 🎨 Design System: Bold Glassmorphism
- **Primary palette**: Hot pink, electric purple, vibrant orange gradients
- **Glassmorphism effects**: Frosted glass cards, blurred backgrounds, subtle borders
- **Typography**: Modern, bold headings with playful personality
- **Animations**: Smooth micro-interactions, hover effects, countdown timers
- **Dark mode support**: Deep purple/black with glowing accents

---

## Phase 1: Foundation & Authentication

### User Authentication System
- **Registration/Login page** with email/password and phone verification
- **OTP verification** via SMS (Twilio integration) - the anti-fake order system you described
- **User profiles** with saved addresses, order history, and points balance
- **Wilaya/Commune dropdown** selection (all 58 wilayas with their communes)

### Database Architecture (Supabase)
- Users & profiles with points balance, membership tier, blacklist status
- Products catalog with variants (size, color), stock levels, images
- Orders & order items with status tracking
- Reviews with photo uploads
- Flash sales & promotions
- Points transactions & daily check-ins

---

## Phase 2: The Shopping Experience

### Homepage - The "Addiction Engine"
- **Dynamic hero banners** with promotional content
- **Flash Sale section** with live countdown timers (HH:MM:SS)
- **Category quick-links** with glassmorphic cards
- **"Tendances du Moment"** - trending products carousel
- **Recently viewed** products (for returning users)
- **Personalized recommendations** section

### Product Browsing
- **Infinite scroll** product grids
- **Smart filters**: Wilaya availability, Size, Color, Price range, Material
- **Quick view** modal on hover
- **Wishlist** functionality with heart icons

### Product Detail Page (The Conversion Maker)
- **Image gallery** with zoom capability
- **Size guide** with "Taille Standard DZ" conversions
- **Customer reviews with photos** - the trust builder
- **"Complete the Look"** suggestions
- **Stock/availability** indicator
- **Add to cart** with size/color/quantity selection

---

## Phase 3: Gamification System

### Points & Rewards Engine
- **Daily check-in**: Earn 10 DA credit for opening the app
- **Points for actions**: Write reviews (+50), Upload photos (+30), Verify email (+100)
- **Points redemption**: 100 points = 100 DA discount at checkout

### Membership Tiers
- **Bronze**: Default tier - standard shipping rates
- **Silver**: 5% permanent discount after 5000 DA spent
- **Gold**: Free shipping to all 58 wilayas + 10% discount

### Progress Dashboard
- **User profile** showing current tier, points balance, next milestone
- **Activity history**: Points earned, redeemed, daily streaks
- **Tier benefits** explanation with progress bar

---

## Phase 4: Checkout & Payments

### Cart Experience
- **Sliding cart drawer** from the right
- **Quantity adjustments** with stock validation
- **Promo code** input with instant validation
- **Points redemption** option
- **Order summary** with shipping calculation

### Checkout Flow
- **Address selection** with saved addresses
- **Wilaya → Commune** smart dropdowns (no manual typing)
- **Shipping options** based on location:
  - Algiers: 400 DA (Free over 5000 DA)
  - Other Wilayas: 600-900 DA (Free over 6000 DA)

### Payment Methods
- **Cash on Delivery (COD)** - default option
- **CIB/Edahabia** - 5% discount incentive badge
- **BaridiMob/CCP Transfer** - receipt upload for high-value orders
- **Order confirmation** with tracking number

---

## Phase 5: Reviews & Social Proof

### Review System
- **Star ratings** (1-5) with written reviews
- **Photo upload** capability - critical for Algerian market trust
- **Size accuracy** feedback ("Runs small/true to size/runs large")
- **Points reward** for reviews with photos
- **Helpful votes** on reviews
- **Review gallery** showing customer photos

---

## Phase 6: Admin Dashboard

### Product Management
- Add/edit/delete products with variants
- Bulk upload capability
- Stock management per variant
- Category organization

### Order Management
- Order status updates (Processing → Shipped → Delivered)
- Integration with Yalidine/Nordnet for shipping labels
- Customer communication tools
- Refund/return processing

### Flash Sales Manager
- Create time-limited promotions
- Set discount percentages
- Schedule future sales
- Monitor performance

### Analytics Dashboard
- Sales overview (daily/weekly/monthly)
- Top products & categories
- Customer insights (new vs returning)
- Revenue by wilaya
- Order completion rate vs refusals

### User Management
- View customer profiles
- Manage blacklist (auto-ban after 2 refused deliveries)
- Membership tier adjustments
- Points balance management

---

## Technical Integrations

### SMS Verification
- Twilio or local SMS gateway for OTP
- Order status notifications

### Shipping API
- Yalidine/Nordnet integration for label generation
- Real-time tracking updates

### Image Storage
- Supabase Storage for product images and review photos
- Image optimization for fast mobile loading

---

## Mobile-First Responsive Design

Since this will be a PWA (Progressive Web App):
- **Mobile-optimized** UI as primary focus (85% of traffic is mobile)
- **Bottom navigation** for easy thumb reach
- **Pull-to-refresh** for updates
- **Installable** on home screen
- **Offline-capable** for browsing products

---

## Summary

This plan delivers the complete ModeDz experience:
- ✅ Shein-like addictive shopping interface with glassmorphism
- ✅ Flash sales with urgency timers
- ✅ Full gamification (points, tiers, daily check-ins)
- ✅ Algerian-localized payments and logistics
- ✅ Trust-building review system with photos
- ✅ Complete admin dashboard for operations

