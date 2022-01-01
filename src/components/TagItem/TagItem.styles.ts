import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TagItemContainer = styled.div`
  background-color: ${palette.secondary.main};
  padding: ${sizes[5]} ${sizes[10]};
  border-radius: ${sizes[15]};
  max-width: fit-content;
  max-height: fit-content;
  margin: 0 ${sizes[5]} ${sizes[10]} 0;
`;
