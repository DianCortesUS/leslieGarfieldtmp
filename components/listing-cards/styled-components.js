import styled, {css} from 'styled-components';
import {Grid} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';
import {ImageBox} from 'components/image-box';

export const ImageGrid = styled(Grid)`
  height: 50% !important;
`;

export const Image = styled(ImageBox)`
  
`;

const cardContainerStyles = css`
  transition: all 0.1s ease;
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: ${({theme}) => `${theme.spacing(1)}px`};
  background-color: transparent;
  text-align: left;
  ${cardContainerStyles};

  .image-properties {
    width: 100%;
    max-height: 228px;
    object-fit: cover;
  }

`;

export const InfoGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;

  .address-text {
    font-size: 13px;
  }

  .neighborhood-text {
    font-size: 13px;
  }

  .price-text {
    font-size: 14px;
    font-family: sweet sans;
    font-weight: bold;
  }

  .sqft-text {
    font-size: 14px;
    font-family: sweet sans;
    font-weight: bold;
  }
`;

export const StatusGrid = styled(Grid)`
  padding-left: 10px;
  padding-right: 15px;
`;

export const Address = styled(ParsedText)`
  font-weight: bold;
  font-style: italic;
`;

export const MapCardContainer = styled.a`
  display: block;
  width: 280px;
`;

export const MapImage = styled(Image)`
  height: 155px;
`;

export const MapInfoGrid = styled(Grid)`
  padding-left: ${({theme}) => `${theme.spacing(1)}px`};
`;

export const MapStatusGrid = styled(Grid)`
  padding-left: ${({theme}) => `${theme.spacing(1)}px`};
  padding-right: ${({theme}) => `${theme.spacing(1)}px`};
`;
