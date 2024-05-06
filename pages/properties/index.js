import {ROUTES} from 'constants/routes';
import {NEW_YORK_PROPERTY_KEY} from 'constants/properties';

export function getServerSideProps() {
  return {
    redirect: {
      destination: `${ROUTES.LISTINGS}/${NEW_YORK_PROPERTY_KEY}`,
      permanent: true,
    },
  };
}

const EmptyComponent = () => {};

export default EmptyComponent;
