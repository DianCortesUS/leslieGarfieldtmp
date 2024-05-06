import querystring from 'querystring';

import {apiClient} from './api-client';

function getEmployees(query) {
  return apiClient(`/employees?${querystring.stringify(query)}`);
}

export {getEmployees};
