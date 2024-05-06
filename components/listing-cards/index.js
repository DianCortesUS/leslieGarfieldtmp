import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';

import {getPropertyDetailsLink} from 'helpers/detail-links';

import {ListingCard} from './card';

function ListingCards({apartments, ...containerProps}) {
  return (
    <Box overflow="hidden">
      <Grid container spacing={2} {...containerProps}>
        {apartments.map((apartment) => {
          return (
            <Grid
              key={apartment.id}
              item
              container
              component="a"
              href={getPropertyDetailsLink(apartment)}
              xs={12}
              md={6}
              lg={4}
            >
              <ListingCard apartment={apartment} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

ListingCards.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType),
};

ListingCards.defaultProps = {
  apartments: [],
};

const Memo = React.memo(ListingCards);

export {Memo as ListingCards, ListingCard};
export {MapListingCard} from './map-card';
