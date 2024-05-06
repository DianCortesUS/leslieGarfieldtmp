import {FILTER_TYPES} from '@perchwell/utils';

export const PROPERTY_TYPE_FILTER_GROUP_ID = 'property_type_filter';

export const OPTION_VARIANTS = {
  TITLE: 'title',
  ITEM: 'item',
};

const SINGLE_FAMILY_PROPERTY_TYPE = 'Single-Family Townhouse';
const MULTI_FAMILY_PROPERTY_TYPE = 'Multi-Family Townhouse';
const COMMERCIAL_PROPERTY_TYPE = 'Commercial';
const MIX_USED_PROPERTY_TYPE = 'Mixed-Use Townhouse';

const SINGLE_FAMILY_PROPERTY_TYPE_FILTER = {
  id: '11',
  name: 'Single-Family',
  type: FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: SINGLE_FAMILY_PROPERTY_TYPE,
    type: FILTER_TYPES.EQUAL,
  },
};

const MULTI_FAMILY_PROPERTY_TYPE_FILTER = {
  id: '12',
  name: 'Multi-Family',
  type: FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: MULTI_FAMILY_PROPERTY_TYPE,
    type: FILTER_TYPES.EQUAL,
  },
};

const COMMERCIAL_PROPERTY_TYPE_FILTER = {
  id: '13',
  name: 'Commercial/Mixed-Use',
  type: FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: [COMMERCIAL_PROPERTY_TYPE, MIX_USED_PROPERTY_TYPE],
    type: FILTER_TYPES.IN,
  },
};

const NON_TOWNHOUSE_PROPERTY_TYPE_FILTER = {
  id: '14',
  name: 'Apartments',
  type: FILTER_TYPES.GROUP,
  filter_group_id: PROPERTY_TYPE_FILTER_GROUP_ID,
  variant: OPTION_VARIANTS.ITEM,
  rule: {
    key: 'unit_details.property_type',
    value: [
      SINGLE_FAMILY_PROPERTY_TYPE,
      MULTI_FAMILY_PROPERTY_TYPE,
      COMMERCIAL_PROPERTY_TYPE,
      MIX_USED_PROPERTY_TYPE,
    ],
    type: FILTER_TYPES.NIN,
  },
};

export const PROPERTY_TYPE_FILTER = {
  id: '1',
  name: 'Property Type',
  variant: OPTION_VARIANTS.TITLE,
  children: [
    SINGLE_FAMILY_PROPERTY_TYPE_FILTER,
    MULTI_FAMILY_PROPERTY_TYPE_FILTER,
    COMMERCIAL_PROPERTY_TYPE_FILTER,
    NON_TOWNHOUSE_PROPERTY_TYPE_FILTER,
  ],
};

export const TREE_OPTIONS = [PROPERTY_TYPE_FILTER];
