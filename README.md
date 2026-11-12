# Lawanson portfolio

React + Vite + Tailwind (v4) with a small vanilla CSS file per section.

```
npm install
npm run dev
```

## Editing content
Everything editable lives in `src/data/portfolio.js`:
- `WORK`: one object per project (image, title, client, type, text)
- `SERVICES`: the three "What I do" blocks (design is the large one, `main: true`)
- `AWARD`: the text on the award sticker in the hero
- `FACTS`: the scrolling highlights under the hero
- `TOOLS`, `TESTIMONIALS`: tool chips and client quotes (placeholders until she sends real ones)
- `LINKS`, `TABS`: CV, LinkedIn and WhatsApp links, navbar links

Images go in `src/assets/images` and are imported at the top of that file.
When her research project arrives, replace the "Your research project" placeholder in `WorkSection/Work.jsx`.

## Styling
Layout and spacing use Tailwind classes in the JSX. The distinctive parts (self-drawing geometry, award sticker,
marquee, flyer cards, dock) are plain CSS in each section folder; shared pieces (`.btn`, `.ph`, `.section`)
live in `src/index.css`. Colours and fonts are Tailwind theme tokens there (`text-magenta`, `font-display`...).
