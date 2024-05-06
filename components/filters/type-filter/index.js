import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography} from '@material-ui/core';
import {getExpandedIds, normalizeTree, hasChildren} from '@perchwell/utils';

import {useFilters} from 'context/filters';

import {Filter} from '../filter';
import {TextValueComponent} from '../text-value-component';
import {TreeView, MobileTypeFilterTitle} from '../styled-components';

import {PROPERTY_TYPE_FILTER} from './constants';
import {TreeItemLabel} from './tree-item-label';
import {TreeItems} from './tree-items';
import {isOptionChecked, getOptionData, isValidTypeFilter} from './helpers';

function TypeFilter({viewMode}) {
  const {filters, setFilter} = useFilters();
  const expandedNodeIds = useMemo(
    () => getExpandedIds(normalizeTree({tree: [PROPERTY_TYPE_FILTER]})),
    [],
  );

  const handleCheck = useCallback(
    (option) => {
      if (hasChildren(option)) {
        return;
      }

      const optionData = getOptionData(
        option,
        filters?.[option.filter_group_id],
      );

      setFilter(optionData);
    },
    [filters, setFilter],
  );

  const inputValue = useMemo(
    () =>
      Object.keys(filters)
        .filter((key) => isValidTypeFilter(filters[key]))
        .map((key) => filters[key]?.labels)
        .flat()
        .join(', '),
    [filters],
  );

  if (viewMode === 'mobile') {
    return (
      <>
        <MobileTypeFilterTitle gutterBottom>
          <span className='mobile-filter-title'>{PROPERTY_TYPE_FILTER.name}</span>
        </MobileTypeFilterTitle>
        <Grid component="section" container>
          {PROPERTY_TYPE_FILTER.children.map((listingFilterOption) => (
            <Grid item xs={12} key={listingFilterOption.id}>
              <TreeItemLabel
                option={listingFilterOption}
                checked={isOptionChecked(listingFilterOption, filters)}
                handleCheck={handleCheck}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <Filter
      maxHeight="400px"
      valueComponent={TextValueComponent}
      value={inputValue}
      placeholder="Property Type"
      popperMinWidth="275px"
    >
      <TreeView expanded={expandedNodeIds}>
        <TreeItems
          options={[...PROPERTY_TYPE_FILTER.children]}
          filters={filters}
          handleCheck={handleCheck}
        />
      </TreeView>
    </Filter>
  );
}

TypeFilter.propTypes = {
  viewMode: PropTypes.oneOf(['mobile', 'desktop']),
};

TypeFilter.defaultProps = {
  viewMode: 'desktop',
};

const Memo = React.memo(TypeFilter);

export {Memo as TypeFilter};
export * from './constants';
