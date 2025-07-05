import { cn } from "@/lib/utils";

export function Progress({ value = 0, className = "" }) {
  return (
    <div className={cn("w-full h-2 bg-slate-700 rounded-full overflow-hidden", className)}>
      <div
        className="h-full bg-blue-600 transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
