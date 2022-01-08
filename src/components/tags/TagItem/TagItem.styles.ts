import { palette } from '@theme/palette';
import { buttonReset, centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const TagItemContainer = styled.div<{
  noBottomMargin: boolean;
  filterApplied?: boolean;
  showActions?: boolean;
}>`
  ${centredFlex}
  justify-content: space-between;
  background-color: ${palette.secondary.main};
  padding: ${sizes[5]} ${sizes[10]};
  border-radius: ${sizes[15]};
  box-shadow: ${(p) =>
    p.filterApplied && p.showActions
      ? `0 0 0 ${sizes[2]} ${palette.secondary.light}`
      : 'none'};
  max-width: fit-content;
  max-height: fit-content;
  margin-right: ${sizes[5]};
  margin-bottom: ${(p) => (p.noBottomMargin ? 0 : sizes[10])};
`;

export const TagItemAction = styled.button`
  ${buttonReset}
  ${centredFlex}
  border-radius: 50%;
  height: ${sizes[25]};
  width: ${sizes[25]};
  background-color: ${palette.secondary.dark};
  margin: 0 ${sizes[5]};

  &:last-child {
    margin: 0;
  }
`;
