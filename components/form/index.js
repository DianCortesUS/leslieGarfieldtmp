import styled from 'styled-components';
import {Select as MuiSelect} from '@material-ui/core';

import {Button} from 'components/buttons/button';

export const Select = styled(MuiSelect)`
  width: 100%;
  margin-bottom: 15px;
`;

export const SelectPlaceholder = styled.span`
  color: ${({theme}) => theme.palette.text.primary};
  opacity: 0.42; // as input placeholder opacity;
`;

export const SubmitButton = styled(Button)`
  width: 45%;
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  })};
`;
