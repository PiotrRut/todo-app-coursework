import { palette } from '@theme/palette';
import { centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TagItemContainer = styled.div<{ noBottomMargin: boolean }>`
  ${centredFlex}
  background-color: ${palette.secondary.main};
  padding: ${sizes[5]} ${sizes[10]};
  border-radius: ${sizes[15]};
  max-width: fit-content;
  max-height: fit-content;
  margin-right: ${sizes[5]};
  margin-bottom: ${(p) => (p.noBottomMargin ? 0 : sizes[10])};
`;
