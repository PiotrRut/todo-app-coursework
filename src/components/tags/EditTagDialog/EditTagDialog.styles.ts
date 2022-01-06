import { palette } from '@theme/palette';
import { buttonReset } from '@theme/shortcuts';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteButton = styled.button`
  ${buttonReset}
  height: ${sizes[30]};
  background-color: transparent;
  color: ${palette.text.default};
  border-radius: ${sizes[5]};
  transition: ease 0.3s;
  border: ${sizes[2]} solid ${palette.error};
  width: 100%;
  margin-bottom: ${sizes[10]};

  &:hover {
    background-color: ${palette.error};
  }
`;
