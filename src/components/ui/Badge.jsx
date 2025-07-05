import { cn } from "@/lib/utils";

export function Badge({ children, className = "", variant = "secondary", ...props }) {
  const variants = {
    secondary: "bg-slate-700 text-slate-100 hover:bg-slate-600",
    outline: "border border-slate-600 text-slate-300 hover:bg-slate-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}