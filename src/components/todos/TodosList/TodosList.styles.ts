import { palette } from '@theme/palette';
import { buttonReset } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const NewTodoButton = styled.button`
  ${buttonReset}
  background-color: transparent;
  box-shadow: 0 0 0 ${sizes[1]} ${palette.secondary.main} inset;
  border-radius: ${sizes[10]};
  width: 100%;
  padding: ${sizes[15]};
  margin-bottom: ${sizes[30]};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: ${sizes[150]};

  @media (min-width: 920px) {
    margin-right: ${sizes[30]};
    padding: ${sizes[30]};
    width: ${sizes[400]};
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${sizes[20]};
`;

export const FilterActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${sizes[10]};

  p {
    margin-left: ${sizes[5]};
  }
`;
