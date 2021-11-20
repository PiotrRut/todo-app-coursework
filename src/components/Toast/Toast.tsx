import 'react-toastify/dist/ReactToastify.min.css';

import React, { FunctionComponent } from 'react';

import { ToastProps } from './Toast.models';
import { StyledToast } from './Toast.styles';

/** Toast component to convey information */
const Toast: FunctionComponent<ToastProps> = (props) => {
  return (
    <StyledToast
      position="top-right"
      closeButton={false}
      hideProgressBar
      {...props}
    />
  );
};

export default Toast;
