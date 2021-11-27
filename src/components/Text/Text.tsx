import React, { forwardRef } from 'react';

import { TextProps } from './Text.models';
import { TextContainer } from './Text.styles';

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    renderAs,
    marginBottom,
    variant,
    children,
    weight = 'normal',
  } = props;

  return (
    <TextContainer
      ref={ref}
      as={renderAs ?? variant}
      marginBottom={marginBottom}
      weight={weight}
      variant={variant}
    >
      {children}
    </TextContainer>
  );
});

export default Text;
