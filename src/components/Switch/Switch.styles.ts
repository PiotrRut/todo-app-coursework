import { Root, Thumb } from '@radix-ui/react-switch';
import { palette } from '@theme/palette';
import { sizes } from '@theme/tokens';
import styled from 'styled-components';

export const StyledSwitch = styled(Root)`
  appearance: none;
  border: none;
  padding: ${sizes[0]};
  width: ${sizes[50]};
  min-width: ${sizes[50]};
  height: ${sizes[32]};
  background-color: ${palette.primary.light};
  border-radius: ${sizes[50]};
  position: relative;

  &[data-state='checked'] {
    background-color: ${palette.secondary.light};
  }
`;

export const StyledThumb = styled(Thumb)`
  display: block;
  width: ${sizes[25]};
  height: ${sizes[25]};
  background-color: white;
  border-radius: 50%;
  box-shadow: white ${sizes[0]} ${sizes[0]} ${sizes[2]};
  transition: transform 0.2s;
  will-change: transform;
  transform: translateX(${sizes[2]});

  &[data-state='checked'] {
    transform: translateX(${sizes[22]});
  }
`;
