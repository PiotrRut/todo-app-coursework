import { AutocompleteProps } from '@mui/material/Autocomplete';

export interface AutoCompleteInputProps
  extends Omit<
    AutocompleteProps<unknown, false, false, false, 'div'>,
    'renderInput'
  > {
  /** Name for the input */
  name: string;
  /** Label for the input */
  label: string;
}
