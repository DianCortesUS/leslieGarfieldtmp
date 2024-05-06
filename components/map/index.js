import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core';
import ReactMapboxGl, {ZoomControl} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAP_DEFAULT_CENTER = [-73.935242, 40.73061];

const MapboxMap = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoidGJhaWxleXBhbG1lciIsImEiOiJjanQ4dmZnZWEwOXVmNGFwOXdmbHV2aThuIn0.uEjPtivheWmVX1Wxy3dlow',
  minZoom: 10,
});

const mapContainerStyle = {
  height: '100vh',
  width: '100%',
};

const Map = ({
  children,
  onStyleLoad: onStyleLoadProp,
  zoomControlProps,
  ...otherProps
}) => {
  const theme = useTheme();
  const onStyleLoad = useCallback(
    (map) => {
      map.resize();

      if (onStyleLoadProp) {
        onStyleLoadProp(map);
      }
    },
    [onStyleLoadProp],
  );

  return (
    <MapboxMap
      style={theme.palette.map.style}
      containerStyle={mapContainerStyle}
      center={MAP_DEFAULT_CENTER}
      zoom={[8]}
      attributionControl={false}
      onStyleLoad={onStyleLoad}
      {...otherProps}
    >
      {children}
      <ZoomControl position="bottom-right" {...zoomControlProps} />
    </MapboxMap>
  );
};

Map.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onStyleLoad: PropTypes.func,
  zoomControlProps: PropTypes.object,
};

Map.defaultProps = {
  zoomControlProps: {},
};

export {Map, MAP_DEFAULT_CENTER};
