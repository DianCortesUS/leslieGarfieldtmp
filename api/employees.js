import {useQuery} from 'react-query';
import {getEmployees} from 'rest-api';

function useEmployees(query = {}) {
  return useQuery({
    queryKey: ['employees', query],
    queryFn: () => getEmployees(query).then((resp) => resp.data),
    config: {
      retry: 1,
    },
  });
}

export {useEmployees};
