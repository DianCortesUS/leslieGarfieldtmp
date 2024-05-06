import {LEGACY_AGENT_DEALS} from 'constants/legacy-agent-deals';
import {
  getPropertyPrice,
  isSaleProperty,
  isRentalProperty,
} from 'helpers/property';

import {isApartmentActive} from '../helpers';

const isSoldApartment = (apartment) =>
  !isApartmentActive(apartment) && isSaleProperty(apartment);

const isRentalApartment = (apartment) =>
  !isApartmentActive(apartment) && isRentalProperty(apartment);

const apartmentToDeal = (apartment = {}) => ({
  id: apartment.id,
  propertyName: apartment.location?.address_with_unit ?? '',
  propertyType: apartment.unit_details?.property_type ?? '',
  neighborhood: apartment.location?.place ?? '',
  price: getPropertyPrice(apartment),
});

const getAgentDeals = (agent, apartments) => {
  const agentLegacyDeals = LEGACY_AGENT_DEALS.filter(
    (deal) => deal.agent === `${agent.first_name} ${agent.last_name}`,
  );

  const legacySold = agentLegacyDeals.filter((deal) => deal.kind === 'Sale');
  const legacyRental = agentLegacyDeals.filter(
    (deal) => deal.kind === 'Rental',
  );

  return {
    soldDeals: [
      ...apartments.filter(isSoldApartment).map(apartmentToDeal),
      ...legacySold,
    ].sort((a, b) =>
      Number(a.price.replace(/[^0-9]+/g, '')) <
      Number(b.price.replace(/[^0-9]+/g, ''))
        ? 1
        : -1,
    ),

    rentalDeals: [
      ...apartments.filter(isRentalApartment).map(apartmentToDeal),
      ...legacyRental,
    ].sort((a, b) =>
      Number(a.price.replace(/[^0-9]+/g, '')) <
      Number(b.price.replace(/[^0-9]+/g, ''))
        ? 1
        : -1,
    ),
  };
};

export {getAgentDeals};
