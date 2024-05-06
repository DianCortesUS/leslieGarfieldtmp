import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@material-ui/core';
import {AgentType} from '@perchwell/domain';
import Link from 'next/link';

import {Avatar} from 'components/avatar';
import {Divider} from 'components/divider';
import {getAgentDetailsLink} from 'helpers/detail-links';

import {InfoContainer} from './styled-components';

import {Name, AgentsPhone} from '../styled-components';

function DesktopView({agents}) {
  return (
    <Box mt={3}>
      {agents.map((agent, index) => {
        const {id, first_name, last_name, phone, email, images} = agent;

        return (
          <React.Fragment key={id}>
            <Box key={index} pt={2} pb={1}>
              <InfoContainer container alignItems="center" wrap="nowrap">
                <Link href={getAgentDetailsLink(agent)} passHref>
                  <a>
                    <Avatar
                      image={images?.[0]}
                      withFallback={false}
                      bgcolor="background.lightGray"
                      minWidth={60}
                      width={60}
                      height={60}
                      mr={1}
                    />
                  </a>
                </Link>
                <Box>
                  <Link href={getAgentDetailsLink(agent)} passHref>
                    <Name component="a">{`${first_name} ${last_name}`}</Name>
                  </Link>
                  {phone && (
                    <a href={`tel:${phone}`}>
                      <AgentsPhone display="block">
                        {phone}
                      </AgentsPhone>
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`}>
                      <AgentsPhone display="block">
                        {email}
                      </AgentsPhone>
                    </a>
                  )}
                </Box>
              </InfoContainer>
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
}

DesktopView.propTypes = {
  agents: PropTypes.arrayOf(AgentType),
};

DesktopView.defaultProps = {
  agents: [],
};

export {DesktopView};
