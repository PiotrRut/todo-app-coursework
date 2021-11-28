import { sizes } from '@theme/tokens';
import styled from 'styled-components';

import { TextProps } from './Text.models';

export const fontSizes = {
  desktop: {
    h1: sizes[32],
    h2: sizes[24],
    h3: sizes[18],
    p: '1rem',
  },
  mobile: {
    h1: sizes[24],
    h2: sizes[22],
    h3: sizes[18],
    p: '1rem',
  },
};

export const TextContainer = styled.p<TextProps>`
  margin-bottom: ${(props) => props.marginBottom || '0'};
  color: inherit;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => fontSizes.mobile[props.variant ?? 'p']};

  @media (min-width: 480px) {
    font-size: ${(props) => fontSizes.desktop[props.variant ?? 'p']};
  }
`;
