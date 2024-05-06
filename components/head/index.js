import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import {useRouter} from 'next/router';

import {LEGACY_IDS} from 'constants/legacy';
import {BreadCrumbJsonLd} from 'jsonld';
import {generateStaticBreadcrumbs} from 'helpers/seo';

const htmlTagRegex = /(<([^>]+)>)/gi;

function Head({title, description: initialDescription, breadcrumb}) {
  const router = useRouter();
  const path = router.asPath.split('?')[0];

  const [description, canonical] = React.useMemo(() => {
    return [
      LEGACY_IDS[path]?.description ?? initialDescription,
      `${process.env.HOST}${path}`,
    ];
  }, [path, initialDescription]);

  const breadcrumbItems = React.useMemo(
    () =>
      [...generateStaticBreadcrumbs(path), ...breadcrumb].map(
        (breadcrumb, index) => ({
          ...breadcrumb,
          position: index + 1,
        }),
      ),
    [path, breadcrumb],
  );

  return (
    <>
      <NextHead>
        <title>{title?.replace(htmlTagRegex, '')}</title>
        <meta
          name="description"
          content={description.replace(htmlTagRegex, '')}
        />
        <link rel="canonical" href={canonical} />
      </NextHead>
      <BreadCrumbJsonLd items={breadcrumbItems} />
    </>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

Head.defaultProps = {
  description: '',
  breadcrumb: [],
};

const Memo = React.memo(Head);

export {Memo as Head};
