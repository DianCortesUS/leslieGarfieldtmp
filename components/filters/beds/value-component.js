import React from 'react';
import PropTypes from 'prop-types';

import {
  OutlinedInput,
} from './styled-components';

function ValueComponent({
  isDropdownOpen,
  searchQuery,
  value,
  handleClearFilter,
  ...restProps
}) {
  return (
    <OutlinedInput
      placeholder="Beds"
      style={{ fontFamily: "sweet sans", fontSize: "13px" }}
      value={isDropdownOpen ? searchQuery : value}
      fullWidth
      {...restProps}
    />
  );
}

ValueComponent.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClearFilter: PropTypes.func.isRequired,
};

const Memo = React.memo(ValueComponent);

export {Memo as ValueComponent};
