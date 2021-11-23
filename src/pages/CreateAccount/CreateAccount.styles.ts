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

export const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #3b3b3b;
  height: 500px;
  width: 100%;
  padding: ${sizes[50]} 0;
  border-radius: ${sizes[10]};

  @media (min-width: 480px) {
    padding: ${sizes[50]};
    width: auto;
  }
`;
