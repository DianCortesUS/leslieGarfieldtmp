import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['Authorization'] =
  process.env.API_AUTHORIZATION_TOKEN;

async function apiClient(
  endpoint,
  {data, headers: customHeaders, ...customConfig} = {},
) {
  const config = {
    url: endpoint,
    method: data ? 'POST' : 'GET',
    mode: 'cors',
    data,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    ...customConfig,
  };

  return axios.request(config);
}

export {apiClient};
