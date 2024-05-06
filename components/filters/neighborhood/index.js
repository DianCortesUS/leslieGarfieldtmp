import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@material-ui/core';
import {useDebounce} from 'use-debounce';
import {FILTER_TYPES} from '@perchwell/utils';

import {useNeighborhoods} from 'api';
import {useFilters} from 'context/filters';

import {Filter} from '../filter';

import {List} from './list';
import {ValueComponent} from './value-component';
import {MobileTitle} from './styled-components';

const NEIGHBORHOOD_FILTER_KEY = 'location.geography_ids';

function NeighborhoodFilter({viewMode}) {
  const {data: neighborhoods = []} = useNeighborhoods();
  const {filters, setFilter} = useFilters();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 150, {maxWait: 1000});

  const value = useMemo(() => filters?.[NEIGHBORHOOD_FILTER_KEY]?.value ?? [], [
    filters,
  ]);

  const checkedNeighborhoods = useMemo(() => {
    return neighborhoods.filter((neighborhood) =>
      neighborhood.geography_ids.some((id) => value.includes(id.toString())),
    );
  }, [neighborhoods, value]);

  const checkedNeighborhoodIds = useMemo(
    () => checkedNeighborhoods.map((neighborhood) => neighborhood.id),
    [checkedNeighborhoods],
  );

  const handleInputChange = useCallback(
    (event) => setSearchQuery(event.target.value),
    [],
  );
  const updateFilter = useCallback(
    (value) =>
      setFilter({type: FILTER_TYPES.IN, key: NEIGHBORHOOD_FILTER_KEY, value}),
    [setFilter],
  );

  const handleCheck = useCallback(
    (neighborhood) => {
      const newCheckedNeighborhoods = checkedNeighborhoodIds.includes(
        neighborhood.id,
      )
        ? checkedNeighborhoods.filter(({id}) => id !== neighborhood.id)
        : [...checkedNeighborhoods, neighborhood];

      const newValue = newCheckedNeighborhoods
        .map((neighborhood) =>
          neighborhood.geography_ids.map((id) => id.toString()),
        )
        .flat();

      updateFilter(
        newValue.filter((item, index) => newValue.indexOf(item) === index),
      );
    },
    [checkedNeighborhoods, checkedNeighborhoodIds, updateFilter],
  );

  const handleClearFilter = useCallback(
    (event) => {
      event.stopPropagation();
      setFilter({
        type: FILTER_TYPES.IN,
        key: NEIGHBORHOOD_FILTER_KEY,
        value: [],
      });
    },
    [setFilter],
  );

  const inputValue = useMemo(
    () =>
      neighborhoods
        .filter(({id}) => checkedNeighborhoodIds.includes(id))
        .map(({name}) => name)
        .join(', '),
    [neighborhoods, checkedNeighborhoodIds],
  );

  const hiddenNodes = useMemo(
    () =>
      neighborhoods
        .filter(
          (neighborhood) =>
            !neighborhood.name
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase()),
        )
        .map((neighborhood) => neighborhood.id),
    [neighborhoods, debouncedSearchQuery],
  );

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
            neighborhoods={neighborhoods}
            value={value}
            checkedIds={checkedNeighborhoodIds}
            handleCheck={handleCheck}
          />
        </Box>
      </>
    );
  }

  return (
    <Filter
      valueComponent={ValueComponent}
      searchQuery={searchQuery}
      value={inputValue}
      onChange={handleInputChange}
      handleClearFilter={handleClearFilter}

    >
      {hiddenNodes.length === neighborhoods.length ? (
        <Typography color="textPrimary" variant="subtitle1">
          Sorry, no places match that search.
        </Typography>
      ) : (
        <List
          neighborhoods={neighborhoods}
          value={value}
          hiddenNodes={hiddenNodes}
          handleCheck={handleCheck}
          checkedIds={checkedNeighborhoodIds}
        />
      )}
    </Filter>
  );
}

NeighborhoodFilter.propTypes = {
  viewMode: PropTypes.oneOf(['mobile', 'desktop']),
};

NeighborhoodFilter.defaultProps = {
  viewMode: 'desktop',
};

const Memo = React.memo(NeighborhoodFilter);

export {Memo as NeighborhoodFilter, NEIGHBORHOOD_FILTER_KEY};
