import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import {
  AdornmentContainer,
  AdornmentTitleContainer,
  AdornmentTitle,
} from './styled-components';

const adornmentIconStyles = {
  width: '100%',
  height: '100%',
};

function AdornmentBlock({
  adornment: Adornment,
  adornmentTitle,
  children,
  bgcolor,
  ...otherProps
}) {
  return (
    <Box position="relative" bgcolor={bgcolor} {...otherProps}>
      {Adornment && (
        <AdornmentContainer bgcolor={bgcolor}>
          <Adornment style={adornmentIconStyles} />
        </AdornmentContainer>
      )}
      {adornmentTitle && (
        <AdornmentTitleContainer width="100%" align="center" mt="12px">
          <AdornmentTitle variant="overline">{adornmentTitle}</AdornmentTitle>
        </AdornmentTitleContainer>
      )}
      {children}
    </Box>
  );
}

AdornmentBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  adornment: PropTypes.elementType,
  adornmentTitle: PropTypes.string,
  bgcolor: PropTypes.string,
};

AdornmentBlock.defaultProps = {
  bgcolor: 'background.default',
};

export {AdornmentBlock};
