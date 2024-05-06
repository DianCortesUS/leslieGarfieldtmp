import {Box} from '@material-ui/core';
import styled from 'styled-components';

export const PublicationBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  text-align: center;
  &:hover {
    background-color: ${({theme}) => theme.palette.background.cream};
  }
`;
