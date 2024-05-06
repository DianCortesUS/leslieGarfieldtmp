import {getFormattedNumber} from '@perchwell/utils';
import {getPropertyPrice, cleanAddress} from 'helpers/property';

function getPropertyMeta(property = {}) {
  const title =
    [
      property?.location?.address,
      property?.location?.city,
      property?.location?.state,
      property?.location?.zip,
    ]
      .filter((value) => value)
      .join(', ') + ` | ${property?.location?.place}`;

  const description = [
    getPropertyPrice(property),
    [
      cleanAddress(property?.location?.address_with_unit),
      property?.location?.city,
      property?.location?.state,
      property?.location?.zip,
    ]
      .filter((value) => value)
      .join(', '),
    getFormattedNumber(property?.unit_details?.sqft, {
      endAdornment: ` Square Feet for sale in ${property?.location?.place}`,
    }),
    property?.listing_details?.short_description,
  ]
    .filter((value) => value)
    .join(' - ');

  return {
    title,
    description,
  };
}

export {getPropertyMeta};
