import { ButtonHTMLAttributes } from 'react';

export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'white' | 'black';
  name: HTMLButtonElement['name'];
}
