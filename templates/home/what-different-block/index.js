import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {ROUTES} from 'constants/routes';
import {BuildingAdornmentIcon} from 'icons';
import {Button} from 'components/buttons/button';

import BlockWrapper from '../block-wrapper';

function WhatDifferentBlock({title, subtitle}) {
  return (
    <BlockWrapper
      textAlign="center"
      bgcolor="background.lightPrimary"
      adornment={BuildingAdornmentIcon}
    >
      {title && (
        <Box mt={2} mb={2}>
          <ParsedText variant="h3">{title}</ParsedText>
        </Box>
      )}
      {subtitle && (
        <Box mb={2}>
          <ParsedText variant="body2">{subtitle}</ParsedText>
        </Box>
      )}
      <Box mt={4}>
        <Button to={ROUTES.COMPANY}>Continue Reading...</Button>
      </Box>
    </BlockWrapper>
  );
}

WhatDifferentBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export {WhatDifferentBlock as default};
