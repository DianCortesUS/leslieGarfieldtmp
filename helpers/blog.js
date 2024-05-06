import {isNil} from '@perchwell/utils';

import {ROUTES} from 'constants/routes';
import {QUERY_PARAMS} from 'constants/blog';
import {
  BLOG_AUTHOR_LEGACY_IDS,
  NEIGHBORHOOD_BLOG_LEGACY_IDS,
} from 'constants/legacy';
import {getLegacyLink} from 'helpers/detail-links';
import {generateSlugString} from 'helpers/string';

function getEmployeeBlogLink(employee) {
  const legacyAuthorLink = getLegacyLink({
    id: employee?.id,
    collection: BLOG_AUTHOR_LEGACY_IDS,
  });

  if (legacyAuthorLink) {
    return legacyAuthorLink;
  }

  return `${ROUTES.BLOG}?${QUERY_PARAMS.EMPLOYEE_ID}=${employee.id}`;
}

function getNeighborhoodBlogLink(neighborhood) {
  const legacyNeighborhoodBlogLink = getLegacyLink({
    id: neighborhood?.id,
    collection: NEIGHBORHOOD_BLOG_LEGACY_IDS,
  });

  if (legacyNeighborhoodBlogLink) {
    return legacyNeighborhoodBlogLink;
  }

  return `${ROUTES.BLOG}?${QUERY_PARAMS.NEIGHBORHOOD_ID}=${neighborhood.id}`;
}

function getPublicationTagBlogLink(tag) {
  return `/categories/${generateSlugString(tag, {separator: '_'})}`;
}

function getPublicationTags(publication, queryKey) {
  const publicationData = !isNil(publication) ? publication : {};
  const {
    client_website_employees = [],
    client_website_neighborhoods = [],
    tags = {},
  } = publicationData;

  if (queryKey === QUERY_PARAMS.EMPLOYEE_ID) {
    return client_website_employees.map((employee) => ({
      link: getEmployeeBlogLink(employee),
      label: `${employee.first_name} ${employee.last_name}`,
    }));
  }

  if (queryKey === QUERY_PARAMS.NEIGHBORHOOD_ID) {
    return client_website_neighborhoods.map((neighborhood) => ({
      link: getNeighborhoodBlogLink(neighborhood),
      label: neighborhood.name,
    }));
  }

  return Object.keys(tags).map((tagKey) => ({
    link: getPublicationTagBlogLink(tagKey),
    label: tags[tagKey],
  }));
}

export {
  getEmployeeBlogLink,
  getNeighborhoodBlogLink,
  getPublicationTagBlogLink,
  getPublicationTags,
};
