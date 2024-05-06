import {isNil} from '@perchwell/utils';

import {getAgent} from 'rest-api';
import {QUERY_PARAMS} from 'constants/blog';
import {BLOG_AUTHOR_LEGACY_IDS} from 'constants/legacy';
import BlogTemplate from 'templates/blog';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({resolvedUrl}) {
  const legacyAuthor = BLOG_AUTHOR_LEGACY_IDS[removeQueryParams(resolvedUrl)];

  if (isNil(legacyAuthor?.id)) {
    return {notFound: true};
  }

  const agent = await getAgent(legacyAuthor.id).then((resp) => resp.data);

  return {
    props: {
      query: {
        [QUERY_PARAMS.EMPLOYEE_ID]: legacyAuthor.id,
      },
      breadcrumb: [
        {
          item: resolvedUrl,
          name: `${agent.first_name} ${agent.last_name}`,
        },
      ],
    },
  };
}

export default BlogTemplate;
