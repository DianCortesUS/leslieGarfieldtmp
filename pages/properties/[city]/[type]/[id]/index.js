import {isNil} from '@perchwell/utils';

import {PROPERTY_LEGACY_IDS} from 'constants/legacy';
import {getListing, getListings} from 'rest-api';
import {getPropertyDetailsLink} from 'helpers/detail-links';
import ListingDetailsTemplate from 'templates/listing-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyProperty = PROPERTY_LEGACY_IDS[resolvedUrl.split('?')[0]];
  let propertyId;
  if (legacyProperty){
    propertyId = legacyProperty.id 
  } else if (typeof params.id == 'string' && params.id.substring(0,5) == 'PRCH-') {
    propertyId = params.id.substring(5)
  } else {
    propertyId = params.id
  }

  if (!propertyId) {
    return {notFound: true};
  }

  let property;

  const isNumberRegex = /^\d+$/;

  if (!isNumberRegex.test(propertyId)) {
    property = await getListings({
      custom_slug: params.id,
    }).then((response) => response.data[0]);
  } else {
    property = await getListing(propertyId).then((resp) => resp.data[0]);
  }

  if (isNil(property)) {
    return {notFound: true};
  }

  const detailsLink = getPropertyDetailsLink(property);

  if (resolvedUrl.split('?')[0] == detailsLink) {
    return {
      props: {
        property,
      },
    };
  }

  return {
    redirect: {
      destination: detailsLink,
      permanent: false,
    },
  };
}

export default ListingDetailsTemplate;
