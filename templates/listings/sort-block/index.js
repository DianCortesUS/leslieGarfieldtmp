import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {SORT_OPTIONS, PRICE_DESC_OPTION_KEY} from './constants';
import {Container, Select, SelectItem} from './styled-components';

const selectMenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
};

function SortBlock({sortCallback}) {
  const [value, setValue] = useState(PRICE_DESC_OPTION_KEY);

  useEffect(() => {
    sortCallback(SORT_OPTIONS[value]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setValue(value);
    sortCallback(SORT_OPTIONS[value]);
  };

  return (
    <Container container wrap="nowrap" alignItems="center">
      <div className='sort-by-container'>
      <span display="block" className='sort-by-text'><strong>SORT BY</strong></span>
      <Select
        value={value}
        onChange={handleChange}
        MenuProps={selectMenuProps}
        disableUnderline
      >
        {Object.keys(SORT_OPTIONS).map((optionKey) => (
          <SelectItem key={optionKey} value={optionKey}>
            {SORT_OPTIONS[optionKey].label}
          </SelectItem>
        ))}
      </Select>
      </div>
    </Container>
  );
}

SortBlock.propTypes = {
  sortCallback: PropTypes.func.isRequired,
};

export {SortBlock as default};
export * from './constants';
