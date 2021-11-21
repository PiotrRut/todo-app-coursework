import { centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  ${centredFlex}
  flex-direction: column;
  height: 100vh;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes[10]};
`;
