import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TodoItemContainer = styled.div<{ isCompleted: boolean }>`
  background-color: ${(p) =>
    p.isCompleted ? '#222e25' : palette.primary.main};
  border-radius: ${sizes[10]};
  width: 100%;
  padding: ${sizes[15]};
  margin-bottom: ${sizes[30]};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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

export const ClearButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  text-align: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
