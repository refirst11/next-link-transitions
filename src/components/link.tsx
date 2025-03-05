"use client";

import { DOMAttributes } from "react";
import { viewTransition } from "../utils/view-transition";
import NextLink from "next/link";
import type { UrlObject } from "url";

type Url = string | UrlObject;
interface ViewTransitionsLinkProps extends DOMAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: Url;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean | null;
  entry?: string;
  old?: string;
}

export const Link = ({
  children,
  className,
  href,
  replace = false,
  scroll = true,
  prefetch = null,
  entry,
  old,
  ...props
}: ViewTransitionsLinkProps) => {
  return (
    <NextLink
      className={className}
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        viewTransition(entry, old);
      }}
    >
      {children}
    </NextLink>
  );
};
