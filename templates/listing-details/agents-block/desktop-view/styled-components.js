import styled from 'styled-components';
import {Grid} from '@material-ui/core';

export const InfoContainer = styled(Grid)`
  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  })};
`;
