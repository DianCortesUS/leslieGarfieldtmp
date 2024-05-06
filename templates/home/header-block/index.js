import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {MediaSlider} from '@perchwell/components';
import {useHeaderHeight} from '@perchwell/hooks';
import useMediaQuery from "../../../hooks/useMediaQuery";
import Image from 'next/image';

import {Banner} from 'components/banner';

import {ContentContainer, Mask, Subtitle, HeaderBox} from './styled-components';

function HeaderBlock({title, subtitle, media}) {
  const headerHeight = useHeaderHeight();
  const isMobile = useMediaQuery(760);

  return (
    <HeaderBox position="relative" height={`calc(100vh - ${headerHeight}px)`}>
      <MediaSlider
        media={media}
        banner={Banner}
        arrows={false}
        swipe={false}
        pauseOnHover={false}
        pauseOnFocus={false}
        scrollable={false}
        speed={1000}
        autoplaySpeed={3750}
        lazyLoad="ondemand"
        fade
        autoplay
      />
      <Mask />
      <ContentContainer container justify="center" alignItems="center">
        <Box textAlign="center">
          {title && (
            <Box mb={3}>
              { isMobile ? (
                <Image
                  height={68}
                  width={330}
                  src="/assets/LogoBanner.png"
                  alt="Banner Logo"
                />
              ) : (
                <Image
                  height={123}
                  width={589}
                  src="/assets/LogoBanner.png"
                  alt="Banner Logo"
                />
              )}
            </Box>
          )}
          {subtitle && (
            <Box mb={2}>
              <Subtitle color="textSecondary">Selling the finest Townhomes across New York City</Subtitle>
            </Box>
          )}
        </Box>
      </ContentContainer>
    </HeaderBox>
  );
}

HeaderBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  media: PropTypes.object,
};

HeaderBlock.defaultProps = {
  media: {},
};

export {HeaderBlock as default};
