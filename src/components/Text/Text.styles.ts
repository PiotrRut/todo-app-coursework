import { sizes } from '@theme/tokens';
import styled from 'styled-components';

import { TextProps } from './Text.models';

export const fontSizes = {
  h1: sizes[32],
  h2: sizes[24],
  h3: sizes[18],
  p: '1rem',
};

export const TextContainer = styled.p<TextProps>`
  margin-bottom: ${(props) => props.marginBottom || '0'};
  color: inherit;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => fontSizes[props.variant ?? 'p']};
`;
