# Atlas Landing Page - Current State

## Project Structure

The project is a Next.js application with the following key components:

### Main Components

1. Hero Section

   - Custom hero image (atlas-hero-image.png)
   - Updated tagline and description
   - Stats showing private beta metrics:
     - "1.2M+ Transactions Processed in Private Beta"
     - "850K+ Blocks Analyzed in Private Beta"
     - "2 Enterprise Clients in Private Beta"

2. Services Section

   - Block Explorer
   - Transaction Tracking
   - Smart Contract Analysis
   - Network Analytics

3. Features Section

   - Secondary showcase image (image-2-landing.png)
   - Custom container with glow effects

4. CTA Section
   - Email signup form
   - Demo request button

### Key Files

- `src/app/page.tsx`: Main landing page component
- `src/components/ui/ScreenshotShowcase.tsx`: Image showcase component
- `src/components/ui/Button.tsx`: Reusable button component
- `src/components/ui/Section.tsx`: Section layout component
- `src/app/globals.css`: Global styles
- `tailwind.config.ts`: Tailwind configuration

### Design Elements

1. Colors:

   - Primary: Atlas Teal (#49E59A)
   - Background: Atlas Black (#0F1115)
   - Gradients and glows using atlas-teal with varying opacities

2. Typography:

   - Headings: Space Grotesk
   - Body: Plus Jakarta Sans

3. Effects:
   - Gradient backgrounds
   - Glow effects
   - Backdrop blur
   - Motion animations

### Images

Located in `/public`:

- atlas-hero-image.png (Hero section)
- image-2-landing.png (Features section)

## Current Features

1. Responsive design
2. Dark theme
3. Motion animations
4. Interactive hover states
5. Modern UI components
6. Optimized images

## Development

- Running on port 3004
- Using Next.js 14
- TypeScript + Tailwind CSS
- Framer Motion for animations
