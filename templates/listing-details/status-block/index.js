import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

function StatusBlock({status}) {
  if (!status) {
    return null;
  }

  return (
    <Typography variant="subtitle1" color="primary">
      {status}
    </Typography>
  );
}

StatusBlock.propTypes = {
  status: PropTypes.string,
};

export {StatusBlock as default};
