import React from 'react';
import PropTypes from 'prop-types';
import {Source, Layer} from 'react-mapbox-gl';
import {useTheme} from '@material-ui/core';

function Layers({districtFeatureCollection}) {
  const theme = useTheme();

  return (
    <>
      <Source
        id="district"
        geoJsonSource={{type: 'geojson', data: districtFeatureCollection}}
      />
      <Layer
        id="district-border"
        type="line"
        sourceId="district"
        paint={{
          'line-color': theme.palette.primary.main,
          'line-width': 2,
        }}
      />
      <Layer
        type="fill"
        id="district-area"
        sourceId="district"
        paint={{
          'fill-opacity': 0.1,
          'fill-color': theme.palette.primary.main,
        }}
      />
    </>
  );
}

Layers.propTypes = {
  districtFeatureCollection: PropTypes.object.isRequired,
};

export {Layers};
