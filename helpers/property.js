import {getFormattedNumber} from '@perchwell/utils';
import {isFuture, format} from 'date-fns';

import {ROUTES} from 'constants/routes';
import {
  NEW_YORK_PROPERTY_KEY,
  INTERNATIONAL_PROPERTY_KEY,
  SALE_LISTING_TYPE,
  RENT_LISTING_TYPE,
} from 'constants/properties';
import {NEIGHBORHOOD_LEGACY_IDS} from 'constants/legacy';

const mapCurrencyToStartAdornment = {
  EUR: '€',
  GBP: '£',
};

// Mapping between API and current garfield statuses
const mapListingStatusToCurrentStatus = {
  ['Under Contract']: 'In Contract',
};

function getPropertyPriceStartAdornment(property) {
  const {preferred_currency} = property?.listing_details ?? {};

  return mapCurrencyToStartAdornment[preferred_currency] ?? '$';
}

function getPropertyType(property = {}) {
  return property?.listing_details?.listing_type;
}

function isSaleProperty(property) {
  return getPropertyType(property) === SALE_LISTING_TYPE;
}

function isRentalProperty(property) {
  return getPropertyType(property) === RENT_LISTING_TYPE;
}

function getPropertyPrice(property) {
  const {current_price} = property?.listing_details ?? {};

  if (current_price === 1) {
    return 'POA';
  }

  return getFormattedNumber(current_price, {
    startAdornment: getPropertyPriceStartAdornment(property),
  });
}

function getPropertyStatus(property) {
  const status = property?.listing_details?.status;

  return mapListingStatusToCurrentStatus[status] ?? status;
}

function isPropertyInternational(property = {}) {
  return property.location?.place === 'International';
}

function getPropertyCity(property = {}) {
  return isPropertyInternational(property)
    ? INTERNATIONAL_PROPERTY_KEY
    : NEW_YORK_PROPERTY_KEY;
}

function getPropertyLegacyNeighborhood(property = {}) {
  const {geography_ids: geographyIds = []} = property.location;

  return Object.keys(NEIGHBORHOOD_LEGACY_IDS).find((link) => {
    const neighborhoodGeographyIds =
      NEIGHBORHOOD_LEGACY_IDS[link]?.geographyIds ?? [];

    return geographyIds.filter(
      (geographyId) => neighborhoodGeographyIds.indexOf(geographyId) !== -1,
    ).length;
  });
}

function getPropertySimilarPropertiesLink(property = {}) {
  const legacyNeighborhood = getPropertyLegacyNeighborhood(property);

  if (legacyNeighborhood) {
    return legacyNeighborhood;
  }

  if (isPropertyInternational(property)) {
    return `${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`;
  }

  return {
    pathname: `${ROUTES.LISTINGS}/${getPropertyCity(property)}`,
    query: {geographyIds: property.location?.geography_ids ?? []},
  };
}

function getPropertyOpenHouse(apartment = {}) {
  const openHouses = apartment.open_houses ?? [];
  const nearestFutureOpenHouse = openHouses.find((openHouse) =>
    isFuture(new Date(openHouse.end_time)),
  );

  if (nearestFutureOpenHouse) {
    const startTimeDate = new Date(nearestFutureOpenHouse.start_time);
    const month = startTimeDate.getMonth() + 1;
    const date = startTimeDate.getDate();
    const startTime = format(startTimeDate, 'h:mm aa');

    const endTimeDate = new Date(nearestFutureOpenHouse.end_time);
    const endTime = format(endTimeDate, 'h:mm aa');

    const byAppointmentOnly = nearestFutureOpenHouse.by_appointment_only;

    return `Open House: ${month}/${date} ${startTime} - ${endTime} ${
      byAppointmentOnly ? ` (By Appt.)` : ''
    }`;
  }

  return null;
}

function cleanAddress(address) {
  return address ? address.replace(/\bSt\b\.?/, 'Street') : address;
}

export {
  getPropertyPriceStartAdornment,
  getPropertyPrice,
  getPropertyStatus,
  isPropertyInternational,
  getPropertyCity,
  getPropertySimilarPropertiesLink,
  getPropertyOpenHouse,
  isSaleProperty,
  isRentalProperty,
  cleanAddress,
};
