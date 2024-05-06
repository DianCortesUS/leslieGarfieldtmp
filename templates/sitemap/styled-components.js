import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';

import {linkStyles} from 'helpers/styles';

export const TitleContainer = styled(Box)`
  border-bottom: 1px solid ${({theme}) => theme.palette.border.dark};
`;

export const TitleLink = styled(Typography)`
  ${linkStyles};
`;

export const ListLink = styled(Typography)`
  text-decoration: underline;
  text-transform: none;
  ${linkStyles};
`;
