# Neighborhood Hacks

> "Build locally, share globally"

A global hackathon website for high schoolers solving real problems in their own communities.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** GitHub Pages (static export)

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

## Deploying to GitHub Pages

This site is built as a static export (`output: "export"` in `next.config.ts`) and
published to GitHub Pages via GitHub Actions.

### How it works

- On every push to `master`, `.github/workflows/deploy.yml` builds the site and
  uploads the `out/` folder to GitHub Pages.
- `next.config.ts` sets `basePath` and `assetPrefix` to `/neighborhood-hacks`
  automatically when the `GITHUB_PAGES=true` env var is present (it is set in the
  workflow). This makes all asset and route links resolve correctly under the
  project subpath `https://<user>.github.io/neighborhood-hacks/`.

### Steps

1. Push this project to a GitHub repository named **`neighborhood-hacks`**
   (the `basePath` must match the repo name — update `repoName` in
   `next.config.ts` if yours differs).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   select **"GitHub Actions"**.
3. Push to `master` (or run the workflow manually under **Actions → Deploy to
   GitHub Pages**).
4. Your site will be live at
   `https://<user>.github.io/neighborhood-hacks/`.

### Custom Domain (Optional)

1. In the repo, go to **Settings → Pages → Custom domain** and enter your domain.
2. Update your DNS records as instructed by GitHub (SSL is automatic).
3. If serving from the domain root (not a subpath), set `basePath`/`assetPrefix`
   to empty in `next.config.ts`.

### Local static preview

```bash
npm run build
# serve the exported site, e.g.:
npx serve out
```

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
