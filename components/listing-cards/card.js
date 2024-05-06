import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';
import {ParsedText} from '@perchwell/components';
import {getFormattedNumber} from '@perchwell/utils';
import {cleanAddress} from 'helpers/property';

import {
  getPropertyPrice,
} from 'helpers/property';

import {
  CardContainer,
  ImageGrid,
  InfoGrid,
  Address,
} from './styled-components';

function ListingCard({apartment}) {
  const {
    media,
    location,
    listing_details,
    unit_details,
    custom_attributes,
  } = apartment;
  const imageUrl = media?.original_image_list?.length > 0 ? media?.original_image_list?.[1] : '';
  const address = cleanAddress(location?.address_with_unit);
  const price = listing_details?.current_price;
  const sqft = unit_details?.sqft;
  const neighborhood = location.place;

  const {image_alt_text = ''} = custom_attributes;

  const image = {
    content_url: imageUrl,
    alt_text: image_alt_text,
  };

  return (
    <CardContainer>
      <Grid container className='card-cont'>
        <ImageGrid item xs={12}>
          <img src={image?.content_url} className='image-properties'/>
        </ImageGrid>
        <Grid item container xs={12} direction="column" justify="space-between">
        <InfoGrid item>
            {address && (
              <div className='address-neighborhood'>
                <Address className='address-text'>{address}</Address>
                <Typography variant="subtitle1" className='neighborhood-text'>{neighborhood}</Typography>
              </div>
            )}
            {price && (
              <div className='price'>
                <Typography variant="subtitle1" className='price-text'>
                  {getPropertyPrice(apartment)}
                </Typography>{' '}
                {sqft && (
              <Typography variant="subtitle1" className='sqft-text'>
                {getFormattedNumber(sqft)}{' '}
                <ParsedText
                  component="span"
                  display="inline"
                  className='sqft-text'
                >{`ft<sup>2</sup>`}</ParsedText>
  
              </Typography>
            )}
              </div>
            )}
          </InfoGrid>
        </Grid>
      </Grid>
    </CardContainer>
  );
}

ListingCard.propTypes = {
  apartment: ApartmentType.isRequired,
};

export {ListingCard};
export * from './styled-components';
