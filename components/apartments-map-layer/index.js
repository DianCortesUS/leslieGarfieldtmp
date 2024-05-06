import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {ApartmentType} from '@perchwell/domain';
import {Layer, Popup, Source} from 'react-mapbox-gl';
import {useTheme} from '@material-ui/core';

import {MapListingCard} from 'components/listing-cards';

const ACTIVE_PIN_COLOR = '#005F49';

function ApartmentsMapLayer({apartments, state, setState}) {
  const theme = useTheme();
  const {hoveredApartmentId = null, activeApartmentId = null} = state;

  const activeApartment = useMemo(
    () => apartments.find((apartment) => apartment.id === activeApartmentId),
    [apartments, activeApartmentId],
  );

  const handlePinMouseEnter = useCallback(
    (event) => {
      if (event.features && event.features.length > 0) {
        setState({
          hoveredApartmentId: event.features[0]?.properties?.id,
        });
      }
    },
    [setState],
  );

  const handlePinMouseLeave = useCallback(
    () => setState({hoveredApartmentId: null}),
    [setState],
  );

  const handlePinClick = useCallback(
    (event) => {
      const feature = event?.features?.[0];
      if (feature) {
        setState({
          activeApartmentId:
            feature?.properties?.id === activeApartmentId
              ? null
              : feature?.properties?.id,
        });
      }
    },
    [setState, activeApartmentId],
  );

  const features = useMemo(
    () =>
      apartments.map((apartment) => ({
        type: 'Feature',
        properties: {
          id: apartment.id,
        },
        geometry: {
          type: 'Point',
          coordinates: [
            apartment?.location?.coordinates?.[1],
            apartment?.location?.coordinates?.[0],
          ],
        },
      })),
    [apartments],
  );

  return (
    <>
      <Source
        id="apartments"
        geoJsonSource={{
          type: 'geojson',
          data: {type: 'FeatureCollection', features},
          cluster: true,
          clusterMaxZoom: 14,
          clusterProperties: {
            apartment_ids: [
              ['concat', ['accumulated'], ['get', 'apartment_ids']],
              ['get', 'id'],
            ],
          },
        }}
      />
      <Layer
        id="clusters"
        type="circle"
        sourceId="apartments"
        filter={['has', 'point_count']}
        paint={{
          'circle-color': [
            'case',
            ['in', hoveredApartmentId, ['get', 'apartment_ids']],
            ACTIVE_PIN_COLOR,
            theme.palette.primary.main,
          ],
          'circle-stroke-width': 6,
          'circle-stroke-color': [
            'case',
            ['in', hoveredApartmentId, ['get', 'apartment_ids']],
            ACTIVE_PIN_COLOR,
            theme.palette.primary.main,
          ],
          'circle-stroke-opacity': 0.3,
          'circle-radius': ['step', ['get', 'point_count'], 10, 10, 20, 20, 30],
        }}
      />
      <Layer
        id="unclustered-points"
        type="circle"
        sourceId="apartments"
        filter={['all', ['!', ['has', 'point_count']]]}
        paint={{
          'circle-color': [
            'case',
            ['==', hoveredApartmentId, ['get', 'id']],
            ACTIVE_PIN_COLOR,
            ['==', activeApartmentId, ['get', 'id']],
            ACTIVE_PIN_COLOR,
            theme.palette.primary.main,
          ],
          'circle-stroke-width': 6,
          'circle-stroke-color': [
            'case',
            ['==', hoveredApartmentId, ['get', 'id']],
            ACTIVE_PIN_COLOR,
            ['==', activeApartmentId, ['get', 'id']],
            ACTIVE_PIN_COLOR,
            theme.palette.primary.main,
          ],
          'circle-stroke-opacity': 0.3,
          'circle-radius': 10,
        }}
        onMouseEnter={handlePinMouseEnter}
        onMouseLeave={handlePinMouseLeave}
        onClick={handlePinClick}
      />
      <Layer
        id="cluster-count"
        type="symbol"
        sourceId="apartments"
        filter={['has', 'point_count']}
        layout={{
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        }}
        paint={{
          'text-color': theme.palette.common.white,
        }}
      />
      {activeApartment && (
        <Popup
          coordinates={[
            activeApartment?.location?.coordinates?.[1],
            activeApartment?.location?.coordinates?.[0],
          ]}
        >
          <MapListingCard apartment={activeApartment} />
        </Popup>
      )}
    </>
  );
}

ApartmentsMapLayer.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType).isRequired,
  state: PropTypes.object,
  setState: PropTypes.func.isRequired,
};

ApartmentsMapLayer.defaultProps = {
  state: {},
};

export {ApartmentsMapLayer};
