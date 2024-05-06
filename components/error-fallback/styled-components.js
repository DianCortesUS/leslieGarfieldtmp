import styled from 'styled-components';
import {ParsedText} from '@perchwell/components';

import {Button} from 'components/buttons/button';
import { Typography } from '@material-ui/core';

export const Name = styled(ParsedText)`
  font-size: 6rem;
  line-height: 6.85rem;
  font-weight: bold;
  color: #6D6D6D;
  [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
      lineHeight: '4.625rem'
    },
`;

export const Subtitle = styled(ParsedText)`
  color: #6d6d6d;
`;

export const ErrorComponent = styled.div`
    margin-top: 95px;

    @media (max-width: 1280px) {
      margin-top: 0;
    }
`;

export const ErrorTitle = styled(Typography)`
    font-family: Copernicus;
    font-size: 180px;
    color: white;

    @media (max-width: 1024px) {
      font-size: 100px;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ErrorSubtitle = styled(Typography)`
    font-family: Copernicus;
    font-size: 60px;
    line-height: 68px;
    text-align: center;
    font-style: italic;
    color: white;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 38px;
      line-height: 42px;
    }
`;

export const ErrorText = styled(Typography)`
    font-family: Copernicus;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: white;
`;

export const ErrorButton = styled(Button)`
    color: white;
    border: 1px solid white;
    margin-top: 20px;

    &:hover {
      border: 1px solid black;
    }
`;