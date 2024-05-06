import styled from 'styled-components';
import {Grid} from '@material-ui/core';

export const Container = styled(Grid)`
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  })};
`;
