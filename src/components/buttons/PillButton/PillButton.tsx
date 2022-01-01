import React, { forwardRef } from 'react';

import { PillButtonProps } from './PillButton.models';
import { PillButtonContainer } from './PillButton.styles';

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  (props, ref) => {
    const { disabled = false, children, ...rest } = props;

    return (
      <PillButtonContainer {...{ disabled, ref, ...rest }}>
        {children}
      </PillButtonContainer>
    );
  }
);

export default PillButton;
