import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${sizes['50']} 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Content = styled.main``;
