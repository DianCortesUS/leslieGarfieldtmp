import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import { ParsedText } from '@perchwell/components';

export const LinkText = styled(Typography)`
  text-decoration: underline;
  font-family: sweet sans;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  @media (max-width: 959px) {
    font-size: 12px;
  }
`;

export const AddressText = styled(ParsedText)`
font-family: Copernicus;
font-size: 28px;
margin-top: 12px;
line-height: 42px;

`