import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';
import { ContentBlock } from 'components/content-block';
import { Avatar } from 'components/avatar';

export const EmployeeName = styled(Typography)`
  transition: all 0.3s;
  font-family: Copernicus;
  font-size: 28px;
`;

export const AgentCardPhone = styled(Typography)`
font-family: Copernicus;
font-size: 13px;
font-style: italic;

`;

export const DirectorsPhone = styled(Typography)`
font-family: Copernicus;
font-size: 13px;
font-style: italic;
`;

export const AvatarBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExternalLink = styled.a`
`;

export const AdvisorsText = styled(ContentBlock)`
display: flex;
justify-content: center;
align-items: center;

  .advisors-text {
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    padding: 100px 0;

    @media (min-width: 370px) {
      width: 90%;
    }

    @media (min-width: 660px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 60%;
    }

    @media (min-width: 1280px) {
      width: 35%;
    }

    @media (min-width: 1530px) {
      width: 30%;
    }
  }
`;

export const AgentsContainer = styled.div`
margin-top: 90px;

@media (max-width: 1280px) {
  margin-top: 0;
}
`;

export const DirectorsAvatar = styled(Avatar)`
width: 225px;
height: 225px;

  @media (min-width: 370px) {
    width: 330px;
    height: 330px;
  }

  @media (min-width: 600px) {
    width: 225px;
    height: 225px;
  }

  @media (min-width: 850px) {
    width: 295px;
    height: 295px;
  }

  @media (min-width: 1280px) {
    width: 380px;
    height: 380px;
  }
`;

export const AgentsCardsAvatar = styled(Avatar)`

@media (min-width: 370px) {
  width: 350px;
  height: 350px
}

@media (min-width: 600px) {
  width: 220px;
  height: 220px
}

@media (min-width: 720px) {
  width: 280px;
  height: 280px
}

@media (min-width: 1024px) {
  width: 380px;
  height: 380px
}

`;
