import {isNil} from '@perchwell/utils';

import {getCareer} from 'rest-api';
import {generateSlugString} from 'helpers/string';
import {getCareerDetailsLink} from 'helpers/detail-links';
import CareerDetailsTemplate from 'templates/career-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const career = await getCareer(params.id).then((resp) => resp.data);

  if (isNil(career)) {
    return {notFound: true};
  }

  if (generateSlugString(career.position_title) !== params.title) {
    return {
      redirect: {
        destination: getCareerDetailsLink(career),
        permanent: false,
      },
    };
  }

  return {
    props: {
      career,
      breadcrumb: [
        {
          item: resolvedUrl,
          name: career.position_title,
        },
      ],
    },
  };
}

export default CareerDetailsTemplate;
