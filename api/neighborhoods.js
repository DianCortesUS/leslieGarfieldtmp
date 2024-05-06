import {useQuery} from 'react-query';
import {getNeighborhoods, getNeighborhood} from 'rest-api';

function useNeighborhoods(config = {}) {
  return useQuery({
    queryKey: ['neighborhoods'],
    queryFn: () => getNeighborhoods().then((resp) => resp.data),
    config: {
      retry: 1,
      ...config,
    },
  });
}

function useNeighborhood(id) {
  return useQuery({
    queryKey: ['neighborhood', {id}],
    queryFn: () => getNeighborhood(id).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

export {useNeighborhoods, useNeighborhood};
