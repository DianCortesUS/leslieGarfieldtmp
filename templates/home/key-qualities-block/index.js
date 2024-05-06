import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';

import BlockWrapper from '../block-wrapper';
import {AgentTrustIcon, BuildingIcon, RewardIcon} from '../icons';

import {Title, Subtitle} from './styled-components';

const mapKeyToIcons = {
  experience: RewardIcon,
  expertise: BuildingIcon,
  agents: AgentTrustIcon,
};

const iconsStyles = {
  width: '100%',
  height: '100%',
};

function KeyQualitiesBlock({list}) {
  return (
    <BlockWrapper>
      {list.length > 0 && (
        <Grid container>
          <Grid container item justify="center">
            {list.map(({title, subtitle, key}, index) => {
              const Icon = mapKeyToIcons[key];

              return (
                <Grid key={index} item xs={12} md={4} lg={3}>
                  <Box mt={3} p={2}>
                    <Box height={116} mb={2}>
                      <Icon style={iconsStyles} />
                    </Box>
                    <Box textAlign="center" mb={3}>
                      <Title>{title}</Title>
                    </Box>
                    <Subtitle variant="body2">{subtitle}</Subtitle>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </BlockWrapper>
  );
}

KeyQualitiesBlock.propTypes = {
  list: PropTypes.array,
};

KeyQualitiesBlock.defaultProps = {
  list: [],
};

export {KeyQualitiesBlock as default};
