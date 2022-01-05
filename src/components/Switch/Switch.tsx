import React, { FunctionComponent } from 'react';

import { SwitchProps } from './Switch.models';
import { StyledSwitch, StyledThumb } from './Switch.styles';

/**
 * A switch/toggle dialog. Bases it's core functionality on the Radix primitive switch.
 *
 * Ref - https://www.radix-ui.com/docs/primitives/components/switch
 */
const Switch: FunctionComponent<SwitchProps> = (props) => {
  const { name, ...rest } = props;

  return (
    <StyledSwitch name={name} {...rest}>
      <StyledThumb />
    </StyledSwitch>
  );
};

export default Switch;
