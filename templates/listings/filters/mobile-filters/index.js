import React, {useState, useCallback} from 'react';
import {useRouter} from 'next/router';
import {Box, ClickAwayListener} from '@material-ui/core';
import {ContentBlock} from 'components/content-block';

import {NEW_YORK_PROPERTY_KEY} from 'constants/properties';
import {
  NeighborhoodFilter,
  BedsFilter,
  BathsFilter,
  PriceFilter,
  SqftFilter,
  TypeFilter,
} from 'components/filters';

import {
  FiltersContainer,
  Dialog,
  ContentMobile,
  ButtonFilters,
} from './styled-components';

function MobileFilters() {
  const router = useRouter();
  const [isDialogOpen, setDialogIsOpen] = useState(false);
  const openDialog = useCallback(() => setDialogIsOpen(true), []);
  const closeDialog = useCallback(() => setDialogIsOpen(false), []);

  return (
    <ClickAwayListener onClickAway={closeDialog}>
      {isDialogOpen ? (
        <>
          <Dialog
          open
          onClose={closeDialog}
          PaperComponent={FiltersContainer}
          hideBackdrop
          disablePortal
          fullScreen
          style={{ marginTop: '60px' }}
        >
        <ContentMobile>
          <Box>
            <ButtonFilters onClick={closeDialog}>CLOSE</ButtonFilters>
          </Box>
        </ContentMobile>
          <ContentBlock color="gray.dark" bgcolor="background.default" marginTop="10px">
            <Box pb="22.5px" pt="50px">
              {router.query.city === NEW_YORK_PROPERTY_KEY && (
                <NeighborhoodFilter viewMode="mobile" />
              )}
              <BedsFilter viewMode="mobile" />
              <BathsFilter viewMode="mobile" />
              <PriceFilter viewMode="mobile" />
              <SqftFilter viewMode="mobile" />
              <TypeFilter viewMode="mobile" />
            </Box>
          </ContentBlock>
        </Dialog>
        </>
      ) : (
        <ContentMobile>
          <Box>
            <ButtonFilters onClick={openDialog}>FILTERS</ButtonFilters>
          </Box>
        </ContentMobile>
      )}
    </ClickAwayListener>
  );
}

export {MobileFilters};
