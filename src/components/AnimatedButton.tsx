
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  href,
  target,
  rel,
  disabled,
  ...props
}: AnimatedButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-custom relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 after:bg-white/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 after:bg-white/10',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 after:bg-white/5',
    ghost: 'bg-transparent hover:bg-secondary text-foreground after:bg-white/5',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5 rounded-md',
    md: 'px-6 py-2.5 rounded-lg',
    lg: 'text-lg px-8 py-3 rounded-lg',
  };
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    'after:absolute after:inset-0 after:translate-x-[-100%] after:transition-transform after:duration-300 hover:after:translate-x-0',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );
  
  const Component = href ? 'a' : 'button';
  
  const componentProps = href
    ? { href, target, rel, ...props }
    : { onClick, disabled, ...props };
  
  return (
    <Component className={buttonClasses} {...componentProps}>
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
