import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  sticky?: boolean;
  variant?: "primary" | "secondary";
}

export function RainbowButton({
  children,
  className,
  sticky = false,
  variant = "primary",
  ...props
}: RainbowButtonProps) {
  const buttonContent = (
    <button
      className={cn(
        // Base styles
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // Glow effect
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // Variant styles
        {
          // Primary variant
          "bg-[linear-gradient(hsl(var(--muted)),hsl(var(--muted))),linear-gradient(hsl(var(--muted))_50%,hsl(var(--muted)/0.6)_80%,hsl(var(--muted)/0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] dark:bg-[linear-gradient(hsl(var(--accent)),hsl(var(--accent))),linear-gradient(hsl(var(--accent))_50%,hsl(var(--accent)/0.6)_80%,hsl(var(--accent)/0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]": variant === "primary",
          
          // Secondary variant
          "bg-[linear-gradient(hsl(var(--accent)),hsl(var(--accent))),linear-gradient(hsl(var(--accent))_50%,hsl(var(--accent)/0.6)_80%,hsl(var(--accent)/0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] dark:bg-[linear-gradient(hsl(var(--secondary)),hsl(var(--secondary))),linear-gradient(hsl(var(--secondary))_50%,hsl(var(--secondary)/0.6)_80%,hsl(var(--secondary)/0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]": variant === "secondary"
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );

  if (sticky) {
    return (
      <div className="fixed inset-x-0 bottom-6 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex justify-center">
            {buttonContent}
          </div>
        </div>
      </div>
    );
  }

  return buttonContent;
}