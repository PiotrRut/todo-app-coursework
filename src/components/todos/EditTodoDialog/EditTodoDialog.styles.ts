import { H2 } from '@components/Text';
import { palette } from '@theme/palette';
import { buttonReset } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled, { css } from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${sizes[20]};
`;

export const commonButtonStyles = css`
  ${buttonReset}
  width: 48%;
  height: ${sizes[30]};
  background-color: transparent;
  color: ${palette.text.default};
  border-radius: ${sizes[5]};
  transition: ease 0.3s;
`;

export const DeleteButton = styled.button`
  ${commonButtonStyles}
  border: ${sizes[2]} solid ${palette.error};

  &:hover {
    background-color: ${palette.error};
  }

  &:only-child {
    width: 100%;
  }
`;

export const MarkUncompletedButton = styled.button`
  ${commonButtonStyles}
  border: ${sizes[2]} solid ${palette.primary.dark};

  &:hover {
    background-color: ${palette.primary.dark};
  }
`;

export const DialogTitle = styled(H2)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;
