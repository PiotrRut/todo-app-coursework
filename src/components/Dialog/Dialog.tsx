import { Root } from '@radix-ui/react-dialog';
import React, { FunctionComponent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { DialogProps } from './Dialog.models';
import {
  StyledCloseButton,
  StyledContent,
  StyledOverlay,
} from './Dialog.styles';

/**
 * A generic dialog which bases its functionality on the Radix primitive dialog.
 * It's a controlled component and therefore requires the `open` prop to be passed.
 *
 * Ref - https://www.radix-ui.com/docs/primitives/components/dialog
 */
const Dialog: FunctionComponent<DialogProps> = (props) => {
  const { children, open = false, onClose, ...rest } = props;

  return (
    <Root open={open} {...rest}>
      <StyledOverlay />
      <StyledContent onEscapeKeyDown={onClose} onPointerDownOutside={onClose}>
        {children}
        <StyledCloseButton type="button" onClick={onClose}>
          <AiOutlineClose />
        </StyledCloseButton>
      </StyledContent>
    </Root>
  );
};

export default Dialog;
