import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    padding-left: ${sizes[5]};
  }
  .MuiAutocomplete-clearIndicator {
    color: white;
  }
  .MuiAutocomplete-popupIndicator {
    color: white;
  }
  margin-bottom: ${sizes[20]};
`;

export const StyledTextField = styled(TextField)({
  '& label, & label.Mui-focused': {
    color: 'white',
    fontFamily: 'Ubuntu',
    paddingLeft: sizes[5],
  },
  '& input': {
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  '.MuiInput-underline:before': {
    borderBottom: `${sizes[2]} solid ${palette.primary.light}`,
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottom: `${sizes[2]} solid ${palette.primary.light}`,
  },
  '.MuiInput-underline:after': {
    borderBottom: `${sizes[2]} solid ${palette.secondary.light}`,
    transition: 'box-shadow ease 0.2s',
  },
});
