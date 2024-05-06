import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox as MuiCheckbox} from '@material-ui/core';

import {CheckboxIcon, CheckedCheckboxIcon} from './icons';

function Checkbox({checked, ...restProps}) {
  return (
    <MuiCheckbox
      checked={checked}
      color="primary"
      icon={<CheckboxIcon fontSize="small" />}
      checkedIcon={<CheckedCheckboxIcon fontSize="small" />}
      {...restProps}
    />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

const Memo = React.memo(Checkbox);

export {Memo as Checkbox};
