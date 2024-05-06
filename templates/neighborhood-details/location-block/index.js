import React, {
  useEffect,
  useReducer,
  useState,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';
import {useResponsive} from '@perchwell/hooks';

import {GeographyType} from '@perchwell/domain';
import bbox from '@turf/bbox';
import geoViewport from '@mapbox/geo-viewport';

import {ContentBlock} from 'components/content-block';
import {Map} from 'components/map';
import {ApartmentsMapLayer} from 'components/apartments-map-layer';

import {Title} from '../styled-components';

import {Layers} from './layers';

function LocationBlock({center: defaultCenter, geometry, apartments}) {
  const [mapState, setMapState] = useReducer((s, a) => ({...s, ...a}), {
    center: defaultCenter,
    zoom: [10],
    hoveredApartmentId: null,
    activeApartmentId: null,
  });
  const {center, zoom, hoveredApartmentId, activeApartmentId} = mapState;

  const [mapDimensions, setMapDimensions] = useState({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    const newCoordinates = geoViewport.viewport(
      bbox({type: 'Feature', geometry}),
      [mapDimensions.width, mapDimensions.height],
    );
    setMapState({
      center: newCoordinates.center,
      zoom: [newCoordinates.zoom - 1],
    });
  }, [geometry, mapDimensions]);

  const mapHeight = useResponsive({
    xs: '154.6vw',
    sm: '80vw',
    md: '37.2vw',
  });

  const updateMapDimensions = useCallback((width, height) => {
    setMapDimensions({width, height});
  }, []);

  const onMapStyleLoad = useCallback(
    (map) => {
      updateMapDimensions(
        map.getContainer().clientWidth,
        map.getContainer().clientHeight,
      );
    },
    [updateMapDimensions],
  );

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

  const mapContainerStyle = useMemo(
    () => ({
      height: mapHeight,
    }),
    [mapHeight],
  );

  const districtFeatureCollection = useMemo(
    () => ({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry,
        },
      ],
    }),
    [geometry],
  );

  return (
    <ContentBlock pt={8} pb={8} bgcolor="background.header">
      <Box>
        <Box>
          <Title align="center">
            CLOSING LOCATION
          </Title>
        </Box>
        <Box mt={8}>
          <Map
            containerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            onStyleLoad={onMapStyleLoad}
            onClick={handleClickOutsidePopup}
            onZoom={handleZoom}
          >
            <Layers districtFeatureCollection={districtFeatureCollection} />
            <ApartmentsMapLayer
              apartments={apartments}
              state={mapState}
              setState={setMapState}
            />
          </Map>
        </Box>
      </Box>
    </ContentBlock>
  );
}

LocationBlock.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  geometry: GeographyType,
  apartments: PropTypes.arrayOf(ApartmentType),
};

LocationBlock.defaultProps = {
  apartments: [],
};

export {LocationBlock};
