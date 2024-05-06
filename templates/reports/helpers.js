import {TAGS} from 'constants/reports';

function getReportTag(report) {
  const reportTags = report?.tags ?? {};

  return Object.keys(TAGS).find((tagKey) => reportTags[tagKey]);
}

export {getReportTag};
