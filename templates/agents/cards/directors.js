import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import {EmployeeType} from '@perchwell/domain';

import {getAgentDetailsLink} from 'helpers/detail-links';

import {AvatarBlock, EmployeeName, ExternalLink, DirectorsAvatar, DirectorsPhone} from './styled-components';

function DirectorsCards({employees}) {
  const firstPart = employees.slice(1, 4);
  const restPart = employees.slice(6, 7);
  const directors = firstPart.concat(restPart);


  return (
    <Box overflow="hidden">
      <Grid container spacing={8}>
        {directors.map((director) => (
          <Grid key={director.id} item xs={12} sm={6} lg={6}>
            <Link href={getAgentDetailsLink(director)} passHref>
              <AvatarBlock component="a">
                <DirectorsAvatar
                  mb="20px"
                  image={director.images?.[0]}
                />
                <EmployeeName align="center" gutterBottom>
                  {director.first_name} {director.last_name}
                </EmployeeName>
              </AvatarBlock>
            </Link>
            <Box mt={1}>
              {director.phone && (
                <Box align="center" mb={1}>
                  <DirectorsPhone display="block">
                    <ExternalLink
                      itemProp="telephone"
                      href={`tel:${director.phone}`}
                    >
                      {director.phone}
                    </ExternalLink>
                  </DirectorsPhone>
                </Box>
              )}
              {director.email && (
                <Box align="center">
                  <DirectorsPhone display="block">
                    <ExternalLink
                      itemProp="email"
                      href={`mailto:${director.email}`}
                    >
                      {director.email}
                    </ExternalLink>
                  </DirectorsPhone>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

DirectorsCards.propTypes = {
  employees: PropTypes.arrayOf(EmployeeType),
};

DirectorsCards.defaultProps = {
  employees: [],
};

const Memo = React.memo(DirectorsCards);

export {Memo as DirectorsCards};