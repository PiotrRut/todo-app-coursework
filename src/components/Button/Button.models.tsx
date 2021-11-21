import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Indicates whether the button is in loading state where it shows a spinner */
  loading?: boolean;
  /** Disables the button visually and functionally */
  disabled?: boolean;
  /** When true, the button will occupy 100% width of its parent */
  fullWidth?: boolean;
}
