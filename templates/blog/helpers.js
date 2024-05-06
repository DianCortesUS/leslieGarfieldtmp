import {QUERY_PARAMS} from 'constants/blog';
import {TAGS} from 'constants/reports';

function getPublicationsTitle(publication = {}, query) {
  const {
    client_website_employees = [],
    client_website_neighborhoods = [],
    tags = {},
  } = publication;

  if (query[QUERY_PARAMS.EMPLOYEE_ID]) {
    const employee = client_website_employees.find(
      (publicationEmployee) =>
        String(publicationEmployee.id) ===
        String(query[QUERY_PARAMS.EMPLOYEE_ID]),
    );
    return employee ? `${employee.first_name} ${employee.last_name}` : null;
  }

  if (query[QUERY_PARAMS.NEIGHBORHOOD_ID]) {
    const neighborhood = client_website_neighborhoods.find(
      (publicationNeighborhood) =>
        String(publicationNeighborhood.id) ===
        String(query[QUERY_PARAMS.NEIGHBORHOOD_ID]),
    );
    return neighborhood ? neighborhood.name : null;
  }

  return tags?.[query[QUERY_PARAMS.TAG]] ?? null;
}

function filterBlogQuery(query = {}) {
  const availableValues = Object.values(QUERY_PARAMS);

  return Object.keys(query)
    .filter((key) => availableValues.includes(key))
    .reduce((res, key) => {
      // apply only one query value
      if (Object.keys(res).length > 0) {
        return res;
      }

      return {...res, [key]: query[key]};
    }, {});
}

const isPublicationReport = (publication) => {
  const supportedTags = Object.keys(TAGS);
  const publicationTags = Object.keys(publication.tags ?? {});

  return publicationTags.filter((tag) => supportedTags.includes(tag)).length;
};

export {getPublicationsTitle, filterBlogQuery, isPublicationReport};
