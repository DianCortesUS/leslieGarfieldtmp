import React, {useMemo, useReducer, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import {getValueByPath, filterList, FILTER_TYPES} from '@perchwell/utils';

import {useListings} from 'api';
import {FiltersContext} from 'context/filters';
import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';
import {NEIGHBORHOOD_FILTER_KEY} from 'components/filters';
import {PageSpinner} from 'components/page-spinner';

import {APARTMENT_VIEW_MODES} from './constants';
import {Filters} from './filters';
import {ApartmentsList} from './apartments-list-block';

const defaultFilterState = {};

function ListingsTemplate({geographyIds, context}) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState(APARTMENT_VIEW_MODES.GRID);
  const {isLoading: isListingsLoading, data: apartments = []} = useListings({
    query: {
      geography_ids:
        router.query.city === INTERNATIONAL_PROPERTY_KEY ? [3365] : [1278],
      context,
    },
  });

  const [filters, setFilter] = useReducer((state, action) => {
    if (action.key === 'default') {
      return defaultFilterState;
    }

    return {...state, [action.key]: action};
  }, defaultFilterState);

  const [sort, setSort] = useState({});

  /* Handle setting default filter values according to the location state */
  useEffect(() => {
    if (geographyIds.length) {
      setFilter({
        type: FILTER_TYPES.IN,
        key: NEIGHBORHOOD_FILTER_KEY,
        value: geographyIds.map((id) => id.toString()),
      });
    }
  }, [geographyIds]);

  const filterProviderValue = useMemo(() => ({filters, setFilter}), [
    filters,
    setFilter,
  ]);

  const filteredApartments = useMemo(() => filterList(apartments, filters), [
    apartments,
    filters,
  ]);


  const sortedApartments = useMemo(
    () => [
      ...filteredApartments.sort((a, b) => {
        const aValue = getValueByPath(a, sort.field);
        const bValue = getValueByPath(b, sort.field);

        return sort.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }),
    ],
    [filteredApartments, sort],
  );

  return (
    <PageSpinner visible={isListingsLoading}>
      <FiltersContext.Provider value={filterProviderValue}>
        <Filters />
        <ApartmentsList
          apartments={sortedApartments}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortCallback={setSort}
          setFilter={setFilter}
        />
      </FiltersContext.Provider>
    </PageSpinner>
  );
}

ListingsTemplate.propTypes = {
  geographyIds: PropTypes.array,
  context: PropTypes.string,
};

ListingsTemplate.defaultProps = {
  geographyIds: [],
  context: 'listing_search_sales',
};

export {ListingsTemplate as default};
