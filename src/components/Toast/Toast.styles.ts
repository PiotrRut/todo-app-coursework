import { palette } from '@theme/palette';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast--success {
    background-color: ${palette.success};
    color: ${palette.text.default};
  }

  .Toastify__toast--error {
    background-color: ${palette.error};
    color: ${palette.text.default};
  }

  .Toastify__toast-icon > svg {
    path {
      fill: white;
    }
  }
`;
