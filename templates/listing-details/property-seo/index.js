import React from 'react';
import {useRouter} from 'next/router';
import {ApartmentType} from '@perchwell/domain';

import {Head} from 'components/head';
import {
  AgentJsonLd,
  EventJsonLd,
  PlaceJsonLd,
  ProductJsonLd,
  ResidenceJsonLd,
} from 'jsonld';
import truncateString from 'helpers/truncate-string';
import {cleanAddress} from 'helpers/property';

import {getPropertyMeta} from '../helpers';

function PropertySeo({property}) {
  const router = useRouter();
  const {title, description} = React.useMemo(() => getPropertyMeta(property), [
    property,
  ]);
  const {
    location = {},
    listing_details = {},
    open_houses = [],
    custom_attributes = {},
  } = property;
  const address = cleanAddress(location.address_with_unit);

  const {page_title = '', meta_description = ''} = custom_attributes;

  return (
    <>
      <Head
        title={page_title || title}
        description={meta_description || description}
        breadcrumb={[
          {
            item: router.asPath,
            name: address,
            image: property.media.large_image_list[0],
          },
        ]}
      />
      {property.agents.map((agent) => (
        <AgentJsonLd
          key={agent.email}
          name={`${agent.first_name} ${agent.last_name}`}
          email={agent.email}
          phone={agent.phone}
          keyOverride={agent.email}
        />
      ))}
      {open_houses.map((openHouse, index) => (
        <EventJsonLd
          key={index}
          name="Open House"
          startDate={openHouse.start_time}
          endDate={openHouse.end_time}
          image={property.media.large_image_list[0]}
          description={truncateString(listing_details.description)}
          address={{
            streetAddress: address,
            locality: location.city,
            region: location.state,
            postalCode: location.zip,
          }}
          keyOverride={index}
        />
      ))}
      <PlaceJsonLd
        name={address}
        address={{
          streetAddress: address,
          locality: location.city,
          region: location.state,
          postalCode: location.zip,
        }}
        geo={location.coordinates}
        image={property.media.large_image_list}
      />
      <ProductJsonLd
        name={`${address}, ${location.city}, ${location.state}, ${location.zip}`}
        description={truncateString(listing_details.description)}
        image={property.media.large_image_list[0]}
        offers={{
          price: listing_details.current_price,
          priceCurrency: listing_details.preferred_currency ?? 'USD',
        }}
      />
      <ResidenceJsonLd
        address={{
          streetAddress: address,
          locality: location.city,
          region: location.state,
          postalCode: location.zip,
        }}
      />
    </>
  );
}

PropertySeo.propTypes = {
  property: ApartmentType,
};

export default React.memo(PropertySeo);
