import Spinner from '@components/Spinner';
import React, { FunctionComponent } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    loading = false,
    disabled = false,
    children,
    fullWidth = false,
    ...rest
  } = props;

  return (
    <ButtonContainer {...{ loading, disabled, fullWidth, ...rest }}>
      {loading ? <Spinner /> : children}
    </ButtonContainer>
  );
};

export default Button;
