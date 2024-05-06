import querystring from 'querystring';

import {apiClient} from './api-client';

function getListings(query) {
  return apiClient(`/listings?${querystring.stringify(query)}`);
}

function getListing(id) {
  return apiClient(`/listings?id=${id}`);
}

function getListingBuilding(buildingId) {
  return apiClient(`/listing_details?building_id=${buildingId}`);
}

export {getListings, getListing, getListingBuilding};
