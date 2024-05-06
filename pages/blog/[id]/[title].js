import {isNil} from '@perchwell/utils';

import {getPublication} from 'rest-api';
import {getPublicationDetailsLink} from 'helpers/detail-links';
import {generateSlugString} from 'helpers/string';
import PublicationDetailsTemplate from 'templates/publication-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const publication = await getPublication(params.id, {
    include_employees: true,
  }).then((resp) => resp.data);

  if (isNil(publication)) {
    return {notFound: true};
  }

  if (generateSlugString(publication.title) !== params.title) {
    return {
      redirect: {
        destination: getPublicationDetailsLink(publication),
        permanent: false,
      },
    };
  }

  return {
    props: {
      publication,
      breadcrumb: [
        {
          item: resolvedUrl,
          name: publication.title,
        },
      ],
    },
  };
}

export default PublicationDetailsTemplate;
