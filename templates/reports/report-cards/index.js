import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';

import {SPECIAL_REPORT_TAG, INTERNATIONAL_TAG} from 'constants/reports';
import {getReportDetailsLink} from 'helpers/detail-links';

import {getReportTag} from '../helpers';

import {Card} from './card';

function ReportCards({reports}) {
  return (
    <Box pt={3} pb={3} overflow="hidden">
      <Grid container spacing={6}>
        {reports.map((report) => {
          const tag = getReportTag(report);
          const tagLabel = report.tags?.[tag] ?? '';
          const title = report.title;

          return tag === SPECIAL_REPORT_TAG || tag === INTERNATIONAL_TAG ? (
            <Card
              key={report.id}
              title={tagLabel}
              content={title}
              link={getReportDetailsLink(report)}
              tag={tag}
            />
          ) : (
            <Card
              key={report.id}
              title={title}
              content={tagLabel}
              link={getReportDetailsLink(report)}
              tag={tag}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

ReportCards.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.object,
    }),
  ).isRequired,
};

export {ReportCards};
