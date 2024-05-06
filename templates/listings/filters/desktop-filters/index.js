import React from 'react';
import {useRouter} from 'next/router';

import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';
import {
  NeighborhoodFilter,
  BathsFilter,
  PriceFilter,
  SqftFilter,
  TypeFilter,
} from 'components/filters';

import {
  FiltersCont,
  BoxContainer
} from './styled-components';
import { MagnifyIcon } from 'public/assets/Icons/icons';
import { BedsFilter } from 'components/filters/beds';

function DesktopFilters() {
  const router = useRouter();

  return (
    <BoxContainer bgcolor="background.filtersColor"
    >
      {/* Should be both on the top of block to prevent problem with z-index */}
      <FiltersCont>
        <div className='container-filters'>
        {router.query.city !== INTERNATIONAL_PROPERTY_KEY && (
            <NeighborhoodFilter />
          )}
          {/* <BedsFilter /> */}
          <BedsFilter />
          <BathsFilter />
          <PriceFilter />
          <SqftFilter />
          <div className='m-icon'>
              <TypeFilter />
              <MagnifyIcon />
            </div>
        </div>
      </FiltersCont>
    </BoxContainer>
  );
}

export {DesktopFilters};
