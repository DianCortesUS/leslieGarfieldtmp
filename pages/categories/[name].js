import {getNeighborhood} from 'rest-api';
import {QUERY_PARAMS} from 'constants/blog';
import {NEIGHBORHOOD_BLOG_LEGACY_IDS} from 'constants/legacy';
import {generateTitleString} from 'helpers/string';
import BlogTemplate from 'templates/blog';
import { removeQueryParams } from 'helpers/seo';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyNeighborhoodBlog = NEIGHBORHOOD_BLOG_LEGACY_IDS[removeQueryParams(resolvedUrl)];

  if (legacyNeighborhoodBlog?.id) {
    const neighborhood = await getNeighborhood(legacyNeighborhoodBlog.id).then(
      (resp) => resp.data,
    );

    return {
      props: {
        query: {
          [QUERY_PARAMS.NEIGHBORHOOD_ID]: legacyNeighborhoodBlog.id,
        },
        breadcrumb: [
          {
            item: resolvedUrl,
            name: neighborhood.name,
          },
        ],
      },
    };
  }

  return {
    props: {
      query: {
        [QUERY_PARAMS.TAG]: params.name,
      },
      breadcrumb: [
        {
          item: resolvedUrl,
          name: generateTitleString(params.name, {separator: '_'}),
        },
      ],
    },
  };
}

export default BlogTemplate;
