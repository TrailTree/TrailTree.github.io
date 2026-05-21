# Portfolio

A clean, minimal single-page portfolio. Plain HTML + Tailwind (via CDN) — **no build step, no dependencies**. Just edit and deploy.

## Files
- `index.html` — the page (hero, projects grid, footer). Edit your name/tagline here.
- `projects.js` — **your device list.** This is the only file you edit to add or change projects.
- `images/` — drop your device photos here.
- `favicon.svg` — the browser-tab icon (edit the `JA` initials).

## Add or edit a device (3 steps)
1. Open `projects.js`.
2. Copy one whole `{ ... }` block and paste it into the list.
3. Edit the fields, save, and refresh the page.

To add a **photo**: drop the image file into `images/`, then set
`image: "images/your-file.jpg"`. No photo yet? Leave `image: ""` and a neutral
placeholder shows.

Each device supports:
| Field | Required | Notes |
|------|----------|-------|
| `title` | ✅ | Device name |
| `description` | ✅ | One or two sentences |
| `specs` | ✅ | Array of strings (components/techniques) → tag pills |
| `image` | optional | `"images/file.jpg"`; placeholder shows if blank/omitted |
| `links` | optional | Array of `{ label, url }` — name each button yourself (Build log, Video, Schematic…). Hides if empty |
| `featured` | optional | `true` shows it first, in a wider card |

## Personalize the rest
In `index.html`, search for `EDIT ME` to update:
- Your name, job title, and tagline (hero section)
- Your GitHub URL (buttons + footer)
- The page `<title>`, meta description, and Open Graph URL
- Accent color — change `accent.DEFAULT` in the `tailwind.config` block

Replace every `TrailTree` with your GitHub username.

## Preview locally
Open `index.html` in a browser, or run a tiny server from this folder:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages (your personal site)
This is set up to be served at `https://TrailTree.github.io`.

1. Create a repo on GitHub named **exactly** `TrailTree.github.io`.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/TrailTree/TrailTree.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages**, confirm **Source = Deploy from a branch**, branch `main` / `/ (root)`.
4. Wait ~1–2 minutes, then visit `https://TrailTree.github.io`.

> No GitHub CLI needed. (If you'd rather use it: `brew install gh`, then `gh repo create`.)
