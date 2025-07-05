import { cn } from "@/lib/utils";

export function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  ...props
}) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500",
    outline: "border border-gray-300 text-white hover:bg-gray-700",
  };

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}