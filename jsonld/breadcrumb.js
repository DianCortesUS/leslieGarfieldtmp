import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {generateBreadcrumbJsonLd} from '@perchwell/seo';

const BreadCrumbJsonLd = ({keyOverride, ...props}) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateBreadcrumbJsonLd(props)}
        key={`jsonld-breadcrumb${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
};

BreadCrumbJsonLd.propTypes = {
  keyOverride: PropTypes.string,
};

export {BreadCrumbJsonLd};
