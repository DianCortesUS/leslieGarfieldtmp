import {useQuery} from 'react-query';
import {getListings, getListing, getListingBuilding} from 'rest-api';

function useListings(params = {}) {
  const {query = {}, config = {}} = params;

  return useQuery({
    queryKey: ['listings', query],
    queryFn: () => getListings(query).then((resp) => resp.data),
    config: {
      retry: 1,
      ...config,
    },
  });
}

function useListing(id) {
  return useQuery({
    queryKey: ['listing', {id}],
    queryFn: () => getListing(id).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

function useListingBuilding(buildingId) {
  return useQuery({
    queryKey: ['listing-building', {buildingId}],
    queryFn: () => getListingBuilding(buildingId).then((resp) => resp.data),
    config: {
      retry: 1,
      enabled: buildingId,
    },
  });
}

export {useListings, useListing, useListingBuilding};
