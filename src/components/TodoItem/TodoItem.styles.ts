import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  background-color: ${palette.primary.main};
  border-radius: ${sizes[10]};
  width: 100%;
  padding: ${sizes[15]};
  margin-bottom: ${sizes[30]};

  @media (min-width: 920px) {
    margin-right: ${sizes[30]};
    padding: ${sizes[30]};
    max-width: ${sizes[400]};
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TagContainer = styled.div`
  background-color: ${palette.secondary.main};
  padding: ${sizes[5]} ${sizes[10]};
  border-radius: ${sizes[15]};
  max-width: fit-content;
`;
