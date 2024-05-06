import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from '@material-ui/core';

import {preparePrimaryInfo} from './helpers';
import {Title, MainInfo, MainInfoTitle, PrimaryInfoContainer, DescriptionText} from './styled-components';

function PrimaryInfo({career}) {
  const primaryInfo = useMemo(() => preparePrimaryInfo(career), [career]);

  return (
    <PrimaryInfoContainer>
      <Box
      maxWidth={640}
      mr="auto"
      ml="auto"
      pr={{xs: '4%', md: 0}}
      pl={{xs: '4%', md: 0}}
      pt={10}
      pb={10}
    >
      <Title>{career.position_title}</Title>
      <MainInfo
        bgcolor="transparent"
        pt={2}
        pb={2}
        mt={3}
        mb={5}
      >
        <Grid container>
          {primaryInfo.map(({title, value}, index) => (
            <Grid item container key={index} xs={12} sm={6}>
              <Grid item xs={5}>
                <MainInfoTitle>{title}:</MainInfoTitle>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="subtitle1">{value}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </MainInfo>
      <Box>
        <DescriptionText>{career.position_description}</DescriptionText>
      </Box>
    </Box>
    </PrimaryInfoContainer>
  );
}

PrimaryInfo.propTypes = {
  career: PropTypes.shape({
    id: PropTypes.number,
    position_title: PropTypes.string,
    employment_location: PropTypes.string,
    experience_required: PropTypes.string,
    application_deadline: PropTypes.string,
    position_description: PropTypes.string,
    accepting_applications: PropTypes.bool,
  }),
};

export {PrimaryInfo as default};
