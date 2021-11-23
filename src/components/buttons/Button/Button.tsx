import Spinner from '@components/Spinner';
import React, { forwardRef } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    loading = false,
    disabled = false,
    children,
    fullWidth = false,
    ...rest
  } = props;

  return (
    <ButtonContainer {...{ loading, disabled, fullWidth, ref, ...rest }}>
      {loading ? <Spinner /> : children}
    </ButtonContainer>
  );
});

export default Button;
