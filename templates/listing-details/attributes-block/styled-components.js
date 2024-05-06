import styled from 'styled-components';
import {Typography} from '@material-ui/core';

import {Divider as DefaultDivider} from 'components/divider';

export const SpecificationTitle = styled(Typography)`
  ${({theme}) => ({
    [theme.breakpoints.down('xs')]: {
      fontWeight: 'bold',
    },
  })};
`;

export const Divider = styled(DefaultDivider)`
  width: calc(100% + 48px);
  opacity: 0.3;
`;
