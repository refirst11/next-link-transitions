'use client';

import { viewTransition } from '../utils/view-transition';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

interface NextLinkProps extends React.ComponentProps<typeof NextLink> {
  next?: string;
  old?: string;
}

export const Link = (props: NextLinkProps) => {
  const { href, replace, scroll, next, old, ...restProps } = props;
  const router = useRouter();

  if (typeof href !== 'string') return <NextLink {...props} />;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }

    e.preventDefault();

    // Navigation callback function
    const navigate = () => {
      const navigateMethod = replace ? router.replace : router.push;
      navigateMethod(href, { scroll: scroll ?? true });
    };

    // Execute navigation within viewTransition
    viewTransition(navigate, next, old);
  };

  return <NextLink href={href} {...restProps} onClick={onClick} />;
};
