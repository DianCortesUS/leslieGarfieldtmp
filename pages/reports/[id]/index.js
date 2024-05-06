import {isNil} from '@perchwell/utils';

import {REPORTS_LEGACY_IDS} from 'constants/legacy';
import {getPublication} from 'rest-api';
import {getReportDetailsLink} from 'helpers/detail-links';
import PublicationDetailsTemplate from 'templates/publication-details';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyReport = REPORTS_LEGACY_IDS[removeQueryParams(resolvedUrl)];
  const reportId = legacyReport ? legacyReport.id : params.id;

  if (isNaN(Number(reportId))) {
    return {notFound: true};
  }

  const report = await getPublication(reportId, {
    include_employees: true,
  }).then((resp) => resp.data);

  if (isNil(report)) {
    return {notFound: true};
  }

  if (legacyReport) {
    return {
      props: {
        publication: report,
        breadcrumb: [
          {
            item: resolvedUrl,
            name: legacyReport.label ?? report.title,
          },
        ],
      },
    };
  }

  return {
    redirect: {
      destination: getReportDetailsLink(report),
      permanent: false,
    },
  };
}

export default PublicationDetailsTemplate;
