import ReportsTemplate from 'templates/reports';

import {isNil} from '@perchwell/utils';

import {TAGS} from 'constants/reports';
import {generateTitleString} from 'helpers/string';

export async function getServerSideProps({params, resolvedUrl}) {
  const tag = Object.keys(TAGS)
    .map((tag) => TAGS[tag])
    .find((tagObject) => tagObject.legacyValue === params.category);

  if (isNil(tag)) {
    return {notFound: true};
  }

  return {
    props: {
      tag: tag.value,
      breadcrumb: [
        {
          item: resolvedUrl,
          name: generateTitleString(params.category),
        },
      ],
    },
  };
}

export default ReportsTemplate;
