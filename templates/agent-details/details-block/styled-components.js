import styled from 'styled-components';
import {Grid, Typography} from '@material-ui/core';
import { ParsedText } from '@perchwell/components';
import { Avatar } from 'components/avatar';

export const TopInfoContainer = styled(Grid)`
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  })};
`;

export const BottomInfoContainer = styled(Grid)`
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  })};
`;

export const AgentName = styled(Typography)`
  font-family: Copernicus;
  font-size: 28px;
  line-height: 42px;
  font-weight: 550;
  margin-bottom: 15px;
`;

export const AgentPhone = styled(Typography)`
  font-size: 13px;
  font-style: italic;
  line-height: 22px;
  font-weight: 625;
`;

export const AgentBio = styled(ParsedText)`
  font-family: Copernicus;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 120px;
`;

export const AgentAvatar = styled(Avatar)`

  @media (min-width: 370px) {
    width: 350px;
    height: 350px
  }

  @media (min-width: 660px) {
    width: 550px;
    height: 550px
  }

  @media (min-width: 960px) {
    width: 250px;
    height: 250px
  }

  @media (min-width: 1150px) {
    width: 350px;
    height: 350px
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px
  }

`;
