import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${sizes[20]};
`;

export const IconWrapper = styled.div`
  margin-right: ${sizes[20]};
`;
