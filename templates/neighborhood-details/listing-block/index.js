import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid} from '@material-ui/core';
import {useResponsive} from '@perchwell/hooks';
import {NeighborhoodType, ApartmentType} from '@perchwell/domain';

import {ContentBlock} from 'components/content-block';
import {ListingCard} from 'components/listing-cards';
import {List} from 'components/list';
import {
  getPropertyDetailsLink,
  getPropertiesByNeighborhoodLink,
} from 'helpers/detail-links';

import {Title2, LinkText, TitleBox} from '../styled-components';

import {listResponsiveConfig} from './constants';
import { Button } from 'components/buttons/button';

function ListingBlock({neighborhood, apartments}) {
  const {viewMode, containerProps, itemProps} = useResponsive(
    listResponsiveConfig,
  );

  if (apartments.length === 0) {
    return null;
  }

  return (
    <ContentBlock pt={14} pb={12} bgcolor="background.cream">
      <Box>
        <TitleBox>
          <Title2 align="center">
            {neighborhood.name?.toUpperCase()} FEATURED PROPERTIES
          </Title2>
        </TitleBox>
        <Box mt={8}>
          <List viewMode={viewMode} containerProps={containerProps}>
            {apartments.map((apartment) => (
              <Grid key={apartment.id} item {...itemProps}>
                <Link href={getPropertyDetailsLink(apartment)} passHref>
                  <a>
                    <ListingCard apartment={apartment} />
                  </a>
                </Link>
              </Grid>
            ))}
          </List>
        </Box>
        <Box mt={4} textAlign="center">
          <Link href={getPropertiesByNeighborhoodLink(neighborhood)} passHref>
            <LinkText component="a">
              <Button>{`VIEW ALL ${neighborhood.name?.toUpperCase()} TOWNHOUSES`}</Button>
            </LinkText>
          </Link>
        </Box>
      </Box>
    </ContentBlock>
  );
}

ListingBlock.propTypes = {
  neighborhood: NeighborhoodType.isRequired,
  apartments: PropTypes.arrayOf(ApartmentType),
};

ListingBlock.defaultProps = {
  apartments: [],
};

export {ListingBlock};
