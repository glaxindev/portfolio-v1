import React from "react";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  // Optional: center align vs custom class
  className?: string;
}

/**
 * Accessible, theme-aware tooltip using Tailwind and CSS-only hover/focus states.
 * - Renders above the trigger, centered, with a small arrow
 * - Uses pointer-events-none on bubble to avoid stealing hover
 */
export default function Tooltip({
  label,
  children,
  className = "",
}: TooltipProps) {
  return (
    <div className={`relative inline-flex group/tt ${className}`}>
      {children}
      {/* Tooltip bubble */}
      <div
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2.5 py-1 text-xs font-medium shadow-md ring-1 ring-black/5 dark:ring-white/20 opacity-0 scale-95 translate-y-1 group-hover/tt:opacity-100 group-hover/tt:scale-100 group-hover/tt:translate-y-0 group-focus-visible/tt:opacity-100 group-focus-visible/tt:scale-100 group-focus-visible/tt:translate-y-0 transition-all duration-200 ease-out z-[200]"
      >
        {label}
      </div>
    </div>
  );
}
