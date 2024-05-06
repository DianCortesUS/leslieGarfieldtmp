import {isNil} from '@perchwell/utils';

import {getAgent} from 'rest-api';
import {generateSlugString} from 'helpers/string';
import {getAgentDetailsLink} from 'helpers/detail-links';
import AgentDetailsTemplate from 'templates/agent-details';

export async function getServerSideProps({params, resolvedUrl}) {
  const agent = await getAgent(params.id).then((resp) => resp.data);

  if (isNil(agent)) {
    return {notFound: true};
  }

  if (
    generateSlugString(`${agent.first_name} ${agent.last_name}`) !== params.name
  ) {
    return {
      redirect: {
        destination: getAgentDetailsLink(agent),
        permanent: false,
      },
    };
  }

  return {
    props: {
      agent,
      breadcrumb: [
        {
          item: resolvedUrl,
          name: `${agent.first_name} ${agent.last_name}`,
        },
      ],
    },
  };
}

export default AgentDetailsTemplate;
