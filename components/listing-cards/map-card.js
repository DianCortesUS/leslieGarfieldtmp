import React, {useMemo} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';
import {ParsedText} from '@perchwell/components';
import {getFormattedNumber, exchangeOriginalImageUrl} from '@perchwell/utils';

import {getPropertyDetailsLink} from 'helpers/detail-links';
import {cleanAddress, getPropertyPrice, getPropertyStatus} from 'helpers/property';

import CardContentDivider from './card-content-divider';
import {
  MapCardContainer,
  ImageGrid,
  MapImage,
  MapInfoGrid,
  Address,
  MapStatusGrid,
} from './styled-components';

function MapListingCard({apartment}) {
  const {media, location, listing_details, unit_details} = apartment;
  const image = media?.original_image_list?.[0];
  const address = cleanAddress(location?.address_with_unit);
  const price = listing_details?.current_price;
  const propertyType = unit_details?.property_type;
  const sqft = unit_details?.sqft;
  const neighborhood = location?.place;
  const status = getPropertyStatus(apartment);

  const isStatusVisible = useMemo(
    () => status !== 'Active' && status !== 'Accepted Offer',
    [status],
  );

  return (
    <MapCardContainer
      href={`${window.location.origin.toString()}${getPropertyDetailsLink(
        apartment,
      )}`}
      target="_blank"
    >
      <Grid container>
        <ImageGrid item xs={6}>
          <MapImage image={exchangeOriginalImageUrl(image)} />
        </ImageGrid>
        <Grid item container xs={6} direction="column" justify="space-between">
          <MapInfoGrid item>
            {address && (
              <>
                <Address variant="caption">{address}</Address>
                <CardContentDivider />
              </>
            )}
            {price && (
              <>
                <Typography variant="caption">
                  {getPropertyPrice(apartment)}
                </Typography>{' '}
                <CardContentDivider />
              </>
            )}
            {propertyType && (
              <Typography variant="caption">{propertyType}</Typography>
            )}
            {sqft && (
              <Typography variant="caption" display="block">
                {getFormattedNumber(sqft)}{' '}
                <ParsedText
                  component="span"
                  display="inline"
                  variant="caption"
                >{`ft<sup>2</sup>`}</ParsedText>
              </Typography>
            )}
            {(propertyType || sqft) && <CardContentDivider />}
            <Typography variant="caption">{neighborhood}</Typography>
          </MapInfoGrid>
          {isStatusVisible && (
            <MapStatusGrid item>
              <Typography variant="caption" color="primary">
                {status}
              </Typography>
            </MapStatusGrid>
          )}
        </Grid>
      </Grid>
    </MapCardContainer>
  );
}

MapListingCard.propTypes = {
  apartment: ApartmentType.isRequired,
};

export {MapListingCard};
