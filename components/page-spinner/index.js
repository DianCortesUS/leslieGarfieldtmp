import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Box, Fade} from '@material-ui/core';

import {Spinner} from 'components/spinner';

const FadeBox = styled(Box)`
  perspective: 500px;
`;

const fadeTimeout = {appear: 0, exit: 500};

function PageSpinner({visible, children}) {
  return (
    <>
      {visible && <Box width="100%" height="calc(100vh - 60px)"></Box>}
      <Fade in={visible} timeout={fadeTimeout}>
        <FadeBox
          width="100%"
          height="calc(100vh - 60px)"
          position="absolute"
          top={0}
          left={0}
          zIndex={1000}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="background.default"
        >
          <Spinner />
        </FadeBox>
      </Fade>
      {!visible && children}
    </>
  );
}

PageSpinner.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

PageSpinner.defaultProps = {
  visible: false,
};

export {PageSpinner};
