import {useQuery} from 'react-query';
import {getPageConfiguration} from 'rest-api';

function usePageContent(pageId) {
  return useQuery({
    queryKey: ['page', {pageId}],
    queryFn: () => getPageConfiguration(pageId),
    config: {
      retry: 1,
    },
  });
}

export {usePageContent};
