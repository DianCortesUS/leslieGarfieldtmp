import React from 'react';
import {Box} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';
import {default as NextLink} from 'next/link';

import {useListings} from 'api';
import {BuildingAdornmentIcon} from 'icons';
import {ListingCards} from 'components/listing-cards';
import {AdornmentBlock} from 'components/adornment-block';
import {ContentBlock} from 'components/content-block';
import {Spinner} from 'components/spinner';
import {getPropertySimilarPropertiesLink} from 'helpers/property';

import {Link} from './styled-components';

function SimilarPropertiesBlock({apartment}) {
  const geographyIds = apartment.location?.geography_ids ?? [];
  const {isLoading, data: apartments = []} = useListings({
    query: {
      geography_ids: geographyIds[0] ?? [],
      context: 'listing_detail',
      page: 1,
      page_size: 3,
    },
  });

  return (
    <AdornmentBlock
      adornment={BuildingAdornmentIcon}
      adornmentTitle="Similar properties"
      bgcolor="background.gray"
    >
      <ContentBlock pt={12} pb={10} desktopPadding="0">
        {isLoading ? (
          <Spinner p="20px" />
        ) : (
          <>
            <ListingCards apartments={apartments} justify="center" />
            <Box textAlign="center" mt={4}>
              <NextLink
                href={getPropertySimilarPropertiesLink(apartment)}
                passHref
              >
                <Link
                  component="a"
                  variant="subtitle2"
                >{`VIEW ALL ${apartment.location?.place?.toUpperCase()} TOWNHOUSES`}</Link>
              </NextLink>
            </Box>
          </>
        )}
      </ContentBlock>
    </AdornmentBlock>
  );
}

SimilarPropertiesBlock.propTypes = {
  apartment: ApartmentType.isRequired,
};

export {SimilarPropertiesBlock as default};
