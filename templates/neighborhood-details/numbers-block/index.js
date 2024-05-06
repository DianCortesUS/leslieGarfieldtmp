import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import styled from 'styled-components';

import {ContentBlock} from 'components/content-block';

import {Title} from '../styled-components';

const Image = styled.img`
  width: 100%;
`;
function NumbersBlock({image}) {
  const image_url = useMemo(() => {
    if (typeof image === 'string') {
      return image;
    }
    const {content_url = null} = image;
    return content_url;
  }, [image]);

  if (image_url === null) {
    return null;
  }

  return (
    <ContentBlock pt={8} pb={8} bgcolor="background.header">
      <Box>
        <Title variant="body2" align="center">
          BY THE NUMBERS
        </Title>
        <Box mt={8}>
          <Image src={image_url} />
        </Box>
      </Box>
    </ContentBlock>
  );
}

NumbersBlock.propTypes = {
  image: PropTypes.string.isRequired,
};

export {NumbersBlock};
