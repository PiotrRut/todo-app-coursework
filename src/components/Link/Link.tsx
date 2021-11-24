import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

import { InternalLinkProps } from './Link.models';
import { Anchor } from './Link.styles';

/**
 * A Link component which is a styled wrapper around `next/link`.
 *
 * Can also be used as an anchor tag and outside of next's router by specifying the `external` prop.
 */
const Link: FunctionComponent<InternalLinkProps> = (props) => {
  const { external = false, children, href, ...rest } = props;

  return (
    <>
      {external ? (
        <Anchor href={href as string} target="_blank" rel="noopener noreferrer">
          {children}
        </Anchor>
      ) : (
        <NextLink {...rest} href={href} passHref>
          <Anchor>{children}</Anchor>
        </NextLink>
      )}
    </>
  );
};

export default Link;
