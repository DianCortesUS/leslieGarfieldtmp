import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@material-ui/core';

import {ClearButton} from './styled-components';

function NoDataBanner({onClearFiltersClick}) {
  return (
    <Box
      position="relative"
      bgcolor="background.darkGray"
      textAlign="center"
      pt={3}
      pb={3}
      pr={5}
      pl={5}
    >
      <Typography color="textSecondary" style={{fontStyle: 'italic'}}>
        Sorry, we could not find listing with this filters, select different
        parameters.
      </Typography>
      <ClearButton
        variant="caption"
        onClick={onClearFiltersClick}
        color="textSecondary"
      >
        Clear filters
      </ClearButton>
    </Box>
  );
}

NoDataBanner.propTypes = {
  onClearFiltersClick: PropTypes.func.isRequired,
};

export {NoDataBanner};
