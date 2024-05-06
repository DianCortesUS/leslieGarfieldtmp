import React from 'react';

import {usePageContent} from 'api';
import {PageSpinner} from 'components/page-spinner';

import HomeSeo from './home-seo';
import HeaderBlock from './header-block';
import PropertiesBlock from './properties-block';
import QuoteBlock from './quote-block';
import GetValuationBlock from './get-valuation-block';
import NeighborhoodsBlock from './neighborhoods-block';
import ViewPropertiesBlock from './view-properties-block';

function HomeTemplate() {
  const {isLoading, data = {}} = usePageContent('homepage');
  const {components} = data;

  return (
    <>
      <HomeSeo />
      <PageSpinner visible={isLoading}>
        <HeaderBlock
          title={components?.header?.labels?.title?.content}
          subtitle={components?.header?.labels?.subtitle?.content}
          media={components?.header?.media}
        />
        <ViewPropertiesBlock />
        <PropertiesBlock
          title={components?.exclusive_properties?.labels?.title?.content}
          subtitle={components?.exclusive_properties?.labels?.subtitle?.content}
        />
        <GetValuationBlock
          title={components?.get_valuation?.labels?.title?.content}
          subtitle={components?.get_valuation?.labels?.subtitle?.content}
          image={components?.get_valuation?.media?.background?.content_url}
        />
        <NeighborhoodsBlock
          title={components?.our_neighborhoods?.labels?.title?.content}
          subtitle={components?.our_neighborhoods?.labels?.subtitle?.content}
        />
        <QuoteBlock
          title={components?.quote?.labels?.title?.content}
          subtitle={components?.quote?.labels?.subtitle?.content}
        />
      </PageSpinner>
    </>
  );
}

export {HomeTemplate as default};
