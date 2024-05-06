import React from 'react';

import {useAgents, usePageContent} from 'api';
import {Head} from 'components/head';
import {Banner} from 'components/banner';
import {ContentBlock} from 'components/content-block';
import {PageSpinner} from 'components/page-spinner';

import {EmployeeCards} from './cards';
import { AdvisorsText, AgentsContainer } from './cards/styled-components'

function AgentsTemplate() {
  const {isLoading: isEmployeeLoading, data: employees = []} = useAgents();
  const {isLoading: isStaticLoading, data = {}} = usePageContent('agents');

  const {components, metadata = {}} = data;

  return (
    <AgentsContainer>
      <Head
        title={metadata?.page_title || 'Agents'}
        description={
          metadata?.page_description ||
          'Meet our agents. In-depth real estate knowledge. An entire company as your team. We are Garfield.'
        }
      />
      <PageSpinner visible={isEmployeeLoading || isStaticLoading}>
        <Banner
          type={components?.header?.media?.background_image?.type}
          contentURL={components?.header?.media?.background_image?.content_url}
          title={'Our advisors'}
          titleProps={{color: 'textSecondary'}}
          subtitleProps={{color: 'textSecondary'}}
        />
        <AdvisorsText bgcolor="background.header">
          <p className='advisors-text'>
            We don’t work in isolation. Within Garfield, we’re a family. And within the agent community we’re connectors and a resource. But our reach goes well beyond the brokerage community. 
          </p>
        </AdvisorsText>
        <ContentBlock width="100%" pb={12} bgcolor="background.header">
          <EmployeeCards employees={employees}/>
        </ContentBlock>
      </PageSpinner>
    </AgentsContainer>
  );
}

export {AgentsTemplate as default};
