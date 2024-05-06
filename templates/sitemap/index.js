import React from 'react';
import {Typography} from '@material-ui/core';

import {ROUTES} from 'constants/routes';
import {
  NEW_YORK_PROPERTY_KEY,
  INTERNATIONAL_PROPERTY_KEY,
} from 'constants/properties';
import {
  AGENTS_LEGACY_IDS,
  NEIGHBORHOOD_LEGACY_IDS,
  NEW_YORK_PROPERTY_LEGACY_IDS,
  INTERNATIONAL_PROPERTY_LEGACY_IDS,
} from 'constants/legacy';
import {usePageContent} from 'api';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {SubscribeBlock} from 'components/subscribe-block';
import {PageSpinner} from 'components/page-spinner';

import {LinksBlock} from './links-block';
import {LinksList} from './links-list';
import {SubLinksBlock} from './sub-links-block';

function SitemapTemplate() {
  const {isLoading, data = {}} = usePageContent('sitemap');

  return (
    <>
      <Head title="Sitemap" description="Sitemap" />
      <PageSpinner visible={isLoading}>
        <ContentBlock
          bgcolor="primary.main"
          pt={4}
          pb={4}
          mt={2}
          component="section"
        >
          <Typography variant="h2" color="textSecondary">
            {data.components?.header?.labels?.title?.content}
          </Typography>
        </ContentBlock>
        <ContentBlock pt={8} pb={8}>
          <LinksBlock
            title={data.components?.agents?.labels?.title?.content}
            link={ROUTES.AGENTS}
          >
            <LinksList list={generateLegacyLinks(AGENTS_LEGACY_IDS)} />
          </LinksBlock>
          <LinksBlock
            title={data.components?.neighborhoods?.labels?.title?.content}
            link={ROUTES.NEIGHBORHOODS}
          >
            <LinksList list={generateLegacyLinks(NEIGHBORHOOD_LEGACY_IDS)} />
          </LinksBlock>
          <LinksBlock
            title={data.components?.properties?.labels?.title?.content}
            link={ROUTES.LISTINGS}
          >
            <SubLinksBlock
              title="New York"
              link={`${ROUTES.LISTINGS}/${NEW_YORK_PROPERTY_KEY}`}
              list={generateLegacyLinks(NEW_YORK_PROPERTY_LEGACY_IDS)}
            />
            <SubLinksBlock
              title="International"
              link={`${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`}
              list={generateLegacyLinks(INTERNATIONAL_PROPERTY_LEGACY_IDS)}
            />
          </LinksBlock>
        </ContentBlock>
        <SubscribeBlock />
      </PageSpinner>
    </>
  );
}

function generateLegacyLinks(links) {
  return Object.keys(links).map((link) => ({
    link,
    label: links[link].label,
  }));
}

export {SitemapTemplate as default};
