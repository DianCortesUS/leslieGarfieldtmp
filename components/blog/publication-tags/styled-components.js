import styled from 'styled-components';
import {Typography} from '@material-ui/core';

import {linkStyles} from 'helpers/styles';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  > :not(:first-child) {
    border-left: 1px solid ${({theme}) => theme.palette.border.darkGray};
  }
`;

export const LinkText = styled(Typography)`
  ${linkStyles};
`;
