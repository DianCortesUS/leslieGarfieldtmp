import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import {ContentBlock} from 'components/content-block';
import {AdornmentBlock} from 'components/adornment-block';

import {Container} from './styled-components';

function BlockWrapper({adornment, bgcolor, children, ...otherProps}) {
  return (
    <AdornmentBlock adornment={adornment} bgcolor={bgcolor}>
      <ContentBlock component={Container} {...otherProps}>
        <Box>{children}</Box>
      </ContentBlock>
    </AdornmentBlock>
  );
}

BlockWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  adornment: PropTypes.elementType,
  bgcolor: PropTypes.string,
};

export {BlockWrapper as default};
