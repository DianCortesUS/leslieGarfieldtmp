import {ROUTES} from 'constants/routes';

export const RESEARCH_REPORT_TAG = 'research_report';
const WEEKLY_TAG = 'weekly';
const QUARTERLY_TAG = 'quarterly';
const MID_YEAR_TAG = 'mid_year';
const YEARLY_TAG = 'yearly';
export const SPECIAL_REPORT_TAG = 'special_report';
export const INTERNATIONAL_TAG = 'international';

const SPECIAL_REPORT_COLOR = '#a6978a';
const INTERNATIONAL_COLOR = '#00698c';

export const TAGS = {
  [RESEARCH_REPORT_TAG]: {
    label: 'All',
    value: RESEARCH_REPORT_TAG,
    legacyValue: RESEARCH_REPORT_TAG,
    link: ROUTES.REPORTS,
  },
  [WEEKLY_TAG]: {
    label: 'Weekly',
    value: WEEKLY_TAG,
    legacyValue: WEEKLY_TAG,
    link: `${ROUTES.REPORTS}/categories/${WEEKLY_TAG}`,
  },
  [QUARTERLY_TAG]: {
    label: 'Quarterly',
    value: QUARTERLY_TAG,
    legacyValue: QUARTERLY_TAG,
    link: `${ROUTES.REPORTS}/categories/${QUARTERLY_TAG}`,
  },
  [MID_YEAR_TAG]: {
    label: 'Mid-Year',
    value: MID_YEAR_TAG,
    legacyValue: 'mid-year',
    link: `${ROUTES.REPORTS}/categories/mid-year`,
  },
  [YEARLY_TAG]: {
    label: 'Yearly',
    value: YEARLY_TAG,
    legacyValue: YEARLY_TAG,
    link: `${ROUTES.REPORTS}/categories/${YEARLY_TAG}`,
  },
  [SPECIAL_REPORT_TAG]: {
    label: 'Special Report',
    value: SPECIAL_REPORT_TAG,
    legacyValue: 'special-report',
    color: SPECIAL_REPORT_COLOR,
    link: `${ROUTES.REPORTS}/categories/special-report`,
  },
  [INTERNATIONAL_TAG]: {
    label: 'International',
    value: INTERNATIONAL_TAG,
    legacyValue: INTERNATIONAL_TAG,
    color: INTERNATIONAL_COLOR,
    link: `${ROUTES.REPORTS}/categories/${INTERNATIONAL_TAG}`,
  },
};
