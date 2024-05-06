import {isNil} from '@perchwell/utils';

import {NEIGHBORHOOD_DETAILS_LEGACY_IDS} from 'constants/legacy';
import {getNeighborhood} from 'rest-api';
import {getNeighborhoodDetailsLink} from 'helpers/detail-links';
import NeighborhoodDetailsTemplate from 'templates/neighborhood-details';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyNeighborhood =
    NEIGHBORHOOD_DETAILS_LEGACY_IDS[removeQueryParams(resolvedUrl)];
  const neighborhoodId = legacyNeighborhood ? legacyNeighborhood.id : params.id;

  if (!neighborhoodId) {
    return {notFound: true};
  }

  const neighborhood = await getNeighborhood(neighborhoodId).then(
    (resp) => resp.data,
  );

  if (isNil(neighborhood)) {
    return {notFound: true};
  }

  if (legacyNeighborhood || neighborhood) {
    return {
      props: {
        neighborhood,
        breadcrumb: [
          {
            item: resolvedUrl,
            name: legacyNeighborhood?.label ?? neighborhood.name,
          },
        ],
      },
    };
  }

  return {
    redirect: {
      destination: getNeighborhoodDetailsLink(neighborhood),
      permanent: false,
    },
  };
}

export default NeighborhoodDetailsTemplate;
