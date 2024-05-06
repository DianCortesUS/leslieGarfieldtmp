import {normalizeData} from '@perchwell/utils';

import {apiClient} from './api-client';

function getPageConfiguration(pageId) {
  return apiClient(`/page_configuration/${pageId}`).then((pageConfig) => {
    const data = pageConfig?.data?.pages?.[0] ?? [];

    return normalizeData(data);
  });
}

export {getPageConfiguration};
