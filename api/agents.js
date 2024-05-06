import {useQuery} from 'react-query';
import {getAgents, getAgent} from 'rest-api';

function useAgents() {
  return useQuery({
    queryKey: ['agents'],
    queryFn: () => getAgents().then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

function useAgent(id) {
  return useQuery({
    queryKey: ['agents', {id}],
    queryFn: () => getAgent(id).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

export {useAgents, useAgent};
