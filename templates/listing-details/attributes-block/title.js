import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography, Grid} from '@material-ui/core';

function Title({text, icon: Icon}) {
  return (
    <Grid container>
      <Box component="span" mr={1}>
        <Icon />
      </Box>
      <Typography component="span" variant="body2" display="block" noWrap>
        {text}
      </Typography>
    </Grid>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export {Title as default};
