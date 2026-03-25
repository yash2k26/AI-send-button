# Send Button UI

A high-polish send-button interaction built with Next.js and Tailwind CSS.

This project focuses on visual detail:
- Liquid-metal shader center
- Gloss/chromatic ring accents
- Smooth hover motion on the arrow icon
- Dark, minimal interface

## Demo

https://raw.githubusercontent.com/yash2k26/AI-send-button/main/public/github_video.mp4

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- `@paper-design/shaders-react`

## Getting Started

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```txt
app/
  page.tsx
  globals.css
  component/
    searchbar.tsx
```

## Customization

Quick places to tweak:
- Main component: `app/component/searchbar.tsx`
- Global styles: `app/globals.css`
- Page mount point: `app/page.tsx`

## Roadmap

- Add click/press animation state
- Add theme variants
- Export as reusable component package

## Acknowledgements

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
