import React from 'react';
import PropTypes from 'prop-types';
import {isNil} from '@perchwell/utils';

import {NEIGHBORHOOD_LEGACY_IDS} from 'constants/legacy';
import {getNeighborhood} from 'rest-api';
import {Head} from 'components/head';
import ListingsTemplate from 'templates/listings';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({resolvedUrl}) {
  const legacyNeighborhood =
    NEIGHBORHOOD_LEGACY_IDS[removeQueryParams(resolvedUrl)];

  if (legacyNeighborhood) {
    const neighborhood = await getNeighborhood(legacyNeighborhood.id).then(
      (resp) => resp.data,
    );

    if (isNil(neighborhood)) {
      return {notFound: true};
    }

    return {
      props: {
        geographyIds: neighborhood.geography_ids ?? [],
        context: 'listing_search',
        title:
          neighborhood?.page_title ||
          `Townhouses for Sale in ${neighborhood.name}, NYC | Leslie J. Garfield`,
        description:
          neighborhood?.meta_description ||
          '137 townhouses for sale in New York, New York. See photos, floorplans and prices for the top real estate listings in Manhattan from Leslie J. Garfield',
        breadcrumb: [
          {
            item: resolvedUrl,
            name: neighborhood.name,
          },
        ],
      },
    };
  }

  return {notFound: true};
}

function ListingsPage({title, description, breadcrumb, ...restProps}) {
  return (
    <>
      <Head title={title} description={description} breadcrumb={breadcrumb} />
      <ListingsTemplate {...restProps} />
    </>
  );
}

ListingsPage.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export default ListingsPage;
