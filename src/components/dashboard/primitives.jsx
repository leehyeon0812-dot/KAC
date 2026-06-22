import { AlertTriangle, CheckCircle2, ChevronDown } from "lucide-react";
import { chartPalette, getHeatScale, statusBadgeStyles, statusTone } from "../../design/dashboardTokens";

export function Panel({
  title,
  meta,
  action,
  children,
  className = "",
  dense = false,
  titleAccessory = null,
  headerRight = null,
  compactHeader = false,
  style,
}) {
  return (
    <section className={`rounded-[22px] border border-[#e5e8eb] bg-white p-7 shadow-[0_22px_60px_-50px_rgba(15,23,42,0.55)] ${className}`} style={style}>
      <div className={`relative z-10 flex items-start justify-between gap-4 ${compactHeader ? "mb-4" : "mb-6"}`}>
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <h2 className={dense ? "text-[20px] font-extrabold tracking-[-0.035em] text-[#101214]" : "text-[24px] font-extrabold tracking-[-0.04em] text-[#101214]"}>
              {title}
            </h2>
            {titleAccessory}
          </div>
          {meta ? <p className="mt-1 text-[13px] font-semibold text-[#8a9097]">{meta}</p> : null}
        </div>
        {headerRight || (action ? (
          <button className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-white px-4 text-[13px] font-bold text-[#646b73] ring-1 ring-[#e5e8eb]">
            {action}
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        ) : null)}
      </div>
      {children}
    </section>
  );
}

export function StatusBadge({ tone = "done", children }) {
  return (
    <span className={`inline-flex h-5 items-center rounded-full px-2 text-[10.5px] font-bold ${statusBadgeStyles[tone] || statusBadgeStyles.done}`}>
      {children}
    </span>
  );
}

export function IconButton({ label, children }) {
  return (
    <button
      aria-label={label}
      title={label}
      className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#101214] ring-1 ring-[#e5e8eb] transition hover:bg-[#101214] hover:text-white"
    >
      {children}
    </button>
  );
}

export function CompactRows({ rows }) {
  return (
    <div className="space-y-1">
      {rows.map((row) => (
        <div key={`${row.badge}-${row.title}`} className="flex items-center justify-between border-t border-[#edf0f2] px-1 py-2.5 first:border-t-0">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <StatusBadge tone={row.tone || statusTone(row.badge)}>{row.badge}</StatusBadge>
            <div className="min-w-0 truncate text-[14px] font-extrabold text-[#101214]">{row.title}</div>
          </div>
          {row.value ? <span className="ml-2 shrink-0 text-[15px] font-extrabold text-[#101214]">{row.value}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function SystemStatus({ label, tone }) {
  const Icon = tone === "warn" ? AlertTriangle : CheckCircle2;
  return (
    <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#f7f8f9] px-2.5 text-[12px] font-bold text-[#646b73]">
      <Icon className={tone === "warn" ? "h-4 w-4 text-[#ffae20]" : "h-4 w-4 text-[#10c991]"} />
      {label}
    </span>
  );
}

export function LocationLine({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0">
      <span className="text-white/45">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function PaymentRow({ color, label, value }) {
  return (
    <div className="flex items-center justify-between border-t border-[#edf0f2] px-0 py-2.5 first:border-t-0">
      <div className="flex items-center gap-2 text-[13px] font-bold text-[#646b73]">
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        {label}
      </div>
      <div className="text-[13px] font-bold text-[#101214]">{value}</div>
    </div>
  );
}

export function PaymentDonut() {
  return (
    <div className="relative grid h-[178px] w-[178px] place-items-center rounded-full bg-[conic-gradient(#101214_0deg_330deg,#10c991_330deg_348deg,#dfe5ea_348deg_360deg)] shadow-[0_18px_36px_-30px_rgba(15,23,42,0.85)]">
      <div className="absolute inset-[18px] rounded-full bg-white" />
      <div className="relative text-center">
        <div className="text-[34px] font-extrabold leading-none tracking-[-0.06em] text-[#101214]">91.6%</div>
        <div className="mt-2 text-[12px] font-bold text-[#8a9097]">납부율</div>
      </div>
    </div>
  );
}

export function RowHeat({ row, maxValue }) {
  return (
    <>
      <div className="flex min-h-[42px] items-center text-[14px] font-bold text-[#646b73]">{row.area}</div>
      {["morning", "afternoon", "evening"].map((key) => (
        <HeatCell key={`${row.area}-${key}`} value={row[key]} maxValue={maxValue} />
      ))}
    </>
  );
}

export function HeatCell({ value, maxValue }) {
  const { status, color, textColor } = getHeatScale(value, maxValue);

  return (
    <div
      className="grid min-h-[42px] place-items-center rounded-[12px] py-1 text-center text-[13px] font-bold leading-tight"
      style={{ backgroundColor: color, color: textColor }}
    >
      <span>{value}</span>
      <span className="text-[10px] font-semibold opacity-70">{status}</span>
    </div>
  );
}

export function PassengerDot({ cx, cy, payload }) {
  if (cx == null || cy == null) return null;
  const isIssue = payload?.issue;

  if (isIssue) {
    return (
      <g>
        <rect x={cx - 44} y={cy - 34} width="88" height="24" rx="12" fill="#ff0037" />
        <text x={cx} y={cy - 18} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
          여객↑ 매출↓
        </text>
        <circle cx={cx} cy={cy} r="5" fill="#b4493c" stroke="#ffffff" strokeWidth="2" />
      </g>
    );
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r="4"
      fill={chartPalette.mint}
      stroke="#ffffff"
      strokeWidth={2}
    />
  );
}

export function ChartTooltip({ active, payload, label, suffix = "" }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-[#e2e5e8] bg-white px-3 py-2 text-[12px] font-extrabold shadow-[0_20px_40px_-30px_rgba(15,23,42,0.85)]">
      <div className="mb-1 text-[#8a9097]">{label}</div>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-[#101214]">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
          {entry.value}
          {suffix}
        </div>
      ))}
    </div>
  );
}
