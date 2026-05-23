# Brightwell Orthodontics — Landing Page

A single-page marketing site for a (fictional) orthodontic practice. Static
HTML + Tailwind CSS, with self-contained inline-SVG artwork — no external image
dependencies. Design system (clinical blue + green, Figtree/Noto Sans,
WCAG-minded) comes from the `ui-ux-pro-max` skill's healthcare recommendation.

> Brightwell Orthodontics, "Dr. Elena Marsh", reviews, and stats are all
> fictional placeholder content for demonstration. Swap in real details before
> any public use.

## Preview

Just open it — the compiled CSS (`css/tailwind.css`) is committed, so no build
is required to view the site:

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly also works; a local server is recommended so
relative paths and fonts load cleanly.)

## Project structure

```
orthodontic-website/
  index.html          # all sections, semantic HTML
  css/
    input.css         # Tailwind directives + custom tokens/components
    tailwind.css      # COMPILED output (committed; this is what the page loads)
  js/main.js          # mobile nav, accordion, scroll-reveal, form validation
  assets/favicon.svg  # logo / favicon mark
  tailwind.config.js  # theme tokens (brand palette, fonts, shadows)
  package.json
```

## Editing styles

The page loads the prebuilt `css/tailwind.css`. If you change Tailwind classes
in `index.html` or tokens in `tailwind.config.js`/`css/input.css`, rebuild:

```bash
npm install            # first time only
npm run build          # one-off compile
npm run watch          # rebuild on change while developing
```

## Things that are intentionally stubbed

- **Booking form** is front-end only (client-side validation + success
  message). To actually receive submissions, point the `<form>` at a service
  such as [Formspree](https://formspree.io) or
  [Netlify Forms](https://docs.netlify.com/forms/setup/):
  ```html
  <form id="booking-form" action="https://formspree.io/f/your-id" method="POST">
  ```
  and remove the `e.preventDefault()` short-circuit in `js/main.js`.
- **Imagery** uses inline SVG illustrations so the page is fully offline-capable.
  Swap in real photography (hero, Dr. Marsh portrait, before/after) when ready.
- **Map** under "Visit us" is a text address; drop in an embedded map iframe if
  desired.

## Accessibility notes

Skip link, semantic landmarks, visible focus rings, 44px+ touch targets,
`prefers-reduced-motion` support, SVG icons (no emoji), and AA-contrast colours
— per the skill's pre-delivery checklist.
