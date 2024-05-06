import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateProductJsonLd} from '@perchwell/seo';

function ProductJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateProductJsonLd(props)}
        key={`jsonld-product${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

ProductJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {ProductJsonLd};
