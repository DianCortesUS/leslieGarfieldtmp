import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateEventJsonLd} from '@perchwell/seo';

function EventJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateEventJsonLd(props)}
        key={`jsonld-event${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

EventJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {EventJsonLd};
