import { palette } from '@theme/palette';
import styled from 'styled-components';

export const Anchor = styled.a`
  color: ${palette.secondary.light};

  &:hover {
    text-decoration: underline;
  }
`;
