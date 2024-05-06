import React from 'react';

import {RangeFilter} from './range-filter';

const inputValueViewConfig = {
  min: {
    endAdornment: '+ Baths',
  },
  max: {
    startAdornment: '≤ ',
    endAdornment: ' Baths',
  },
  both: {
    endAdornment: ' Baths',
  },
};

function BathsFilter(props) {
  return (
    <RangeFilter
      title="Baths"
      filterKey="unit_details.full_baths"
      minLabel="Min. Baths"
      maxLabel="Max. Baths"
      errorMessage="Please enter a valid baths range"
      inputValueViewConfig={inputValueViewConfig}
      placeholder="Baths"
      pattern="^[0-9]+([.][0-9]{0,1})?$"
      {...props}
    />
  );
}

export {BathsFilter};
