import { palette } from '@theme/palette';
import { buttonReset, centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

import { ButtonLinkProps } from './ButtonLink.models';

export const ButtonLinkContainer = styled.button<ButtonLinkProps>`
  ${buttonReset}
  ${centredFlex}
  font-size: ${sizes.base};
  color: ${(p) =>
    p.color === 'white' ? palette.text.default : palette.text.dark};
  padding: ${sizes[10]};
  

  &:hover {
    background-color: rgb(70,130,180, 0.2);
    border-radius: ${sizes[5]};
  }
`;
