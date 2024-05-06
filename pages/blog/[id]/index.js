import {isNil} from '@perchwell/utils';

import {BLOG_LEGACY_IDS} from 'constants/legacy';
import {getPublication} from 'rest-api';
import {getPublicationDetailsLink} from 'helpers/detail-links';
import PublicationDetailsTemplate from 'templates/publication-details';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyPublication = BLOG_LEGACY_IDS[removeQueryParams(resolvedUrl)];
  const publicationId = legacyPublication ? legacyPublication.id : params.id;

  if (!publicationId) {
    return {notFound: true};
  }

  const publication = await getPublication(publicationId, {
    include_employees: true,
  }).then((resp) => resp.data);

  if (isNil(publication)) {
    return {notFound: true};
  }

  if (legacyPublication || publication) {
    return {
      props: {
        publication,
        breadcrumb: [
          {
            item: resolvedUrl,
            name: legacyPublication?.label ?? publication.title,
          },
        ],
      },
    };
  }

  return {
    redirect: {
      destination: getPublicationDetailsLink(publication),
      permanent: false,
    },
  };
}

export default PublicationDetailsTemplate;
