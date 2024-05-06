import {isNil} from '@perchwell/utils';

import {getCareer} from 'rest-api';
import {getCareerDetailsLink} from 'helpers/detail-links';

export async function getServerSideProps({params}) {
  const career = await getCareer(params.id).then((resp) => resp.data);

  if (isNil(career)) {
    return {notFound: true};
  }

  return {
    redirect: {
      destination: getCareerDetailsLink(career),
      permanent: false,
    },
  };
}

const EmptyComponent = () => {};

export default EmptyComponent;
