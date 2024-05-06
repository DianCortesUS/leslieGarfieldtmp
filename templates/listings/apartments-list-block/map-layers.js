import React, {useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import {MapContext} from 'react-mapbox-gl';

import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';
import {ApartmentsMapLayer} from 'components/apartments-map-layer';

function MapLayers(props) {
  const router = useRouter();
  const map = useContext(MapContext);

  useEffect(() => {
    // change zoom values if properties are international
    if (router.query.city === INTERNATIONAL_PROPERTY_KEY) {
      map.setMinZoom(3);
      map.setZoom(4);
    }
  }, [router.query.city, map]);

  return <ApartmentsMapLayer {...props} />;
}

const Memo = React.memo(MapLayers);

export {Memo as MapLayers};
