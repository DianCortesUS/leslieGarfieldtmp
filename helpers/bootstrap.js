import {queryCache} from 'react-query';
import {getPageConfiguration} from 'rest-api';

const pageIds = ['404', '500'];

async function bootstrapAppData() {
  try {
    for (const pageId of pageIds) {
      getPageConfiguration(pageId).then((data) => {
        if (data && data.id) {
          queryCache.setQueryData(['page', {pageId: data.id}], data);
        }
      });
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

export {bootstrapAppData};
