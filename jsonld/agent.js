import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateAgentJsonLd} from '@perchwell/seo';

function AgentJsonLd({keyOverride, ...props}) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateAgentJsonLd(props)}
        key={`jsonld-agent${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

AgentJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {AgentJsonLd};
