import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import {EmployeeType} from '@perchwell/domain';

import {getAgentDetailsLink} from 'helpers/detail-links';

import {AvatarBlock, EmployeeName, ExternalLink, AgentsCardsAvatar, AgentCardPhone} from './styled-components';

function EmployeeCards({employees}) {
  return (
    <Box overflow="hidden">
      <Grid container spacing={8}>
        {employees.map((employee) => (
          <Grid key={employee.id} item xs={12} sm={6} lg={6}>
            <Link href={getAgentDetailsLink(employee)} passHref>
              <AvatarBlock component="a">
                <AgentsCardsAvatar
                  width="295px"
                  height="295px"
                  mb="20px"
                  image={employee.images?.[0]}
                />
                <EmployeeName align="center" gutterBottom>
                  {employee.first_name} {employee.last_name}
                </EmployeeName>
              </AvatarBlock>
            </Link>
            <Box mt={1}>
              {employee.phone && (
                <Box align="center" mb={1}>
                  <AgentCardPhone>
                    <ExternalLink
                      itemProp="telephone"
                      href={`tel:${employee.phone}`}
                    >
                      {employee.phone}
                    </ExternalLink>
                  </AgentCardPhone>
                </Box>
              )}
              {employee.email && (
                <Box align="center">
                  <AgentCardPhone>
                    <ExternalLink
                      itemProp="email"
                      href={`mailto:${employee.email}`}
                    >
                      {employee.email}
                    </ExternalLink>
                  </AgentCardPhone>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

EmployeeCards.propTypes = {
  employees: PropTypes.arrayOf(EmployeeType),
};

EmployeeCards.defaultProps = {
  employees: [],
};

const Memo = React.memo(EmployeeCards);

export {Memo as EmployeeCards};
