import querystring from 'querystring';

import {apiClient} from './api-client';

function getBuildings(query) {
  return apiClient(`/buildings?${querystring.stringify(query)}`);
}

function getBuilding(id) {
  return apiClient(`/buildings/${id}`);
}

export {getBuildings, getBuilding};
