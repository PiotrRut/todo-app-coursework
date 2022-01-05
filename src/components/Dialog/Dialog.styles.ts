import * as Dialog from '@radix-ui/react-dialog';
import { palette } from '@theme/palette';
import { buttonReset } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled, { keyframes } from 'styled-components';

const dialogAnimate = keyframes`
  from { 
    opacity: 0; 
    transform: translate(-50%, -48%) scale(.96); 
  }
  
  to { 
    opacity: 1; 
    transform: translate(-50%, -50%) scale(1); 
  }
`;

export const DialogContainer = styled.div`
  background-color: grey;
`;

export const StyledOverlay = styled(Dialog.Overlay)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: ${palette.primary.dark};
  opacity: 0.85;
  z-index: 101;
`;

export const StyledContent = styled(Dialog.Content)`
  background-color: ${palette.primary.main};
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 90vw;
  padding: ${sizes[20]};
  border-radius: ${sizes[5]};

  transform: translate(-50%, -50%);
  animation: ${dialogAnimate} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 480px) {
    padding: ${sizes[40]};
    max-width: ${sizes[450]};
  }
  z-index: 101;
`;

export const StyledCloseButton = styled(Dialog.Close)`
  ${buttonReset}
  position: absolute;
  top: ${sizes[25]};
  right: ${sizes[20]};
  border: none;

  cursor: pointer;
  svg {
    path {
      fill: ${palette.text.default};
    }
  }
`;
