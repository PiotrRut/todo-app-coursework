import styled from 'styled-components';

export const Container = styled.div``;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 780px) {
    width: 50%;
    flex-direction: row;
  }
`;
