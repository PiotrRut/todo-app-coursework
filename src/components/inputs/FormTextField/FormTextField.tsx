import TextField from '@components/inputs/TextField';
import { useField } from 'formik';
import React, { FunctionComponent } from 'react';

import { FormTextFieldProps } from './FormTextField.models';

/**
 * Wrapper around `TextField` which uses Formik's `useField` hook to
 * automagically hook up the text field to Formik, and allow for plug-n-play use inside Formik forms.
 */
const FormTextField: FunctionComponent<FormTextFieldProps> = (props) => {
  const { name, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  const isError = meta.touched && !!meta.error;

  return (
    <TextField
      name={name}
      error={isError}
      errorMessage={meta.error}
      value={field.value}
      onChange={(event) => {
        helpers.setValue(event.target.value);
      }}
      onBlur={() => {
        helpers.setTouched(true);
      }}
      {...rest}
    />
  );
};

export default FormTextField;
