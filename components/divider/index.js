import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const Divider = styled(Box)`
  width: ${({width = '100%'}) => {
    return typeof width === 'number' ? `${width}px` : width;
  }};
  border-top: ${({theme, size = 1, dotted, color}) => {
    const borderColor = color ? color : theme.palette.border.dark;

    return `${size}px ${dotted ? 'dotted' : 'solid'} ${borderColor}`;
  }};
`;
