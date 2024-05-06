import React from 'react';
import PropTypes from 'prop-types';
import {AgentType} from '@perchwell/domain';

import {useListings} from 'api';
import {AgentJsonLd} from 'jsonld';
import {Head} from 'components/head';
import {Spinner} from 'components/spinner';

import DetailsBlock from './details-block';
import ActivePropertiesBlock from './active-properties-block';
import TransactionsBlock from './transactions-block';
import { AgentsDetail } from './styled-components';

function AgentDetailsTemplate({agent, breadcrumb}) {
  const {isLoading: isListingsLoading, data: apartments = []} = useListings({
    query: {client_website_employee_id: agent.id, context: 'agent_detail'},
  });

  return (
    <AgentsDetail>
      <Head
        title={
          agent?.page_title ||
          `${agent?.first_name} ${agent?.last_name} | ${agent?.title}`
        }
        description={
          agent?.meta_description ||
          agent?.bio?.split('.').slice(0, 2).join('.')
        }
        breadcrumb={breadcrumb}
      />
      <AgentJsonLd
        name={`${agent.first_name} ${agent.last_name}`}
        email={agent.email}
        phone={agent.phone}
      />
      <DetailsBlock agent={agent} />
      {isListingsLoading ? (
        <Spinner p={6} />
      ) : (
        <>
          <ActivePropertiesBlock apartments={apartments} agent={agent}/>
          <TransactionsBlock apartments={apartments} agent={agent} />
        </>
      )}
    </AgentsDetail>
  );
}

AgentDetailsTemplate.propTypes = {
  agent: AgentType,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export {AgentDetailsTemplate as default};
