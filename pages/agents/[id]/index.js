import {isNil} from '@perchwell/utils';

import {AGENTS_LEGACY_IDS} from 'constants/legacy';
import {getAgent} from 'rest-api';
import {getAgentDetailsLink} from 'helpers/detail-links';
import AgentDetailsTemplate from 'templates/agent-details';
import {removeQueryParams} from 'helpers/seo';

export async function getServerSideProps({params, resolvedUrl}) {
  const legacyAgent = AGENTS_LEGACY_IDS[removeQueryParams(resolvedUrl)];
  const agentId = legacyAgent ? legacyAgent.id : params.id;
  if (!agentId) {
    return {notFound: true};
  }

  const agent = await getAgent(agentId).then((resp) => resp.data);

  if (isNil(agent)) {
    return {notFound: true};
  }

  if (legacyAgent || agent) {
    return {
      props: {
        agent,
        breadcrumb: [
          {
            item: resolvedUrl,
            name:
              legacyAgent?.label ?? `${agent.first_name} ${agent.last_name}`,
          },
        ],
      },
    };
  }

  return {
    redirect: {
      destination: getAgentDetailsLink(agent),
      permanent: false,
    },
  };
}

export default AgentDetailsTemplate;
