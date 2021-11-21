import { sizes } from '@theme/tokens';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
 to {transform: rotate(360deg);}
`;

export const SpinnerContainer = styled.div`
  content: '';
  box-sizing: border-box;
  width: ${sizes[25]};
  height: ${sizes[25]};
  border-radius: 50%;
  border: ${sizes[2]} solid transparent;
  border-top-color: black;
  border-bottom-color: black;
  animation: ${spinner} 0.8s ease infinite;
`;
