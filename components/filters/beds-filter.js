import React from 'react';

import {RangeFilter} from './range-filter';

const inputValueViewConfig = {
  min: {
    endAdornment: '+ Beds',
  },
  max: {
    startAdornment: '≤ ',
    endAdornment: ' Beds',
  },
  both: {
    endAdornment: ' Beds',
  },
};

function BedsFilter(props) {
  return (
    <RangeFilter
      title="Beds"
      filterKey="unit_details.beds"
      minLabel="Min. Beds"
      maxLabel="Max. Beds"
      errorMessage="Please enter a valid beds range" 
      placeholder="Beds"
      inputValueViewConfig={inputValueViewConfig}
      {...props}
    />
  );
}

export {BedsFilter};
