import React from 'react';

import {useNeighborhoods, usePageContent} from 'api';
import {Head} from 'components/head';
import {PageSpinner} from 'components/page-spinner';
import {ContentBlock} from 'components/content-block';
import {NeighborhoodPage} from 'components/neighborhoods-cards/neighborhoods-page';
import { PageHeader } from 'components/page-header';
import { NeighborhoodsContent } from './styled-components';

function NeighborhoodsTemplate() {
  const {
    isLoading: isNeighborhoodsLoading,
    data: neighborhoods = [],
  } = useNeighborhoods();
  const {isLoading: isStaticLoading, data = {}} = usePageContent(
    'neighborhoods',
  );

  const {components, metadata = {}} = data;

  return (
    <NeighborhoodsContent>
      <Head
        title={metadata?.page_title || 'Neighborhoods'}
        description={metadata?.meta_description || 'Neighborhoods'}
      />
      <PageSpinner visible={isNeighborhoodsLoading || isStaticLoading}>
        <PageHeader>
          {components?.header?.labels?.title?.content}
        </PageHeader>
        <ContentBlock width="100%" pt={8} pb={8} bgcolor="background.cream">
          <NeighborhoodPage neighborhoods={neighborhoods} />
        </ContentBlock>
      </PageSpinner>
    </NeighborhoodsContent>
  );
}

export {NeighborhoodsTemplate as default};
