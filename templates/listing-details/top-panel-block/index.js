import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';

import TitleLink from './title-link';

import {ROUTES} from 'constants/routes';
import {
  isPropertyInternational,
  getPropertyCity,
  getPropertySimilarPropertiesLink,
  cleanAddress,
} from 'helpers/property';
import { AddressText } from './styled-components'

function TopPanelBlock({apartment}) {
  return (
    <Box>
      {isPropertyInternational(apartment) ? (
        <>
          <TitleLink
            href={getPropertySimilarPropertiesLink(apartment)}
            label={apartment?.location?.place}
          />
          {' | '}
          <Typography variant="subtitle1" component="span">
            {apartment?.location?.city}
          </Typography>
        </>
      ) : (
        <>
          <TitleLink
            href={`${ROUTES.LISTINGS}/${getPropertyCity(apartment)}`}
            label={apartment?.location?.city}
          />
          {' | '}
          <TitleLink
            href={getPropertySimilarPropertiesLink(apartment)}
            label={apartment?.location?.place}
          />
        </>
      )}
      <Box mb={1}>
        <AddressText>
          {cleanAddress(apartment?.location?.address_with_unit)}
        </AddressText>
      </Box>
    </Box>
  );
}

TopPanelBlock.propTypes = {
  apartment: ApartmentType,
};

TopPanelBlock.defaultProps = {
  apartment: {},
};

export {TopPanelBlock as default};
