import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-stone-800 shadow-sm disabled:bg-stone-300",
  secondary:
    "border border-stone-200 bg-white text-foreground hover:border-stone-300 hover:bg-stone-50 shadow-sm",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
  destructive:
    "border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) {
  const sizes = {
    sm: "h-8 px-3 text-[13px]",
    md: "h-9 px-4 text-[15px]",
    icon: "h-9 w-9 p-0",
  };

  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-70",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
