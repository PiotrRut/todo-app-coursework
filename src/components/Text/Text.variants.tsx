import { forwardRef } from 'react';

import Text from './Text';
import { TextProps } from './Text.models';

const H1 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} variant="h1" {...rest}>
        {children}
      </Text>
    );
  }
);

const H2 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} variant="h2" {...rest}>
        {children}
      </Text>
    );
  }
);

const H3 = forwardRef<HTMLHeadingElement, Omit<TextProps, 'variant'>>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} variant="h3" {...rest}>
        {children}
      </Text>
    );
  }
);

const P = forwardRef<HTMLParagraphElement, Omit<TextProps, 'variant'>>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} variant="p" {...rest}>
        {children}
      </Text>
    );
  }
);

export { H1, H2, H3, P };
