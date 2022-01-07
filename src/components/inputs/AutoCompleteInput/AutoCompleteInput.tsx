import Paper from '@mui/material/Paper';
import { palette } from '@theme/palette';
import React, { FunctionComponent } from 'react';

import { AutoCompleteInputProps } from './AutoCompleteInput.models';
import {
  StyledAutocomplete,
  StyledTextField,
} from './AutoCompleteInput.styles';

/**
 * Wrapper around MUI's `AutoComplete` - very opinionated and with limited room for customization
 * to accommodate the needs of this project.
 *
 * Needs a `name`, `label` and an `onChange` function together with `value` at the very least, as well
 * as an array of options.
 *
 * Ref - https://mui.com/components/autocomplete
 */
const AutoCompleteInput: FunctionComponent<AutoCompleteInputProps> = (
  props
) => {
  const { options, value, onChange, label, name, ...rest } = props;

  return (
    <StyledAutocomplete
      id={name}
      disablePortal
      options={options}
      onChange={onChange}
      PaperComponent={({ children }) => (
        <Paper
          style={{
            background: palette.primary.light,
            color: 'white',
          }}
        >
          {children}
        </Paper>
      )}
      {...rest}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={label}
          variant="standard"
          value={value}
          name={name}
        />
      )}
    />
  );
};

export default AutoCompleteInput;
