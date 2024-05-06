import styled from 'styled-components';
import {ContentBlock} from 'components/content-block';
import {Button} from 'components/buttons/button';
import {
  Box,
  IconButton as MuiIconButton,
  Dialog as MuiDialog,
} from '@material-ui/core';

export const FiltersContainer = styled(Box)`
  overflow: auto;
`;

export const Dialog = styled(MuiDialog)`
  top: ${({top}) => top};
`;

export const IconButton = styled(MuiIconButton)`
  padding: 0;
`;

export const ContentMobile = styled(ContentBlock)`
  background-color: #FFF9F080;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonFilters = styled(Button)`
  border: none;
  font-size: 12px;
  font-weight: bold;
  padding: 0 10px;
`
