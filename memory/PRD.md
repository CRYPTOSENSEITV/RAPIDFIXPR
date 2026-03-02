# RapidFix Landing Page — PRD

## Problem Statement
Build a production-ready landing page for RapidFix, a professional plumbing company serving Puerto Rico. Single-page React app, mobile-first, bilingual (Spanish-first), with specific brand identity system.

## Architecture
- **Frontend**: React SPA (port 3000) — single landing page
- **Backend**: FastAPI (port 8001) — default endpoints only, no custom API needed
- **Database**: MongoDB — not used for this landing page
- **Fonts**: Google Fonts (Bebas Neue, DM Sans, Instrument Serif)
- **Icons**: lucide-react

## User Personas
- Puerto Rican homeowners with plumbing emergencies (primary)
- PR business owners needing commercial plumbing
- Mobile-first users (high mobile penetration in PR)

## What's Been Implemented (March 2, 2026)
- Complete landing page with 9 sections: Nav, Hero, Trust Bar, Services, Difference, Reviews, About, Emergency CTA, Footer
- Brand color system (Ocean/Storm 60%, Cement/White 25%, Flame 10%, Sun 5%)
- Bebas Neue + DM Sans + Instrument Serif typography system
- CSS water ripple animation, pipe SVG motifs, noise texture overlay
- Scroll-triggered reveal animations (IntersectionObserver)
- Mobile hamburger menu with fullscreen overlay
- Sticky mobile CTA bar (phone + WhatsApp)
- Smooth scroll navigation
- Staggered hero entrance animations
- Phone: 787-608-4375, WhatsApp: placeholder

## Backlog
- **P0**: None
- **P1**: Replace image placeholder with real photography, add actual WhatsApp business link
- **P2**: Contact form, service area map, bilingual toggle (ES/EN switch), Google Maps embed
- **P3**: Blog section, SEO meta tags optimization, analytics integration, cookie consent
