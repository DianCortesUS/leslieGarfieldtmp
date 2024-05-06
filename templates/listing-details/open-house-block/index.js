import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

function OpenHouseBlock({openHouse}) {
  if (!openHouse) {
    return null;
  }

  return (
    <Typography variant="subtitle1" color="primary">
      {openHouse}
    </Typography>
  );
}

OpenHouseBlock.propTypes = {
  openHouse: PropTypes.string,
};

export {OpenHouseBlock as default};
