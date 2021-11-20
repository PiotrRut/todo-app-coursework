import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast--success {
    background-color: seagreen;
    color: white;
  }

  .Toastify__toast--error {
    background-color: tomato;
    color: white;
  }

  .Toastify__toast-icon > svg {
    path {
      fill: white;
    }
  }
`;
