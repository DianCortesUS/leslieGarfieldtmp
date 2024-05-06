import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {useResponsive} from '@perchwell/hooks';

import {Map} from 'components/map';

import {Layers} from './layers';

function LocationBlock({center: defaultCenter}) {
  const [coordinates] = useState({
    center: defaultCenter,
    zoom: [10],
  });

  const mapHeight = useResponsive({xs: '80vw', sm: '37.2vw'});

  const mapContainerStyle = useMemo(
    () => ({
      height: mapHeight,
    }),
    [mapHeight],
  );

  const pinFeatureСollection = useMemo(
    () => ({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: defaultCenter,
          },
        },
      ],
    }),
    [defaultCenter],
  );

  return (
    <Box>
      <Map
        center={coordinates.center}
        zoom={coordinates.zoom}
        containerStyle={mapContainerStyle}
      >
        <Layers pinFeatureСollection={pinFeatureСollection} />
      </Map>
    </Box>
  );
}

LocationBlock.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export {LocationBlock as default};
