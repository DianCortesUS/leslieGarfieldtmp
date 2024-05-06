import React from 'react';
import {usePageContent} from 'api';
import {Head} from 'components/head';
import {PageSpinner} from 'components/page-spinner';
import { ClosingCostsContent } from './styled-components';
import {TableBlock} from './table-block';
import { PageHeader } from 'components/page-header';

function ClosingCostsTemplate() {
  const {isLoading, data = {}} = usePageContent('closing_costs');

  const {components} = data;

  return (
    <ClosingCostsContent>
      <Head title="Closing Costs" description="Closing Costs" />
      <PageSpinner visible={isLoading}>
        <PageHeader>
            {components?.header?.labels?.title?.content}
        </PageHeader>
        <TableBlock costs={components?.body?.item_lists} />
      </PageSpinner>
    </ClosingCostsContent>
  );
}

export {ClosingCostsTemplate as default};
