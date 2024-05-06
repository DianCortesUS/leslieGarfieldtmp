import React from 'react';
import PropTypes from 'prop-types';
import {useHeaderHeight} from '@perchwell/hooks';
import {ImageBox} from 'components/image-box';

import {ROUTES} from 'constants/routes';

import {ErrorTitle, ErrorContainer, ErrorSubtitle, ErrorText, ErrorButton, ErrorComponent} from './styled-components';

function ErrorFallback({content}) {
  const headerHeight = useHeaderHeight();

  const {background_image} = content?.components?.header?.media ?? {};

  return (
    <ErrorComponent>
      <ImageBox
      image={background_image?.content_url}
      height={`calc(100vh - ${headerHeight}px)`}
      withFallback={false}
    >
      <ErrorContainer>
        <ErrorTitle>
          404
        </ErrorTitle>
        <ErrorSubtitle>
          Page Not Found
        </ErrorSubtitle>
        <ErrorText>
          This page appears to have been vacated.
        </ErrorText>
        <ErrorButton to={ROUTES.LISTINGS}>
          FIND A HOME
        </ErrorButton>
      </ErrorContainer>
    </ImageBox>
    </ErrorComponent>
  );
}

ErrorFallback.propTypes = {
  content: PropTypes.object,
};

export {ErrorFallback};
