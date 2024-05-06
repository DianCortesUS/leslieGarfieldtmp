import {isNil} from '@perchwell/utils';

import {getListing} from 'rest-api';
import {getPropertyDetailsLink} from 'helpers/detail-links';
import ListingDetailsTemplate from 'templates/listing-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const property = await getListing(params.id).then((resp) => resp.data[0]);

  if (isNil(property)) {
    return {notFound: true};
  }

  const propertyLink = getPropertyDetailsLink(property);

  if (resolvedUrl !== propertyLink) {
    const [resolvedUrlWithoutQueryParams] = resolvedUrl.split('?');
    if (resolvedUrlWithoutQueryParams !== propertyLink) {
      return {
        redirect: {
          destination: propertyLink,
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      property,
    },
  };
}

export default ListingDetailsTemplate;
