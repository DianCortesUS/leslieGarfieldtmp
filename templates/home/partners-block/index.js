import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';

import {ParsedText, Logo} from '@perchwell/components';

import BlockWrapper from '../block-wrapper';

function PartnersBlock({title, subtitle, list}) {
  return (
    <BlockWrapper textAlign="center">
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
      {list.length > 0 && (
        <Box mt={8}>
          <Grid container justify="center">
            <Grid container item xs={10}>
              {list.map((image, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Logo src={image} alt="partner" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </BlockWrapper>
  );
}

PartnersBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

PartnersBlock.defaultProps = {
  list: [],
};

export {PartnersBlock as default};
