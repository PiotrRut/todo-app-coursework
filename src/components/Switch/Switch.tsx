import React, { FunctionComponent } from 'react';

import { SwitchProps } from './Switch.models';
import { StyledSwitch, StyledThumb } from './Switch.styles';

const Switch: FunctionComponent<SwitchProps> = (props) => {
  const { name, ...rest } = props;

  return (
    <StyledSwitch name={name} {...rest}>
      <StyledThumb />
    </StyledSwitch>
  );
};

export default Switch;
