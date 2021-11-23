import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 ${sizes[20]};

  width: 100%;
  height: ${sizes[50]};
  background-color: #3b3b3b;
`;
