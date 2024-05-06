import {apiClient} from './api-client';

function getNeighborhoods() {
  return apiClient(`/neighborhoods`);
}

function getNeighborhood(id) {
  return apiClient(`/neighborhoods/${id}`);
}

function getPlaces(queryConfig) {
  const googleMapConfig = {
    location: new window.google.maps.LatLng(
      queryConfig.centroid.lat,
      queryConfig.centroid.lon,
    ),
    radius: 2000,
    type: queryConfig.type,
  };

  const service = new window.google.maps.places.PlacesService(
    document.getElementById('google-map'),
  );

  return new Promise((resolve) => {
    service.nearbySearch(googleMapConfig, function (results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      } else resolve([]);
    });
  });
}

export {getNeighborhoods, getNeighborhood, getPlaces};
