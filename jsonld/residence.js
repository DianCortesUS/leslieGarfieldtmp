import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateResidenceJsonLd} from '@perchwell/seo';

function ResidenceJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateResidenceJsonLd(props)}
        key={`jsonld-residence${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

ResidenceJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {ResidenceJsonLd};
