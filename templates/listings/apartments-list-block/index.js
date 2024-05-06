import React, {useReducer, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {Grid, Box, Hidden, useMediaQuery} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import {ApartmentType} from '@perchwell/domain';
import {useHeaderHeight} from '@perchwell/hooks';

import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';
import {ListingCards} from 'components/listing-cards';
import {Map, MAP_DEFAULT_CENTER} from 'components/map';

import {
  APARTMENT_VIEW_MODES,
  DEFAULT_MAP_ZOOM,
  DEFAULT_INTERNATIONAL_MAP_CENTER,
  ZOOM_CONTROL_PROPS,
} from '../constants';
import SortBlock from '../sort-block';
import {ShowMapButton} from '../show-map-button';

import {MapLayers} from './map-layers';
import {NoDataBanner} from './no-data-banner';
import {MapListingsCards} from './map-listing-cards';
import {
  HeaderGrid,
  MapGrid,
  MapContainer,
  CloseButtonContainer,
  CloseButton,
  ActionGrid,
  IconsContainer,
  ContentDiv
} from './styled-components';
import { BrownstoneIcon, ContemporaryIcon, ElevatorIcon, GardenIcon, HistoricFacadesIcon, ParkIcon, ParkingIcon, VillagesIcon, WellnessIcon } from 'public/assets/Icons/icons';

function ApartmentsList({
  apartments,
  viewMode,
  sortCallback,
  setViewMode,
  setFilter,
}) {
  const router = useRouter();
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const headerHeight = useHeaderHeight();

  const [mapState, setMapState] = useReducer((s, a) => ({...s, ...a}), {
    center:
      router.query.city === INTERNATIONAL_PROPERTY_KEY
        ? DEFAULT_INTERNATIONAL_MAP_CENTER
        : MAP_DEFAULT_CENTER,
    hoveredApartmentId: null,
    activeApartmentId: null,
  });
  const {center, hoveredApartmentId, activeApartmentId} = mapState;

  const handleClickOutsidePopup = useCallback(() => {
    if (!hoveredApartmentId) {
      setMapState({activeApartmentId: null});
    }
  }, [setMapState, hoveredApartmentId]);

  const handleZoom = useCallback(() => {
    if (activeApartmentId) {
      setMapState({activeApartmentId: null});
    }
  }, [setMapState, activeApartmentId]);

  const handleCloseMapClick = useCallback(
    () => setViewMode(APARTMENT_VIEW_MODES.GRID),
    [setViewMode],
  );

  const mapContainerStyle = useMemo(
    () => ({
      width: '100%',
      height: `calc(100vh - ${headerHeight}px)`,
    }),
    [headerHeight],
  );

  if (apartments.length === 0) {
    return (
      <NoDataBanner onClearFiltersClick={() => setFilter({key: 'default'})} />
    );
  }

  console.log(apartments);

  if (viewMode === APARTMENT_VIEW_MODES.MAP && !isTablet) {
    return (
      <Grid container>
        <HeaderGrid item sm={8}>
          <SortBlock sortCallback={sortCallback} />
          <MapListingsCards apartments={apartments} setMapState={setMapState} />
        </HeaderGrid>
        <MapGrid item sm={4}>
          <MapContainer top={headerHeight}>
            <Map
              containerStyle={mapContainerStyle}
              center={center}
              zoom={DEFAULT_MAP_ZOOM}
              movingMethod="easeTo"
              onClick={handleClickOutsidePopup}
              onZoom={handleZoom}
              zoomControlProps={ZOOM_CONTROL_PROPS}
            >
              <MapLayers
                apartments={apartments}
                state={mapState}
                setState={setMapState}
              />
            </Map>
            <CloseButtonContainer>
              <CloseButton onClick={handleCloseMapClick}>
                <CloseIcon />
              </CloseButton>
            </CloseButtonContainer>
          </MapContainer>
        </MapGrid>
      </Grid>
    );
  }

  return (
    <ContentDiv desktopPadding="0" mb={12}>
      <ActionGrid container justify="space-between">
      <Hidden smDown>
        <SortBlock sortCallback={sortCallback} />
          <ShowMapButton setViewMode={setViewMode} />
        </Hidden>
      </ActionGrid>
      <Box pt={10} pb={4}>
        <ListingCards apartments={apartments} />
      </Box>
    </ContentDiv>
  );
}

ApartmentsList.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType).isRequired,
  viewMode: PropTypes.oneOf(Object.values(APARTMENT_VIEW_MODES)).isRequired,
  sortCallback: PropTypes.func.isRequired,
  setViewMode: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

const Memo = React.memo(ApartmentsList);

export {Memo as ApartmentsList};
