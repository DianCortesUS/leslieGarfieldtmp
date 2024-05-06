import styled from 'styled-components';
import {Typography} from '@material-ui/core';

import {linkStyles} from 'helpers/styles';

export const Link = styled(Typography)`
  text-decoration: underline;
  ${linkStyles}
`;
