import {useQuery} from 'react-query';
import {getPublications, getPublication} from 'rest-api';

function usePublications(query = {}) {
  return useQuery({
    queryKey: ['publications', query],
    queryFn: () => getPublications(query).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

function usePublication(id, query = {}) {
  return useQuery({
    queryKey: ['publication', {id}],
    queryFn: () => getPublication(id, query).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

export {usePublications, usePublication};
