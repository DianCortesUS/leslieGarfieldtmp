import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import Truncate from 'react-truncate';

import {ReportBox, ReportTitle} from './styled-components';

function Card({title, content, link, tag}) {
  return (
    <Grid item xs={12} md={4}>
      <Link href={link} passHref>
        <ReportBox component="a" tag={tag} p={4}>
          <Box mb={4}>
            {title && <ReportTitle variant="subtitle2">{title}</ReportTitle>}
          </Box>
          <Box height="200px">
            {content && (
              <Typography variant="h5" gutterBottom>
                <Truncate lines={5}>{content}</Truncate>
              </Typography>
            )}
          </Box>
          <Typography variant="overline">READ MORE &gt;</Typography>
        </ReportBox>
      </Link>
    </Grid>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export {Card};
