# High-Quality B2B Screen Design Rules

This document defines how to turn planning-team wireframes into proposal-grade B2B product screens. The priority is not showing every function. The priority is making the product value visible, credible, and well-designed at first glance.

## Core Principle

Every screen must have one clear argument.

Good:
- "A reviewer can identify the highest-risk deal and act before committee review."
- "An operator can see which customer issue blocks renewal today."
- "A finance lead can understand cash exposure and next action in one view."

Weak:
- "This screen shows KPIs, alerts, tasks, charts, and shortcuts."
- "This is a dashboard for managing data."
- "This screen lets users ask questions."

If the screen does not have a clear argument, redesign the layout before polishing components.

## No AI Slop

Avoid anything that makes the screen feel machine-generated or prompt-generated:

- Do not expose labels such as AI Agent, AI confidence, natural language, generated, magic, smart, copilot, recommendation, or prompt unless the client explicitly wants visible AI branding.
- Do not distribute everything into equal cards.
- Do not use many icons to compensate for weak hierarchy.
- Do not use generic SaaS sections such as overview, insights, quick actions, and dashboard when domain-specific language is available.
- Do not explain the feature in the UI. Show the work moment instead.
- Do not let every area compete for attention.

Instead, use domain language:

- Judgment, evidence, blocker, exposure, approval, recovery, renewal, exception, source, document, owner, next action.

## Proposal-Grade Quality Bar

- The first viewport should be usable as a sales deck screenshot.
- One area must clearly dominate the composition. It should show the business moment, not a generic chart.
- Important information is emphasized through area, placement, typography, and sequencing before color.
- Supporting metrics should frame the main judgment, not become the main visual.
- Tables are secondary unless the product value is the table itself.
- The screen should feel like a designed product concept, not a themed admin template.
- UI primitives must be hidden behind domain-specific patterns.

## Composition Strategy

Use this hierarchy for most B2B proposal screens:

1. **Hero decision area**
   - A concrete object: customer, deal, claim, workflow, case, renewal, exception.
   - A judgment sentence: what matters and why now.
   - Three or fewer evidence points.
   - One primary action.

2. **Evidence or context panel**
   - Source documents, data freshness, blockers, ownership, readiness, or history.
   - Use compact rows, not large decorative cards.

3. **Operational detail**
   - Tables, queues, pipelines, team load, activity.
   - Keep this below or to the side so it supports the hero.

4. **Secondary actions**
   - Shortcuts and utilities must never compete with the main decision area.

## Visual Direction

- Use warm neutral backgrounds with white or paper-like surfaces.
- Use near-black text, restrained borders, and small shadows only where depth clarifies hierarchy.
- Keep radius at 6-8px.
- Avoid large gradients, blobs, decorative orbs, hero illustrations, nested cards, and marketing composition.
- Use semantic color sparingly:
  - Rose: risk, blocker, destructive state.
  - Amber: pending, watch, incomplete evidence.
  - Teal: healthy, complete, positive signal.
  - Blue: neutral information or linked data.
  - Violet: opportunity, expansion, premium signal.
- Prefer typography and layout over color for emphasis.

## Current Applied Style

For the SKY-POS dashboard prototype, the style direction is a premium proposal dashboard rather than a generic SaaS admin page:

- The content area should create an immediate polished first impression before exposing operational detail.
- The navigation can stay functional, but the main composition should feel like a high-quality dashboard concept.
- Revenue, rent collection, device health, and exceptions should read as one operating picture.
- Risk and deadline states should be visible through position, density, and contrast before decorative color.
- Charts should support the business judgment; they should not become dashboard decoration.
- Right-side queues should feel like work to be handled today, not generic notification cards.

## Wireframe Conversion Rules

- Convert the wireframe's most important business moment into the hero decision area, even if the wireframe only presents it as a row, card, or alert.
- Convert alerts into a restrained risk queue or evidence block.
- Convert tables into review queues only when rows represent real operational work.
- Convert prompt/query areas into evidence/source panels unless visible AI is required.
- Convert KPI rows into compact context rails.
- Convert shortcuts into a small utility cluster.
- Remove inline styling and generic HTML structure from planning wireframes.
- Preserve the planning intent, not the original visual layout.

## Screen Checks

- Can a stakeholder understand the product value in three seconds?
- Is there exactly one dominant business moment?
- Does the screen avoid generic dashboard/card-grid composition?
- Are the key risk, evidence, and next action visible without reading every card?
- Would the screenshot look credible in a proposal deck?
- Does the design still work if company/domain nouns are swapped?
- Are AI/slop cues absent from both language and layout?
