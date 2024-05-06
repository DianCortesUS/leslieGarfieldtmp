// next.config.js
const withTM = require('next-transpile-modules')([
  'fuse.js',
  'kdbush',
  'supercluster',
]);
const withCSS = require('@zeit/next-css');
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
  require.extensions['.css'] = () => {};
}

const devEnv = {
  HOST: '',
  API_URL: 'https://uat.perchwell.com/client_websites',
  //API_URL: 'https://www.perchwell.com/client_websites',
  //API_URL: 'https://staging.perchwell.com/client_websites',
  API_AUTHORIZATION_TOKEN: 'leslie_garfield',
  CAPTCHA_TOKEN: '6Ldxh9AZAAAAAKp7owR4SCe31wzm28NW6iclUOgv',
  CLIENT_WEBSITE_ID: 2,
  IMAGE_PLACEHOLDER_URL:
    'https://perchwell-static-assets.s3.amazonaws.com/lesliegarfield/placeholder1x.png',
};

const prodEnv = {
  HOST: 'https://lesliegarfield.com',
  API_URL: 'https://uat.perchwell.com/client_websites',
  //API_URL: 'https://www.perchwell.com/client_websites',
  API_AUTHORIZATION_TOKEN: 'leslie_garfield',
  CAPTCHA_TOKEN: '6Ldxh9AZAAAAAKp7owR4SCe31wzm28NW6iclUOgv',
  CLIENT_WEBSITE_ID: 2,
  IMAGE_PLACEHOLDER_URL:
    'https://perchwell-static-assets.s3.amazonaws.com/lesliegarfield/placeholder1x.png',
};

module.exports = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;

  const env = isDevelopment ? devEnv : prodEnv;

  return withCSS(
    withTM({
      env,
      cssLoaderOptions: {
        url: false,
      },
      // distDir: 'build',
      target: 'serverless',
      webpack: (config) => {
        config.resolve.alias['react-hook-form'] =
          'react-hook-form/dist/index.ie11';

        return config;
      },
    }),
  );
};
