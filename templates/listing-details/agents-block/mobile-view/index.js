import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from '@material-ui/core';
import {AgentType} from '@perchwell/domain';
import Link from 'next/link';

import {Avatar} from 'components/avatar';
import {Divider} from 'components/divider';
import {getAgentDetailsLink} from 'helpers/detail-links';

import {Name, AgentsPhone} from '../styled-components';

function MobileView({agents}) {
  return (
    <>
      <Box pt={2} pb={2}>
        <Grid container>
          {agents.map((agent) => {
            const {id, first_name, last_name, phone, email, images} = agent;

            return (
              <Grid item xs={12} sm={6} key={id}>
                <Box pt={3} pb={0.5}>
                  <Grid container alignItems="center" wrap="nowrap">
                    <Link href={getAgentDetailsLink(agent)} passHref>
                      <a>
                        <Avatar
                          image={images?.[0]}
                          withFallback={false}
                          bgcolor="background.lightGray"
                          minWidth={67}
                          width={67}
                          height={67}
                        />
                      </a>
                    </Link>
                    <Box pl={1}>
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
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

MobileView.propTypes = {
  agents: PropTypes.arrayOf(AgentType),
};

MobileView.defaultProps = {
  agents: [],
};

export {MobileView};
