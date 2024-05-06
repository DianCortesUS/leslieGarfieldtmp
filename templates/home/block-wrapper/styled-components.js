import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const Container = styled(Box)`
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      paddingTop: 45,
      paddingBottom: 45,
    },
  })};
`;
