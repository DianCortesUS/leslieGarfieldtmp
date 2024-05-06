import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {ServiceBlock} from '../styled-components';

function QuoteBlock({quote, source}) {
  return (
    <ServiceBlock>
      <Grid container justify="center">
        <Grid item container xs={12} sm={8}>
          <Box mb={4}>
            <ParsedText variant="h2">{quote}</ParsedText>
          </Box>
          <ParsedText variant="subtitle2" color="primary">
            {source}
          </ParsedText>
        </Grid>
      </Grid>
    </ServiceBlock>
  );
}

QuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export {QuoteBlock};
