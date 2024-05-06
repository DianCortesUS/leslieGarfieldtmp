import React from 'react';
import {Box, useMediaQuery} from '@material-ui/core';

import {MobileFilters} from './mobile-filters';
import {DesktopFilters} from './desktop-filters';

function Filters() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  if (isTablet) {
    return (
      <Box mt={1} mb={1}>
        <MobileFilters />
      </Box>
    );
  }

  return <DesktopFilters />;
}

const Memo = React.memo(Filters);

export {Memo as Filters};
