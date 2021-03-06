import { TextFieldProps } from '@components/inputs/TextField/TextField.models';

export interface FormTextFieldProps extends TextFieldProps {
  /** Name corresponding to a value in a given Formik form */
  name: string;
}
