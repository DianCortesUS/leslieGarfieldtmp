import React from 'react';
import {ApartmentType} from '@perchwell/domain';
import {getFormattedNumber} from '@perchwell/utils';

import {
  getPropertyPrice,
} from 'helpers/property';

import { PropertyDetailsCont, SqftText } from './styled-components';

function DetailsProperty({apartment}) {
  const {
    listing_details,
    unit_details,
  } = apartment;
  const price = listing_details?.current_price;
  const sqft = unit_details?.sqft;
  const propertyType = unit_details?.property_type;

  return (
    <PropertyDetailsCont>
        <div className='property-details-list'>
        {price && (
              <>
                <span>
                  {getPropertyPrice(apartment)}
                </span>{' '}
              </>
            )}
            {sqft && (
              <span>
                {getFormattedNumber(sqft)}{' '}
                <SqftText
                  component="span"
                  display="inline"
                >{`ft<sup>2</sup>`}</SqftText>
              </span>
            )}
            {propertyType && (
              <span className='property-type-detail'>{propertyType}</span>
            )}
        </div>
    </PropertyDetailsCont>
  );
}

DetailsProperty.propTypes = {
  apartment: ApartmentType.isRequired,
};

export {DetailsProperty};
export * from './styled-components';