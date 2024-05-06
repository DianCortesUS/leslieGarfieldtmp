import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';
import {NeighborhoodType} from '@perchwell/domain';
import {MEDIA_TYPES} from '@perchwell/components';

import {useListings} from 'api';
import {Head} from 'components/head';
import {Banner} from 'components/banner';
import {Spinner} from 'components/spinner';
import truncateString from 'helpers/truncate-string';

import {DescriptionBlock} from './description-block';
import {LocationBlock} from './location-block';
import {NumbersBlock} from './numbers-block';
import {ListingBlock} from './listing-block';
import {PublicationBlock} from './publication-block';
import {getNumbersImage} from './helpers';
import {NeighborhoodsDetailContent } from './styled-components';
import { PageHeader } from 'components/page-header';

function NeighborhoodDetailsTemplate({neighborhood, breadcrumb}) {
  const {isLoading: isListingsLoading, data: apartments = []} = useListings({
    query: {
      geography_ids: (neighborhood?.geography_ids ?? []).join(','),
      context: 'in_neighborhood',
    },
    config: {
      enabled: neighborhood?.id,
    },
  });

  const numbersImage = useMemo(() => getNumbersImage(neighborhood), [
    neighborhood,
  ]);

  return (
    <NeighborhoodsDetailContent>
      <Head
        title={
          neighborhood?.page_title || `${neighborhood?.name} | Townhouse Guide`
        }
        description={
          neighborhood?.meta_description ||
          truncateString(neighborhood?.detail_description)
        }
        breadcrumb={breadcrumb}
      />
      <PageHeader>
        {neighborhood.name}
      </PageHeader>
      <Banner
        type={MEDIA_TYPES.IMAGE}
        contentURL={neighborhood.images?.[0]}
      />
      <DescriptionBlock description={neighborhood.detail_description} />
      <Element name="location">
        <LocationBlock
          center={[
            neighborhood.centroid_longitude,
            neighborhood.centroid_latitude,
          ]}
          geometry={neighborhood.geometry}
          apartments={apartments}
        />
      </Element>
      {numbersImage && (
        <Element name="numbers">
          <NumbersBlock image={numbersImage} />
        </Element>
      )}
      <Element name="properties">
        {isListingsLoading ? (
          <Spinner />
        ) : (
          <ListingBlock
            neighborhood={neighborhood}
            apartments={apartments.slice(0, 3)}
          />
        )}
      </Element>
      <Element name="news">
        <PublicationBlock neighborhood={neighborhood} />
      </Element>
    </NeighborhoodsDetailContent>
  );
}

NeighborhoodDetailsTemplate.propTypes = {
  neighborhood: NeighborhoodType,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export {NeighborhoodDetailsTemplate as default};
