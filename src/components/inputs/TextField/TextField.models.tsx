import { sizes } from '@theme/tokens';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input name (required) */
  name: HTMLInputElement['name'];
  /** Optional value */
  value?: string;
  /** Input label */
  label?: string;
  /** When true, will occupy 100% of its parent's width */
  fullWidth?: boolean;
  /** Boolean value indicating error state */
  error?: boolean;
  /** Error message to show in case of error */
  errorMessage?: string;
  /** Optional bottom margin */
  marginBottom?: keyof typeof sizes;
  /** Indicates whether field is required or not (visual only) */
  required?: boolean;
  /** If mask is provided, the masked input component will be rendered instead */
  mask?: string;
}
