# Neighborhood Hacks

> "Build locally, share globally"

A global hackathon website for high schoolers solving real problems in their own communities.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel

## Design Direction

Hand-drawn brutalism + editorial collage + photocopied zine aesthetic. The site should feel like a handmade zie or artist's sketchbook — not a polished tech startup landing page.

**Key traits:** Graph-paper grid background, hand-cut collage shapes, rough/imperfect edges, handwritten annotations, tiny editorial navigation, large empty space, asymmetry, photocopy texture.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm (comes with Node)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind config
│   ├── about/page.tsx          # About / Mission
│   ├── challenge/page.tsx      # The Challenge + Tracks
│   ├── timeline/page.tsx       # How It Works
│   ├── judging/page.tsx        # Judging Rounds + Rubric
│   ├── prizes/page.tsx         # Prize Tiers
│   ├── sponsors/page.tsx       # Sponsor Logos
│   ├── faq/page.tsx            # FAQ Accordion
│   ├── register/page.tsx       # Registration CTA
│   └── code-of-conduct/page.tsx
├── components/
│   ├── Navbar.tsx              # Editorial corner nav
│   └── Footer.tsx              # Zine-style footer
```

## Before Launch Checklist

These placeholders in the code need real values before going live:

- `[Date]` — All timeline milestones
- `[$X]` — Prize amounts
- `[Prize]` — Individual prize descriptions
- `[Category Award Name]` — Category award titles
- `[swag/certificate/etc.]` — Participant rewards
- `[Logo]` — Sponsor logos
- Discord URL — Replace `#` with your actual Discord invite
- Devpost URL — Replace `#` with your Devpost event page
- Social links — Instagram, etc.
- Code of Conduct — Fill in the placeholder content
- AI policy — Update the FAQ answer about AI tool usage

## Deploying to Vercel

### Option 1: Deploy from Git (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — keep the default settings
6. Click **Deploy**
7. Your site will be live at `your-project.vercel.app`

### Option 2: Deploy with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run from the project root:
   ```bash
   vercel
   ```
3. Follow the prompts — it will link to your Vercel account and deploy
4. For production deployments:
   ```bash
   vercel --prod
   ```

### Custom Domain (Optional)

1. In your Vercel dashboard, go to **Settings > Domains**
2. Add your custom domain
3. Update your DNS records as instructed by Vercel
4. SSL is automatic

## Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Near Black | `#080808` | Background |
| Off White | `#F2F1EC` | Primary text, paper shapes |
| Paper | `#E6E4DD` | Secondary paper |
| Dark Gray | `#252525` | Grid lines |
| Gray | `#8A8A8A` | Secondary text |
| Dim Gray | `#777777` | Muted text |
| Acid Green | `#D7FF00` | Accent (hover, labels, CTAs) |

## Fonts

| Font | Role | Usage |
|------|------|-------|
| Space Grotesk | Display / headings | Hero titles, section headings, buttons |
| IBM Plex Mono | Body / UI | Navigation, metadata, body text, labels |
| Caveat | Handwritten accent | Annotations, notes — used sparingly |

## License

Made by students, for students.
