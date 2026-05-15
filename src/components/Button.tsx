import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base = "cursor-pointer transition-all hover:scale-110 rounded-full p-2";
  const variants = {
    primary: "bg-primary hover:bg-accent text-foreground",
    ghost: "bg-transparent hover:bg-muted text-foreground",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
