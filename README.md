# A2B Rides • Rider App (HopRide MVP)

Premium ride-hailing rider app for NW Ohio. Instant and scheduled rides with black/gold branding.

## Tech Stack (Recommended)
- **Frontend**: Next.js 15+ (App Router) + TypeScript + Tailwind CSS
- **Mobile**: Capacitor (wrap this web app for iOS/Android)
- **Backend**: Supabase (Auth, Postgres, Realtime)
- **Payments**: Stripe
- **Maps**: Google Maps or Mapbox (placeholder in MVP)
- **Hosting**: Vercel

## Quick Start

```bash
cd a2b-rider
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features in this MVP
- Instant ride request
- Scheduled ride (date/time picker)
- Mock price estimate
- Ride history
- Profile
- Black / gold / holographic-ready theme
- Mobile-first layout

## Next Steps for Production
1. **Supabase**: Create project → Auth (email/phone) → Schema for `rides`, `users`, `drivers`
2. **Stripe**: Checkout for riders + Connect for driver payouts
3. **Maps**: Add Google Maps Places Autocomplete + Directions
4. **Realtime**: Supabase Realtime for driver matching & live tracking
5. **Capacitor**: `npx cap init` then build for stores
6. **Deploy**: Push to GitHub → Connect to Vercel

## Branding
- Primary: Black
- Accent: Gold (#d4af37)
- Local focus: Toledo, Perrysburg, Findlay, Fremont, etc.
- Tesla fleet emphasis

Built for fast MVP → beta launch in NW Ohio.
