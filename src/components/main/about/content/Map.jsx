import React from 'react';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
}
// eslint-disable-next-line import/no-unresolved
from 'react-google-maps';

const position = { lat: -11.87199, lng: -77.12774 };

const Map = (props) => (
  <>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={position}
    />
    <Marker
      position={position}
    />
  </>
    );

export default withScriptjs(
    withGoogleMap(
        Map
    )
);
