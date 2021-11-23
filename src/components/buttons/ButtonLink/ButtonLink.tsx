import React, { forwardRef } from 'react';

import { ButtonLinkProps } from './ButtonLink.models';
import { ButtonLinkContainer } from './ButtonLink.styles';

/** A `Button` component, styled to resemble an inline link */
const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  (props, ref) => {
    const { children, color = 'white', ...rest } = props;

    return (
      <ButtonLinkContainer {...{ color, ref, ...rest }}>
        {children}
      </ButtonLinkContainer>
    );
  }
);

export default ButtonLink;
