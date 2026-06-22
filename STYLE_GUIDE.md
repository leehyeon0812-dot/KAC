# KAC Dashboard Style Guide

이 문서는 한국공항공사 운영 대시보드 시안의 재사용 기준이다. 새 화면을 만들 때 아래 규칙을 우선 적용한다.

## Implementation Structure

- App composition: `src/App.jsx`
- Dashboard frame: `src/components/dashboard/layout.jsx`
- Dashboard cards: `src/components/dashboard/cards.jsx`
- Shared dashboard primitives: `src/components/dashboard/primitives.jsx`
- Design tokens and tone helpers: `src/design/dashboardTokens.js`
- Screen data: `src/data/skyposDashboard.js`

새 화면을 만들 때는 `DashboardShell`, `Panel`, `StatusBadge`, `CompactRows`, `ChartTooltip`, `cardHeights`, `chartPalette`를 우선 재사용한다. 카드별 데이터는 화면 컴포넌트에 직접 박지 않고 `src/data`에 분리한다.

## Foundation

- Font: Pretendard only.
- Page background: `#f7f8f9`.
- Surface: white cards on light gray page background.
- Structure color: near-black `#0a0b0d` / `#101214`.
- Primary accent: mint `#10c991`.
- Danger: red `#ff0037` or deep red text `#c82138`.
- Warning: amber `#ffae20`.
- Muted text: `#6f7780`, secondary muted `#8a9097`.
- Border: `#e5e8eb` for outer card lines, `#edf0f2` for light dividers.

## Layout

- The top navigation is flush to the viewport top.
- The left rail is flush to the viewport left and starts directly below the top navigation.
- Main content uses `20px` page padding from the rail and viewport edge.
- Dashboard grid gap: `20px`.
- Use a two-column desktop layout: flexible main content + fixed right rail around `390px`.

## Navigation

- Top navigation contains logo, portal toggle, utility icons, and user profile.
- Main page navigation items are not shown in the top GNB.
- Left rail uses black background with large icon buttons.
- Active rail item uses mint-tinted background `#e8fff5` and green icon.

## Cards

- Default card: white background, `22px` radius, `1px` light border, very soft shadow.
- KPI cards: `20px` radius, `24px` padding, compact content.
- Do not place bordered mini-cards inside cards unless the content is a repeated table/list item.
- Prefer whitespace and alignment over nested outlines.
- Fixed dashboard heights: KPI cards `174px`, revenue summary `180px`, medium analytic cards `356px`, comparison/inspection cards `366px`.
- Match cards in the same grid row by height before adding new visual detail.

## KPI Cards

- KPI icon size: `28px × 28px`.
- KPI icons are image assets only, with no wrapper border, background, or shadow.
- KPI title: muted, bold, compact.
- KPI value: large, strong, tight tracking.
- Positive detail uses mint/green; risk detail uses red.

## Badges

- Danger badge: red fill, white text.
- Warning badge: amber fill, dark text.
- Normal badge: white fill, light border, muted text.
- Low-priority badge: light gray fill, muted text.
- AI badge: compact saturated gradient pill, white icon and white text. Use it sparingly for AI-prioritized or AI-calculated content.

## Charts

- Use restrained chart colors. Default bars are gray/mint/black.
- Use black for target or baseline emphasis only.
- Use mint for positive/current data emphasis.
- Use red badges for exception annotations such as `여객↑ 매출↓`.
- Avoid decorative chart colors that do not encode status or hierarchy.

## Tables And Lists

- Use simple dividers instead of shadowed list cards.
- Put badge and title on one line when space is tight.
- Keep row height compact in right-column operational cards.

## Avoid

- Marketing-style hero layouts.
- Gradient blobs or decorative orbs.
- Excessive nested cards.
- AI-looking generic slabs with too many soft gray containers.
- Mixed icon styles inside the same KPI group.
