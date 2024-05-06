import React from 'react';
import {Grid, Box, Hidden} from '@material-ui/core';
import {AgentType} from '@perchwell/domain';

import {ContentBlock} from 'components/content-block';

import MainDataSection from './main-data-section';
import ExtraDataSection from './extra-data-section';
import {TopInfoContainer, BottomInfoContainer, AgentBio, AgentAvatar} from './styled-components';

function DetailsBlock({agent}) {
  const {
    first_name,
    last_name,
    phone,
    email,
    bio,
    images,
    overview_item_list,
  } = agent;

  return (
    <ContentBlock pt={8} pb={8}>
      <TopInfoContainer container justify="space-between">
        <Grid item xs={12} md={4} alignItems="center">
          <AgentAvatar image={images?.[0]} mb={4} />
          <Hidden smDown>
            <ExtraDataSection
              facts={overview_item_list?.content ?? []}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={7}>
          <MainDataSection
            name={`${first_name} ${last_name}`}
            phone={phone}
            email={email}
          />
          <Box mb={{xs: 3, md: 0}} mt={4}>
            {bio && <AgentBio>{bio}</AgentBio>}
          </Box>
        </Grid>
      </TopInfoContainer>
      <BottomInfoContainer container justify="space-between">
      </BottomInfoContainer>
    </ContentBlock>
  );
}

DetailsBlock.propTypes = {
  agent: AgentType,
};

DetailsBlock.defaultProps = {
  agent: {},
};

export {DetailsBlock as default};
