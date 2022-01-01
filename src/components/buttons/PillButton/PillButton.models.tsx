import { ButtonHTMLAttributes } from 'react';

export interface PillButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: HTMLButtonElement['name'];
  /** Disables the button visually and functionally */
  disabled?: boolean;
}
