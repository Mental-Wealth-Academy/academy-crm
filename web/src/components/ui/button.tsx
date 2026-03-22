import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#5168FF] text-white border border-[#5168FF]/80 ring-1 ring-inset ring-white/[0.15] shadow-[0_4px_16px_rgba(81,104,255,0.25)] hover:bg-[#4058EE] hover:border-[#4058EE]/80 hover:shadow-[0_4px_24px_rgba(81,104,255,0.35)] active:bg-[#3A4FDD] active:scale-[0.98]",
  secondary:
    "bg-white text-[#1A1B24] border border-[rgba(0,0,0,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-gray-50 hover:border-[rgba(0,0,0,0.16)] active:bg-gray-100 active:scale-[0.98]",
  ghost:
    "text-[#1A1B24] hover:text-[#5168FF] hover:bg-[#5168FF]/[0.06] active:bg-[#5168FF]/[0.1]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-sm",
  md: "h-10 px-4 text-sm rounded-sm",
  lg: "h-12 px-6 text-base rounded-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-150",
          variantStyles[variant],
          sizeStyles[size],
          disabled && "pointer-events-none opacity-40",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
