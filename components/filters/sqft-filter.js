import React from 'react';

import {RangeFilter} from './range-filter';

const inputValueViewConfig = {
  min: {
    endAdornment: '+ SQFT',
  },
  max: {
    startAdornment: '≤ ',
    endAdornment: ' SQFT',
  },
  both: {
    endAdornment: ' SQFT',
  },
};

function SqftFilter(props) {
  return (
    <RangeFilter
      title="Square Feet"
      filterKey="unit_details.sqft"
      minLabel="Min. Sq. Ft."
      maxLabel="Max. Sq. Ft."
      errorMessage="Please enter a valid SQFT range"
      placeholder="Square Feet"
      inputValueViewConfig={inputValueViewConfig}
      {...props}
    />
  );
}

export {SqftFilter};
