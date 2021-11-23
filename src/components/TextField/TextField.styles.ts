import { sizes } from '@theme/tokens';
import styled, { css } from 'styled-components';

export const TextFieldContainer = styled.div<{
  fullWidth?: boolean;
  error?: boolean;
  focus?: boolean;
  marginBottom?: keyof typeof sizes;
}>`
  width: fit-content;
  ${(p) =>
    p.fullWidth &&
    css`
      width: 100%;
    `}
  position: relative;
  margin-bottom: ${(p) => (p.marginBottom ? sizes[p.marginBottom] : 0)};

  transition: box-shadow ease 0.2s;
  transform-origin: left center;
  box-shadow: 0 ${sizes[2]} 0 0
    ${(p) => (p.error ? 'tomato' : p.focus ? 'skyblue' : 'grey')};
`;

export const StyledInput = styled.input<{ fullWidth?: boolean }>`
  background: transparent;
  border: none;
  font-size: ${sizes['base']};
  font-weight: normal;
  color: black;

  &:focus {
    outline: none;
  }
  &[type='number']::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  &[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  width: calc(100vw - ${sizes[40]});
  height: ${sizes[50]};
  padding: ${sizes[25]} ${sizes[5]} ${sizes[3]} ${sizes[5]};

  @media (min-width: 480px) {
    width: ${(p) => (p.fullWidth ? '100%' : sizes[350])};
  }
`;

export const StyledLabel = styled.label<{
  error?: boolean;
  active?: boolean;
}>`
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  left: ${sizes[5]};
  top: 70%;
  font-size: ${sizes.base};
  line-height: 1.4;
  transform: translateY(-50%);
  transform-origin: center left;
  color: ${(p) => (p.error ? 'tomato' : 'black')};

  transition-property: transform, top, letter-spacing;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  ${(p) =>
    p.active &&
    css`
      top: 0;
      transform: translateY(0) scale(0.8125);
    `}
`;
