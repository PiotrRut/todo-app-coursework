/* eslint-disable indent */
import { palette } from '@theme/palette';
import { buttonReset, centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.models';

export const ButtonContainer = styled.button<ButtonProps>`
  ${buttonReset}
  ${centredFlex}
  width: ${(p) => (p.fullWidth ? '100%' : css`calc(100vw - ${sizes[40]})`)};
  height: ${sizes[50]};
  background-color: ${(p) =>
    p.disabled ? palette.primary.light : palette.secondary.light};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${(p) =>
      p.disabled ? palette.primary.light : palette.secondary.main};
    cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
  }

  @media (min-width: 480px) {
    width: ${(p) => (p.fullWidth ? '100%' : sizes[350])};
  }
`;
