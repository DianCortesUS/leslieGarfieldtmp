import {ROUTES} from 'constants/routes';
import {
  NEW_YORK_PROPERTY_KEY,
  INTERNATIONAL_PROPERTY_KEY,
} from 'constants/properties';

const MAP_ROUTE_TO_SEO = {
  [ROUTES.HOME]: 'Leslie J. Garfield',
  [ROUTES.AGENTS]: 'Agents',
  [ROUTES.BLOG]: 'Blog',
  [ROUTES.CAREERS]: 'Careers',
  [ROUTES.NEIGHBORHOODS]: 'Neighborhoods',
  [`${ROUTES.LISTINGS}/${NEW_YORK_PROPERTY_KEY}`]: 'New York Townhouses',
  [ROUTES.NEW_YORK_SALES]: 'Townhouses for Sale in NYC',
  [ROUTES.NEW_YORK_RENTALS]: 'Townhouses for Rent in NYC',
  [`${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`]: 'International Townhouses',
  [ROUTES.REPORTS]: 'Research Reports',
  [ROUTES.CLOSING_COSTS]: 'Closing Costs',
  [ROUTES.COMPANY]: 'Company',
  [ROUTES.CONTACT]: 'Contact',
  [ROUTES.SUBSCRIBE]: 'Email Alerts',
  [ROUTES.FAQ]: 'Frequently Asked Questions',
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.SITEMAP]: 'Sitemap',
  [ROUTES.TERMS]: 'Terms & Conditions',
};

function generateStaticBreadcrumbs(url = '') {
  let path = '';

  return url
    .split('/')
    .filter((chunk) => chunk)
    .reduce(
      (res, chunk) => {
        const nextPath = `${path}/${chunk}`;
        const name =
          MAP_ROUTE_TO_SEO[`/${chunk}`] || MAP_ROUTE_TO_SEO[nextPath];

        path = nextPath;
        if (name) {
          return [
            ...res,
            {
              item: nextPath,
              name,
            },
          ];
        }

        return res;
      },
      [
        {
          item: '',
          name: 'Leslie J. Garfield',
        },
      ],
    );
}

function removeQueryParams(url) {
  try {
    if (url.includes('?')) {
      return url.split('?')[0];
    }
    return url;
  } catch {
    return url;
  }
}

export {generateStaticBreadcrumbs, removeQueryParams};
