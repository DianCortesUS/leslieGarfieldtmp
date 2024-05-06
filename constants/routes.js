import {NEW_YORK_PROPERTY_KEY} from 'constants/properties';

export const ROUTES = {
  HOME: '/',
  AGENTS: '/agents',
  BLOG: '/blog',
  PUBLICATION_DETAILS: '/blog/:id/:title',
  CAREERS: '/careers',
  CLOSING_COSTS: '/closing_costs',
  COMPANY: '/company',
  CONTACT: '/contact',
  DISCLAIMER: '/terms',
  FAQ: '/faq',
  LISTINGS: '/properties',
  NEW_YORK_SALES: `/properties/${NEW_YORK_PROPERTY_KEY}/sales`,
  NEW_YORK_RENTALS: `/properties/${NEW_YORK_PROPERTY_KEY}/rentals`,
  NEIGHBORHOODS: '/neighborhoods',
  REPORTS: '/reports',
  SERVICES: '/services',
  SITEMAP: '/sitemap',
  SUBSCRIBE: '/email',
  SELL: '/sell',
  SOP: '/sop',
};
