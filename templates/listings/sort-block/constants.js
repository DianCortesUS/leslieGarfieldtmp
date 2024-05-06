export const PRICE_DESC_OPTION_KEY = 'price-desc';
export const PRICE_ASC_OPTION_KEY = 'price-asc';
export const SQFT_DESC_OPTION_KEY = 'sqft-desc';
export const SQFT_ASC_OPTION_KEY = 'sqft-asc';

export const SORT_OPTIONS = {
  [PRICE_DESC_OPTION_KEY]: {
    key: PRICE_DESC_OPTION_KEY,
    label: 'Price - Highest to Lowest',
    field: 'listing_details.current_price',
    direction: 'desc',
  },
  [PRICE_ASC_OPTION_KEY]: {
    key: PRICE_ASC_OPTION_KEY,
    label: 'Price - Lowest to Highest',
    field: 'listing_details.current_price',
    direction: 'asc',
  },
  [SQFT_DESC_OPTION_KEY]: {
    key: SQFT_DESC_OPTION_KEY,
    label: 'Sq. Ft. - Highest to Lowest',
    field: 'unit_details.sqft',
    direction: 'desc',
  },
  [SQFT_ASC_OPTION_KEY]: {
    key: SQFT_ASC_OPTION_KEY,
    label: 'Sq. Ft. - Lowest to Highest',
    field: 'unit_details.sqft',
    direction: 'asc',
  },
};
