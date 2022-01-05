import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 ${sizes[20]};
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;
  height: ${sizes[50]};
  background-color: ${palette.primary.main};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
