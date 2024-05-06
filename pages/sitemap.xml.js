import {ROUTES} from 'constants/routes';
import {
  NEW_YORK_PROPERTY_KEY,
  INTERNATIONAL_PROPERTY_KEY,
} from 'constants/properties';
import {LEGACY_IDS} from 'constants/legacy';
import {
  getAgentDetailsLink,
  getPropertyDetailsLink,
  getPublicationDetailsLink,
} from 'helpers/detail-links';

const POST_URL_PREFIX = process.env.HOST;

function createSitemap(links) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${links
      .map(
        (link) => `
      <url>
        <loc>${POST_URL_PREFIX}${link}</loc>
        <changefreq>daily</changefreq>
        <priority>0.3</priority>
      </url>`,
      )
      .join('')}
    </urlset>`;
}

export async function getServerSideProps({res}) {
  const resp = await fetch(`${process.env.API_URL}/sitemap`, {
    headers: new Headers({
      Authorization: process.env.API_AUTHORIZATION_TOKEN,
    }),
  });
  const listingPages = await resp.json();

  const listingDetailPages =
    listingPages?.listings?.results?.map((result) =>
      getPropertyDetailsLink(result),
    ) || [];
  const agentsDetailPages =
    listingPages?.agents?.results?.map((result) =>
      getAgentDetailsLink(result),
    ) || [];
  const publicationsDetailPages =
    listingPages?.publications?.results?.map((result) =>
      encodeURI(getPublicationDetailsLink(result))
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;'),
    ) || [];

  res.setHeader('Content-Type', 'text/xml');
  res.write(
    createSitemap([
      ...Object.values(ROUTES),
      `${ROUTES.LISTINGS}/${NEW_YORK_PROPERTY_KEY}`,
      `${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`,
      ...Object.keys(LEGACY_IDS),
      ...listingDetailPages,
      ...agentsDetailPages,
      ...publicationsDetailPages,
    ]),
  );
  res.end();

  return {props: {}};
}

export default () => {};
