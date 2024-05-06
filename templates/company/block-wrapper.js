import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import styled from 'styled-components';

import {ContentBlock} from 'components/content-block';

const Container = styled(ContentBlock)`
  ${({image = ''}) =>
    image &&
    `
      background-image: url(${image});
      background-repeat: no-repeat;
      background-position: center;
    `}
`;

function BlockWrapper({children, ...otherProps}) {
  return (
    <Container pt={8} pb={8} {...otherProps}>
      <Box>
        <Box maxWidth="760px" margin="0 auto">
          {children}
        </Box>
      </Box>
    </Container>
  );
}

BlockWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export {BlockWrapper};
