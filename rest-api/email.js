import axios from 'axios';
import {filterBrokerLoopData} from 'helpers/email';
import {apiClient} from './api-client';

function sendEmail({data, recipient}) {
  return apiClient(`/garfield_email`, {
    data: {
      body: Object.keys(data).reduce(
        (res, key) =>
          `${res}<b>${key[0].toUpperCase() + key.substr(1)}:</b> ${
            data[key]
          }<br>`,
        '',
      ),
      recipient,
    },
  });
}

function sendBrokerLoopEmail(data) {
  return axios.post(
    'https://api.brokerloop.com/api/v2/public.subscriber.listsubscribe',
    filterBrokerLoopData({
      ...data,
      listkey: '7dd776a7-42d3-408d-ba31-5c86c913ac14',
    }),
    {headers: {'Content-Type': 'application/json'}},
  );
}

export {sendEmail, sendBrokerLoopEmail};
