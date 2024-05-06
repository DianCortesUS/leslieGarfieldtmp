import React from 'react';
import PropTypes from 'prop-types';
import {ROUTES} from 'constants/routes';
import {
  SUPPORTED_PROPERTIES,
  NEW_YORK_PROPERTY_KEY,
  INTERNATIONAL_PROPERTY_KEY,
} from 'constants/properties';
import {Head} from 'components/head';

import ListingsTemplate from '../../../templates/listings';

export function getServerSideProps({params, query}) {
  if (!SUPPORTED_PROPERTIES.includes(params.city)) {
    return {
      redirect: {
        destination: `${ROUTES.LISTINGS}/${NEW_YORK_PROPERTY_KEY}`,
      },
    };
  }

  const geographyIds = query.geographyIds ?? [];

  return {
    props: {
      city: params.city,
      geographyIds: Array.isArray(geographyIds) ? geographyIds : [geographyIds],
    },
  };
}

const mapCityMeta = {
  [INTERNATIONAL_PROPERTY_KEY]: {
    title: 'International Townhouses | Leslie J. Garfield',
    description:
      '77 international townhouses for sale through Beauchamp, our exclusive international affiliate. View photos, floorplans and prices from Leslie J. Garfield',
  },
  [NEW_YORK_PROPERTY_KEY]: {
    title: 'Townhouses for Sale in NYC | Leslie J. Garfield',
    description:
      '137 townhouses for sale in New York, New York. See photos, floorplans and prices for the top real estate listings in Manhattan from Leslie J. Garfield',
  },
};

function ListingsPage({city, ...restProps}) {
  return (
    <>
      <Head {...mapCityMeta[city]} />
      <ListingsTemplate
        context={
          city === INTERNATIONAL_PROPERTY_KEY
            ? 'listing_search'
            : 'listing_search_sales'
        }
        {...restProps}
      />
    </>
  );
}

ListingsPage.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ListingsPage;
