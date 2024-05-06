import querystring from 'querystring';

import {apiClient} from './api-client';

function getCareers(query) {
  return apiClient(`/careers?${querystring.stringify(query)}`);
}

function getCareer(id) {
  return apiClient(`/career/${id}`);
}

function sendResume(data, config) {
  return apiClient('/career_applications.json', {data, ...config});
}

function sendDocument(data, config) {
  return apiClient('/document', {data, ...config});
}

export {getCareers, getCareer, sendResume, sendDocument};
