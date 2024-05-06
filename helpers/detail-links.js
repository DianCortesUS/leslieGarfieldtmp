import {ROUTES} from 'constants/routes';
import {
  AGENTS_LEGACY_IDS,
  PROPERTY_LEGACY_IDS,
  NEIGHBORHOOD_LEGACY_IDS,
  BLOG_LEGACY_IDS,
  REPORTS_LEGACY_IDS,
  NEIGHBORHOOD_DETAILS_LEGACY_IDS,
} from 'constants/legacy';
import {generateSlugString} from 'helpers/string';
import {getPropertyCity, isSaleProperty} from 'helpers/property';

function getLegacyLink({id, collection = {}}) {
  return Object.keys(collection).find((key) => collection[key].id === id);
}

function getPropertyDetailsLink(property = {}) {
  const city = getPropertyCity(property);
  const type = isSaleProperty(property) ? 'sale' : 'rental';

  const custom_slug = property?.listing_details?.custom_slug;

  if (custom_slug) {
    return `${ROUTES.LISTINGS}/${city}/${type}/${custom_slug}`;
  }

  const legacyLink = getLegacyLink({
    id: property.id,
    collection: PROPERTY_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return `${ROUTES.LISTINGS}/${city}/${type}/PRCH-${property.id}`;
}

function getNeighborhoodDetailsLink(neighborhood = {}) {
  const {custom_slug = ''} = neighborhood;

  if (custom_slug) {
    return `${ROUTES.NEIGHBORHOODS}/${custom_slug}`;
  }
  const legacyLink = getLegacyLink({
    id: neighborhood.id,
    collection: NEIGHBORHOOD_DETAILS_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return `${ROUTES.NEIGHBORHOODS}/${neighborhood.id}/${generateSlugString(
    neighborhood.name,
  )}`;
}

function getAgentDetailsLink(agent = {}) {
  const {custom_slug = ''} = agent;

  if (custom_slug) {
    return `${ROUTES.AGENTS}/${custom_slug}`;
  }
  const legacyLink = getLegacyLink({
    id: agent.id,
    collection: AGENTS_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return `${ROUTES.AGENTS}/${agent.id}/${generateSlugString(
    `${agent.first_name} ${agent.last_name}`,
  )}`;
}

function getPublicationDetailsLink(publication = {}) {
  const {custom_slug = ''} = publication;

  if (custom_slug) {
    return `${ROUTES.BLOG}/${custom_slug}`;
  }
  const legacyLink = getLegacyLink({
    id: publication.id,
    collection: BLOG_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return `${ROUTES.BLOG}/${publication.id}/${generateSlugString(
    publication.title,
  )}`;
}

function getReportDetailsLink(report = {}) {
  const legacyLink = getLegacyLink({
    id: report.id,
    collection: REPORTS_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return `${ROUTES.REPORTS}/${report.id}/${generateSlugString(report.title)}`;
}

function getCareerDetailsLink(career = {}) {
  return `${ROUTES.CAREERS}/${career.id}/${generateSlugString(
    career.position_title,
  )}`;
}

function getPropertiesByNeighborhoodLink(neighborhood) {
  const legacyLink = getLegacyLink({
    id: neighborhood.id,
    collection: NEIGHBORHOOD_LEGACY_IDS,
  });

  if (legacyLink) {
    return legacyLink;
  }

  return {
    pathname: ROUTES.LISTINGS,
    query: {geographyIds: neighborhood.geography_ids ?? []},
  };
}

export {
  getLegacyLink,
  getPropertyDetailsLink,
  getNeighborhoodDetailsLink,
  getAgentDetailsLink,
  getPublicationDetailsLink,
  getReportDetailsLink,
  getCareerDetailsLink,
  getPropertiesByNeighborhoodLink,
};
