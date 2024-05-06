import {apiClient} from './api-client';

function getMarketReports() {
  return apiClient('/market_reports');
}

export {getMarketReports};
