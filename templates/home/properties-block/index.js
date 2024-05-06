import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import {useListings} from 'api';
import {ROUTES} from 'constants/routes';
import {Spinner} from 'components/spinner';
import {ListingCards} from 'components/listing-cards';

import BlockWrapper from '../block-wrapper';
import {Container} from './styled-components';
import SignupPopup from './sign-up-popup';
import { Button } from 'components/buttons/button';

function PropertiesBlock() {
  const {isLoading, data = []} = useListings({
    query: {
      page: 1,
      page_size: 6,
      geography_ids: 1278
    },
  });

  return (
    <>
      <SignupPopup />
      <BlockWrapper
        bgcolor="background.cream"
        textAlign="center"
        desktopPadding="0"
      >
        <Container container>
          <div className='properties-title'>
            <span className='properties-title-text'>FEATURED PROPERTIES</span>
          </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <Box mt={6}>
            <ListingCards apartments={data} />
            <Box mt={{xs: 5, md: 9}} mb={{xs: 0, md: 9}}>
              <Button to={ROUTES.LISTINGS}>SEE ALL SALES</Button>
            </Box>
          </Box>
        )} 
        </Container>
      </BlockWrapper>
    </>
  );
}

PropertiesBlock.propTypes = {
  PropTypes
};

export {PropertiesBlock as default};
