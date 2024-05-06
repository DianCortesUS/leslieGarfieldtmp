import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import {PublicationType} from '@perchwell/domain';

import {getPublicationDetailsLink} from 'helpers/detail-links';

import {PublicationBox} from './styled-components';

function PublicationCards({publications}) {
  return (
    <Grid container>
      {publications.map((publication) => (
        <Link
          key={publication.id}
          href={getPublicationDetailsLink(publication)}
          passHref
        >
          <Grid item xs={12} md={4} component="a">
            <PublicationBox p={4}>
              <Box mb={4}>
                <Typography variant="body1">{publication.title}</Typography>
              </Box>
              <Typography variant="overline" style={{fontWeight: 700}}>
                READ MORE &gt;
              </Typography>
            </PublicationBox>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

PublicationCards.propTypes = {
  publications: PropTypes.arrayOf(PublicationType).isRequired,
};

export {PublicationCards};
