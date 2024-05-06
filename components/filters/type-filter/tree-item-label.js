import React, {useCallback} from 'react';
import {PropTypes} from 'prop-types';
import {Box, Typography} from '@material-ui/core';

import {Checkbox} from '../checkbox';
import {FormControlLabel, TypeOption} from '../styled-components';

import {OPTION_VARIANTS} from './constants';

function TreeItemLabel({option, checked, handleCheck}) {
  const handleChange = useCallback(
    (event) => {
      event.preventDefault();
      handleCheck(option);
    },
    [handleCheck, option],
  );

  if (option.variant === OPTION_VARIANTS.TITLE) {
    return (
      <Box p="9px 0">
        <TypeOption>{option.name}</TypeOption>
      </Box>
    );
  }

  return (
    <FormControlLabel
      value={option}
      control={<Checkbox checked={checked} />}
      label={<TypeOption>{option.name}</TypeOption>}
      onChange={handleChange}
      labelPlacement="end"
    />
  );
}
TreeItemLabel.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
  }),
  checked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func,
};

TreeItemLabel.defaultProps = {
  handleCheck: () => {},
};

const Memo = React.memo(TreeItemLabel);

export {Memo as TreeItemLabel};
