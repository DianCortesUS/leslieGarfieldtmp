import {getPageConfiguration} from 'rest-api';
import {ErrorFallback} from 'components/error-fallback';

export async function getStaticProps() {
  const content = await getPageConfiguration('404');

  return {
    props: {
      content,
    },
  };
}

export default ErrorFallback;
