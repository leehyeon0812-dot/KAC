import { cn } from "../../lib/utils";

const toneClass = {
  neutral: "border-stone-200 bg-stone-50 text-stone-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  rose: "border-rose-200 bg-rose-50 text-rose-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
};

export function Badge({ tone = "neutral", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-[13px] font-medium",
        toneClass[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
