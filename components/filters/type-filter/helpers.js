import isEqual from 'lodash/isEqual';

import {PROPERTY_TYPE_FILTER_GROUP_ID} from './constants';

function isOptionChecked(option, filters) {
  return !!(filters?.[option.filter_group_id]?.rules ?? []).find((rule) =>
    isEqual(rule, option.rule),
  );
}

function getOptionData(option, filter = {}) {
  const {labels = [], rules = []} = filter;
  const isOptionExists = rules.find((rule) => isEqual(rule, option.rule));

  const commonData = {
    key: option.filter_group_id,
    type: option.type,
  };

  if (isOptionExists) {
    return {
      ...commonData,
      labels: labels.filter((label) => label !== option.name),
      rules: rules.filter((rule) => !isEqual(rule, option.rule)),
    };
  }

  return {
    ...commonData,
    labels: [...labels, option.name],
    rules: [...rules, option.rule],
  };
}

const hasLabels = (filter) => (filter?.labels ?? []).length > 0;

function isValidTypeFilter(filter) {
  return filter?.key === PROPERTY_TYPE_FILTER_GROUP_ID && hasLabels(filter);
}

export {isOptionChecked, getOptionData, isValidTypeFilter};
