import { LinkProps } from 'next/link';

export interface InternalLinkProps extends LinkProps {
  /** For external links (not using `next/link`) */
  external?: boolean;
}
