import styled from 'styled-components';

export const Container = styled.div``;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;
