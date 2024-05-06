import React from 'react';
import PropTypes from 'prop-types';
import {Source, Layer} from 'react-mapbox-gl';
import {useTheme} from '@material-ui/core';

function Layers({pinFeatureСollection}) {
  const theme = useTheme();

  return (
    <>
      <Source
        id="pin"
        geoJsonSource={{type: 'geojson', data: pinFeatureСollection}}
      />
      <Layer
        type="circle"
        id="destination-pin"
        sourceId="pin"
        paint={{
          'circle-radius': 8,
          'circle-color': theme.palette.primary.main,
          'circle-stroke-width': 6,
          'circle-stroke-color': theme.palette.primary.main,
          'circle-stroke-opacity': 0.3,
        }}
      />
    </>
  );
}

Layers.propTypes = {
  pinFeatureСollection: PropTypes.object.isRequired,
};

export {Layers};
