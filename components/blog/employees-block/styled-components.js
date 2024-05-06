import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';

export const EmployeeName = styled(Typography)``;

export const EmployeeBox = styled(Box)`
  &:hover {
    ${EmployeeName} {
      color: ${({theme}) => theme.palette.primary.main};
    }
  }
`;
