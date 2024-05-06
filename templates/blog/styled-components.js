import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';

import {linkStyles} from 'helpers/styles';

export const ImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  transition: all 0.25s;
  opacity: 0;
  background-color: ${({theme}) => theme.palette.common.black};
  z-index: 10;
`;

export const ImageBlock = styled(Box)`
  height: 100%;
  position: relative;
  &:hover {
    ${ImageMask} {
      opacity: 0.2;
    }
  }
`;

export const Title = styled(Typography)`
  font-size: 24px;
  ${linkStyles};
`;

export const BlogContainer = styled.div`
  background-color: #EBE9DD;
  margin-top: 90px;

  @media (max-width: 1280px) {
    margin-top: 60px;
  }

  .links-bar {
    margin-top: -95px;

    @media (max-width: 1024px) {
      display: none;
    }
  }

.journal-links-list {
  display: flex;
}

.journal-link-text {
  margin-right: 25px;
  font-family: sweet sans;
  font-size: 12px;
  text-transform: uppercase;
  weight: 500;
  line-height: 17.21px;
  cursor: pointer;
}

.posts-container {
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

.featured-post {
  width: 50%;
}

.posts-list {
  max-width: 50%;
}
`

export const BlogNavBar = styled.div`
  background-color: #FFF9F0;
  height: 125px;
  border-top: 1px solid #DEDCDD;
  border-bottom: 1px solid #DEDCDD;
  display: flex;
  align-items: center;
  justify-content: center;

  .journal-title-text {
    font-family: Copernicus;
    font-weight: 550;
    font-size: 28px;
    line-height: 42px;
  }
`