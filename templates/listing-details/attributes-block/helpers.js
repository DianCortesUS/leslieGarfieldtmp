import {getFormattedNumber} from '@perchwell/utils';

import {
  getPropertyPrice,
  getPropertyPriceStartAdornment,
  isSaleProperty,
} from 'helpers/property';

const getSpecifications = (apartment) => {
  const {building_details, unit_details, custom_attributes} = apartment;
  const taxes = unit_details?.real_estate_tax;
  const bathrooms = unit_details?.full_baths;
  const halfBathrooms = unit_details?.half_baths;
  const shouldBedsBathsBeHidden =
    custom_attributes?.lesliegarfield_hide_beds_baths;
  const totalMonthlies = unit_details?.total_monthlies;

  const additionalSpending = custom_attributes?.lesliegarfield_monthlies
    ? {
        title: 'Monthlies',
        value: getFormattedNumber(totalMonthlies, {
          startAdornment: getPropertyPriceStartAdornment(apartment),
        }),
      }
    : {
        title: 'Annual Taxes',
        value: isSaleProperty(apartment)
          ? getFormattedNumber(taxes * 12, {
              startAdornment: getPropertyPriceStartAdornment(apartment),
            })
          : null,
      };
  const lotDimensions =
    custom_attributes?.lesliegarfield_lot_dimensions &&
    building_details?.lot_width &&
    building_details?.lot_depth
      ? {
          title: 'Lot Dimensions',
          value: `${building_details?.lot_width} X ${building_details?.lot_depth}`,
        }
      : {};

  const buildingDimensions =
    custom_attributes?.lesliegarfield_building_dimensions &&
    unit_details?.width &&
    building_details?.depth
      ? {
          title: 'Building Dimensions',
          value: `${unit_details?.width} X ${building_details?.depth}`,
        }
      : {};

  return [
    {
      title: 'Price',
      value: getPropertyPrice(apartment),
    },
    lotDimensions,
    {
      title: 'Stories',
      value: custom_attributes?.lesliegarfield_hide_stories
        ? null
        : building_details?.total_stories,
    },
    {
      title: 'Appx. SqFt',
      value: getFormattedNumber(unit_details?.sqft),
    },
    {
      title: 'Rooms',
      value: unit_details?.total_rooms,
    },
    ...(shouldBedsBathsBeHidden
      ? []
      : [
          {
            title: 'Bedrooms',
            value: unit_details?.beds,
          },
          {
            title: 'Bathrooms',
            value: bathrooms,
          },
          {
            title: 'Half-Bathrooms',
            value: halfBathrooms,
          },
        ]),
    additionalSpending,
    buildingDimensions,
  ].filter(({value}) => value);
};

function getFeatures(apartment) {
  return apartment?.custom_attributes?.lesliegarfield_key_features ?? [];
}

export {getSpecifications, getFeatures};
