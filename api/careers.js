import {useQuery} from 'react-query';
import {getCareers, getCareer} from 'rest-api';

function useCareers(query) {
  return useQuery({
    queryKey: ['careers', query],
    queryFn: () => getCareers(query).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

function useCareer(id) {
  return useQuery({
    queryKey: ['career', {id}],
    queryFn: () => getCareer(id).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

export {useCareers, useCareer};
