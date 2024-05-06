import Honeybadger from 'honeybadger';

const LocalHoneybadger = {
  notify: (error, options = null) => {
    console.groupCollapsed('Error happened');
    console.log('error: ', error);
    if (options) {
      console.log('options: ', options);
    }
    console.groupEnd();
  },
};

const honeybadger =
  process.env.NODE_ENV === 'production'
    ? Honeybadger.configure({
        apiKey: '22bebd88',
        environment: 'production',
      })
    : LocalHoneybadger;

export default honeybadger;
