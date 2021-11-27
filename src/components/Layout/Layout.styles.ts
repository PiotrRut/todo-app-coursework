import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const LayoutContainer = styled.div``;

export const LayoutInner = styled.div<{ isSignedIn?: boolean }>`
  padding: ${(p) => (p.isSignedIn ? sizes[20] : '0')};
`;
