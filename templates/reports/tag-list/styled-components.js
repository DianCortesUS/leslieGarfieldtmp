import styled from 'styled-components';
import {Typography} from '@material-ui/core';

export const TagItem = styled(Typography)`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${({theme}) => theme.palette.grey[800]};
  }
  ${({active, theme}) =>
    active === 'true' && `border-bottom: 2px solid ${theme.palette.grey[800]};`}
`;
