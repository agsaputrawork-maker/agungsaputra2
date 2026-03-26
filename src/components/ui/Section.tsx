import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'accent';
}

export function Section({ 
  children, 
  fullWidth = false, 
  className, 
  id,
  background = 'white',
  ...props 
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    accent: 'bg-accent-50',
  };

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24 relative overflow-hidden",
        bgClasses[background],
        className
      )}
      {...props}
    >
      <div className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out transform",
        fullWidth ? "" : "max-w-7xl",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        {children}
      </div>
    </section>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  fullWidth?: boolean;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href, 
  fullWidth,
  children,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-primary-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-primary-900 text-primary-900 hover:bg-primary-50",
    ghost: "text-primary-700 hover:bg-slate-100 hover:text-primary-900",
    white: "bg-white text-primary-900 hover:bg-slate-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm font-medium",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold rounded-xl",
    xl: "px-10 py-5 text-xl font-bold rounded-2xl",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
