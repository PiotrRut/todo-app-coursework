import React, {
  ChangeEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import InputMask from 'react-input-mask';

import { TextFieldProps } from './TextField.models';
import {
  StyledInput,
  StyledLabel,
  TextFieldContainer,
} from './TextField.styles';

/**
 *
 * Text field component, inspired by the material ui text field
 * Can either be masked, or unmasked by passing the `mask` prop.
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    error = false,
    errorMessage,
    label,
    name,
    fullWidth,
    value,
    onChange,
    onFocus,
    onBlur,
    marginBottom,
    required = false,
    mask,
    ...rest
  } = props;

  // Determines if the field has been focused
  const [focus, setFocus] = useState(false);

  // Determines if there is text inside the field
  const [occupied, setOccupied] = useState(false);

  const onFieldChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setOccupied(event.target.value?.length > 0);
      onChange?.(event);
    },
    []
  );

  useEffect(() => {
    setOccupied(value ? value.length > 0 : false);
  }, [value]);

  console.log({ value, occupied });

  if (mask) {
    return (
      <InputMask
        maskPlaceholder={null}
        mask={mask}
        onChange={onFieldChange}
        onBlur={(event) => {
          setFocus(false);
          onBlur?.(event);
        }}
        value={value}
        {...rest}
      >
        <TextFieldContainer
          fullWidth={fullWidth}
          error={error}
          focus={focus}
          marginBottom={marginBottom}
        >
          {label && (
            <StyledLabel
              error={error}
              htmlFor={name}
              active={focus || occupied}
            >
              {error ? errorMessage : required ? `${label} *` : label}
            </StyledLabel>
          )}
          <StyledInput
            ref={ref}
            name={name}
            id={name}
            onChange={onFieldChange}
            onFocus={(event) => {
              setFocus(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocus(false);
              onBlur?.(event);
            }}
            {...rest}
          />
        </TextFieldContainer>
      </InputMask>
    );
  }

  return (
    <TextFieldContainer
      fullWidth={fullWidth}
      error={error}
      focus={focus}
      marginBottom={marginBottom}
    >
      {label && (
        <StyledLabel error={error} htmlFor={name} active={focus || occupied}>
          {error ? errorMessage : required ? `${label} *` : label}
        </StyledLabel>
      )}
      <StyledInput
        ref={ref}
        name={name}
        id={name}
        onChange={onFieldChange}
        onFocus={(event) => {
          setFocus(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocus(false);
          onBlur?.(event);
        }}
        {...rest}
      />
    </TextFieldContainer>
  );
});

export default TextField;
