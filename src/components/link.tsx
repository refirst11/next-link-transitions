"use client";

import { DOMAttributes } from "react";
import { viewTransition } from "../utils/view-transition";
import NextLink from "next/link";
import type { UrlObject } from "url";

type Url = string | UrlObject;
interface ViewTransitionsLinkProps extends DOMAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: Url;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean | null;
  initial?: string;
  exit?: string;
}

export const Link = ({
  children,
  href,
  replace = false,
  scroll = true,
  prefetch = null,
  initial,
  exit,
  ...props
}: ViewTransitionsLinkProps) => {
  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        viewTransition(initial, exit);
      }}
    >
      {children}
    </NextLink>
  );
};
