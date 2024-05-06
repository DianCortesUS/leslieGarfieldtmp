import {getPageConfiguration} from 'rest-api';
import honeybadger from 'helpers/honeybadger';
import {ErrorFallback} from 'components/error-fallback';

export async function getStaticProps({res, err}) {
  const content = await getPageConfiguration(500);

  if (err && res.statusCode !== 404) {
    honeybadger.notify(err);
  }

  return {
    props: {
      content,
    },
  };
}

export default ErrorFallback;
