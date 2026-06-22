# SKY-POS Proposal Dashboard

An applied B2B product mockup showing how a planning-team HTML dashboard wireframe can be converted into a proposal-grade operating screen without visible AI/slop cues.

## What This Includes

- Vite React app
- Tailwind theme tokens
- shadcn/ui-compatible primitive components
- lucide icons
- Recharts operating charts
- Concrete `docs/DESIGN.md` conversion rules
- Applied source screen: `SKY-POS 외부망 포털 · dashboard`
- Screen strategy: premium dashboard proposal, operating cockpit, revenue/rent exposure, exception queues, polished decision hierarchy

## Run

```bash
npm install
npm run dev
```

## Intended Workflow

1. Planning team provides HTML wireframe.
2. Claude Code reads the wireframe and `docs/DESIGN.md`.
3. Claude Code maps raw HTML structure to a clear operating moment, risk exposure, and next-action queues.
4. Design team reviews the rendered screen as a proposal-grade product mockup, not raw HTML.
