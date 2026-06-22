import { cn } from "../../lib/utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "h-9 w-full rounded-md border border-input bg-background px-3 text-[15px] text-foreground outline-none transition placeholder:text-muted-foreground focus:border-stone-400 focus:shadow-focus",
        className
      )}
      {...props}
    />
  );
}
