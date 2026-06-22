import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <section
      className={cn(
        "rounded-xl border border-stone-200 bg-card text-card-foreground shadow-[0_20px_52px_-42px_rgba(28,25,23,0.42)]",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("border-b border-border px-5 py-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h2 className={cn("text-[18px] font-bold text-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-5", className)} {...props} />;
}
