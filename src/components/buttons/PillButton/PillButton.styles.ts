import { palette } from '@theme/palette';
import { buttonReset, centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

import { PillButtonProps } from './PillButton.models';

export const PillButtonContainer = styled.button<PillButtonProps>`
  ${buttonReset}
  ${centredFlex}
  box-sizing: border-box;
  padding: ${sizes[5]} ${sizes[10]};
  border-radius: ${sizes[15]};
  font-size: ${sizes.base};
  max-height: fit-content;
  max-width: fit-content;
  box-shadow: 0 0 0 ${sizes[1]} ${palette.secondary.main} inset;
  margin: 0 ${sizes[5]} ${sizes[10]} 0;
  color: ${palette.secondary.main};
`;
