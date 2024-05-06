import querystring from 'querystring';

import {apiClient} from './api-client';

function getPublications(query) {
  return apiClient(`/publications?${querystring.stringify(query)}`);
}

function getPublication(id, query) {
  return apiClient(`/publication/${id}?${querystring.stringify(query)}`);
}

export {getPublications, getPublication};
