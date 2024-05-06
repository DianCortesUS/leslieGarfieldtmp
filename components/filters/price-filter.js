import React from 'react';

import {RangeFilter} from './range-filter';

const inputValueViewConfig = {
  min: {
    startAdornment: '$',
    endAdornment: '+',
  },
  max: {
    startAdornment: '≤ $',
  },
  both: {
    min: {
      startAdornment: '$',
    },
    max: {
      startAdornment: '$',
    },
  },
};

function PriceFilter(props) {
  return (
    <RangeFilter
      title="Price"
      filterKey="listing_details.current_price"
      minLabel="Min. Price"
      maxLabel="Max. Price"
      errorMessage="Please enter a valid price range"
      startAdornment="$"
      placeholder="Price Range"
      inputValueViewConfig={inputValueViewConfig}
      {...props}
    />
  );
}

export {PriceFilter};
