import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {MediaViewer, MEDIA_TYPES} from '@perchwell/components';

import {Carousel, ImageBox} from './styled-components';

function CarouselBlock({carouselState, images, setCarouselState}) {
  const media = useMemo(
    () =>
      images.map((image) => {
        const content_url = image?.content_url ?? image;
        return (
          {
            contentURL: content_url,
            type: MEDIA_TYPES.IMAGE,
          })
      }),
    [images],
  );

  return (
    <Box mb={4}>
      <MediaViewer
        open={carouselState.open}
        onClose={() => setCarouselState({open: false})}
        media={media}
        linkImages={true}
        initialSlide={carouselState.slide}
      />
      <Carousel
        slidesToShow={1}
        beforeChange={(_, newIndex) => setCarouselState({slide: newIndex})}
      >
        {images.map((image, index) => (
          <ImageBox
            key={index}
            withFallback={false}
            image={image}
            height={{xs: '246px', md: '600px'}}
            bgcolor="background.cream"
            onClick={() => setCarouselState({open: true, slide: index})}
          />
        ))}
      </Carousel>
    </Box>
  );
}

CarouselBlock.propTypes = {
  carouselState: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    slide: PropTypes.number.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  setCarouselState: PropTypes.func.isRequired,
};

CarouselBlock.defaultProps = {
  images: [],
};

export {CarouselBlock as default};
