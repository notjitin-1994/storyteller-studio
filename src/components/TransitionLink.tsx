"use client";

import Link, { LinkProps } from "next/link";
import { useTransition } from "./TransitionProvider";
import { usePathname } from "next/navigation";

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const { navigate } = useTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If it's a target="_blank" or an external link, let it be
    if (
      href.startsWith("http") || 
      href.startsWith("mailto:") || 
      href.startsWith("tel:")
    ) {
      return;
    }

    // If it's the exact same page, just scroll to top or let Next.js handle it
    if (pathname === href) {
      return;
    }

    // If the href contains a query param for booking, let Next.js handle it seamlessly (no full page wipe)
    if (href.includes("?booking=")) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
