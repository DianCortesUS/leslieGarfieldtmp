import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateOrganizationJsonLd} from '@perchwell/seo';

function OrganizationJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateOrganizationJsonLd(props)}
        key={`jsonld-agent${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

OrganizationJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {OrganizationJsonLd};
