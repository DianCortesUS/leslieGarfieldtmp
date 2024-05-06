import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {ImageBox} from '../styled-components';

function SubInfoBlock({description, image}) {
  return (
    <Grid container justify="space-between" component="section">
      <Grid item container xs={12} md={6}>
        <ImageBox image={image} width="100%" pt="74.5%" />
      </Grid>
      <Grid item container direction="column" xs={12} md={4}>
        <ParsedText variant="subtitle1">{description}</ParsedText>
      </Grid>
    </Grid>
  );
}

SubInfoBlock.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export {SubInfoBlock};
