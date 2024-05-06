import {isNil} from '@perchwell/utils';

import {getNeighborhood} from 'rest-api';
import {generateSlugString} from 'helpers/string';
import {getNeighborhoodDetailsLink} from 'helpers/detail-links';
import NeighborhoodDetailsTemplate from 'templates/neighborhood-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const neighborhood = await getNeighborhood(params.id).then(
    (resp) => resp.data,
  );

  if (isNil(neighborhood)) {
    return {notFound: true};
  }

  if (generateSlugString(neighborhood.name) !== params.name) {
    return {
      redirect: {
        destination: getNeighborhoodDetailsLink(neighborhood),
        permanent: false,
      },
    };
  }

  return {
    props: {
      neighborhood,
      breadcrumb: [
        {
          item: resolvedUrl,
          name: neighborhood.name,
        },
      ],
    },
  };
}

export default NeighborhoodDetailsTemplate;
