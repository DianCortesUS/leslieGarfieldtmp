import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@material-ui/core';
import {useDebounce} from 'use-debounce';
import {FILTER_TYPES} from '@perchwell/utils';

import {useListing, useNeighborhoods} from 'api';
import {useFilters} from 'context/filters';

import {Filter} from '../filter';

import {List} from './list';
import {ValueComponent} from './value-component';
import {MobileTitle} from './styled-components';

const APARTMENT_FILTER_KEY = 'unit_details.beds';

function BedsFilter({viewMode}) {
  const {data: neighborhoods = []} = useNeighborhoods();
  const {data: apartments = []} = useListing();
  const {filters, setFilter} = useFilters();
  // const [searchQuery, setSearchQuery] = useState('');
  // const [debouncedSearchQuery] = useDebounce(searchQuery, 150, {maxWait: 1000});

  const value = useMemo(() => filters?.[APARTMENT_FILTER_KEY]?.value ?? [], [
    filters,
  ]);
  console.log(value);
  const checkedApartments = useMemo(() => {
    return apartments.filter((apartment) =>
      apartment.unit_details.beds === value
    );
  }, [apartments, value]);

  const checkedApartmentsIds = useMemo(
    () => checkedApartments.map((apartment) => console.log(apartment)),
    [checkedApartments],
  );

  const handleInputChange = useCallback(
    (event) => handleCheckBeds(event.target.value),
    [],
  );
  const updateFilter = useCallback(
    (value) =>
      setFilter({type: FILTER_TYPES.IN, key: APARTMENT_FILTER_KEY, value}),
    [setFilter],
  );

  const handleCheck = useCallback(
    (beds) => {
      const newCheckedApartments = checkedApartmentsIds.includes(
        beds.id,
      )
        ? checkedApartmentsIds.filter(({id}) => id !== beds.id)
        : [...checkedApartmentsIds, beds];
      
        console.log(checkedApartmentsIds);
      const newValue = newCheckedApartments
        .map((beds) =>
         beds.id.toString(),
        )
        .flat();
        console.log(beds);

      updateFilter(
        newValue.filter((item, index) => newValue.indexOf(item) === index),
      );
      // apartments.filter((beds) => beds.unit_details.beds === beds.name);
    },
    [checkedApartmentsIds, updateFilter],
  );

  const handleCheckBeds = (beds) => {
    // switch (beds) {
    //   case '1': 
    //     apartments.filter((beds) => beds.unit_details.beds === 1);
    //     break;
    //   case '2':
    //     apartments.filter((beds) => beds.unit_details.beds === 2);
    //     break;
    //   case '3':
    //     apartments.filter((beds) => beds.unit_details.beds === 3);
    //     break;
    //   case '4':
    //     apartments.filter((beds) => beds.unit_details.beds === 4);
    //     break;
    //   case '5+':
    //     apartments.filter((beds) => beds.unit_details.beds >= 5);
    //     break;
    // }
  }

  const handleClearFilter = useCallback(
    (event) => {
      event.stopPropagation();
      setFilter({
        type: FILTER_TYPES.IN,
        key: APARTMENT_FILTER_KEY,
        value: [],
      });
    },
    [setFilter],
  );

  const inputValue = useMemo(
    () =>
      apartments
        .filter(({id}) => checkedApartmentsIds.includes(id))
        .map(({name}) => name)
        .join(', '),
    [apartments, checkedApartmentsIds],
  );

  // const hiddenNodes = useMemo(
  //   () =>
  //     neighborhoods
  //       .filter(
  //         (neighborhood) =>
  //           !neighborhood.name
  //             .toLowerCase()
  //             .includes(debouncedSearchQuery.toLowerCase()),
  //       )
  //       .map((neighborhood) => neighborhood.id),
  //   [neighborhoods, debouncedSearchQuery],
  // );

  const beds = [
    {
      name: 1,
      id: 1,
    },
    {
      name: 2,
      id: 2,
    },
    {
      name: 3,
      id: 3,
    },
    {
      name: 4,
      id: 4,
    },
    {
      name: '5+',
      id: 5,
    }
  ]

  if (viewMode === 'mobile') {
    return (
      <>
        {inputValue ? (
          <MobileTitle noWrap gutterBottom>
            Places:{' '}
            <Typography component="span" color="primary" noWrap>
              {inputValue}
            </Typography>
          </MobileTitle>
        ) : (
          <Typography gutterBottom>Places</Typography>
        )}
        <Box maxHeight="250px" overflow="auto">
          <List
            items={numbers}
            value={value}
            checkedIds={checkedApartmentsIds}
            handleCheck={handleCheck}
          />
        </Box>
      </>
    );
  }

  // Universal componetn Filter
  // Make search input optional

  return (
    <Filter
      valueComponent={ValueComponent}
      value={inputValue}
      onChange={handleInputChange}
      handleClearFilter={handleClearFilter}
    >
        <List
          items={beds} //Items
          value={value}
          // hiddenNodes={hiddenNodes}
          handleCheck={handleCheck}
          checkedIds={checkedApartmentsIds}
        />
    </Filter>
  );
}

BedsFilter.propTypes = {
  viewMode: PropTypes.oneOf(['mobile', 'desktop']),
};

BedsFilter.defaultProps = {
  viewMode: 'desktop',
};

const Memo = React.memo(BedsFilter);

export {Memo as BedsFilter, APARTMENT_FILTER_KEY};
