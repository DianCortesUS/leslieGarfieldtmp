import styled from 'styled-components';
import {
  InputAdornment as MuiInputAdornment,
  Typography,
  OutlinedInput as MuiOutlinedInput,
} from '@material-ui/core';

import {MapPinIcon, CloseBorderIcon} from 'icons';

export const MobileTitle = styled(Typography)`
  width: 90%;
`;

export const OutlinedInput = styled(MuiOutlinedInput)`
  height: 100%;
  border-radius: 0;
`;

export const InputAdornment = styled(MuiInputAdornment)`
  display: block;
  height: auto;
  max-height: 100%;
`;

export const StyledMapPinIcon = styled(MapPinIcon)`
  color: ${({theme}) => theme.palette.primary.main};
  font-size: 1rem;
`;

export const StyledCloseBorderIcon = styled(CloseBorderIcon)`
  font-size: 0.9rem;
`;

