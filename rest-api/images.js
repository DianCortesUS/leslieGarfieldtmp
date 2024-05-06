import querystring from 'querystring';

import {apiClient} from './api-client';

function getImages(query) {
  return apiClient(`/image_collections?${querystring.stringify(query)}`);
}

export {getImages};
