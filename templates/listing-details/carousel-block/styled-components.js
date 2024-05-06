import styled from 'styled-components';
import {Slider} from '@perchwell/components';
import {PrevIcon, NextIcon} from '@perchwell/components/build/slider';
import {Image} from '@perchwell/components/build/image-box';
import {ImageBox as DefaultImageBox} from 'components/image-box';

export const Carousel = styled(Slider)`
  ${PrevIcon} {
    left: 0;
  }
  ${NextIcon} {
    right: 0;
  }
`;

export const ImageBox = styled(DefaultImageBox)`
  cursor: pointer;
  ${Image} {
    background-size: cover;
  }
`;
