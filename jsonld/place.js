import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generatePlaceJsonLd} from '@perchwell/seo';

function PlaceJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generatePlaceJsonLd(props)}
        key={`jsonld-place${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

PlaceJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {PlaceJsonLd};
