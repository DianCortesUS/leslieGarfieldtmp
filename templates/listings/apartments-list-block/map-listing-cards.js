import React from 'react';
import PropTypes from 'prop-types';
import {ApartmentType} from '@perchwell/domain';
import {Grid} from '@material-ui/core';
import styled from 'styled-components';

import {ListingCard} from 'components/listing-cards';
import {getPropertyDetailsLink} from 'helpers/detail-links';

const Container = styled(Grid)`
  overflow: hidden;
  padding-top: ${({theme}) => `${theme.spacing(4)}px`};
`;

function MapListingsCards({apartments, setMapState}) {
  const handleCardMouseEnter = React.useCallback(
    (apartment) => {
      setMapState({
        mapCenter: [
          apartment?.location?.coordinates?.[1],
          apartment?.location?.coordinates?.[0],
        ],
        hoveredApartmentId: apartment.id,
      });
    },
    [setMapState],
  );

  const handleCardMouseLeave = React.useCallback(
    () => setMapState({hoveredApartmentId: null}),
    [setMapState],
  );

  return (
    <Container container spacing={6}>
      {apartments.map((apartment) => {
        return (
          <Grid
            key={apartment.id}
            item
            container
            xs={12}
            md={6}
            lg={6}
            onMouseEnter={() => handleCardMouseEnter(apartment)}
            onMouseLeave={handleCardMouseLeave}
            component="a"
            href={`${window.location.origin.toString()}${getPropertyDetailsLink(
              apartment,
            )}`}
            target="_blank"
          >
            <ListingCard apartment={apartment} />
          </Grid>
        );
      })}
    </Container>
  );
}

MapListingsCards.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType),
  setMapState: PropTypes.func.isRequired,
};

const Memo = React.memo(MapListingsCards);

export {Memo as MapListingsCards};
