import styled from 'styled-components';
import {Typography, Box} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

export const CareersDetailsContainer = styled.div`
  margin-top: 90px;
`;

export const PrimaryInfoContainer = styled.div`
  background-color: #FFF9F0;
`;

export const Title = styled(Typography)`
  font-family: Copernicus;
  font-size: 28px;
`;

export const MainInfo = styled(Box)`
  border-top: 2px solid ${({theme}) => theme.palette.border.darkGray};
`;

export const MainInfoTitle = styled(Typography)`
  font-family: Sweet sans pro;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const FormTitle = styled(Typography)`
  font-family: Sweet sans pro;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const FormInputTitles = styled(Typography)`
  font-family: Sweet sans pro;
  font-size: 12px;
  line-height: 17.21px;
`;

export const DescriptionText = styled(ParsedText)`
  font-family: Copernicus;
  font-size: 16px;
  text-align: justify;
`;