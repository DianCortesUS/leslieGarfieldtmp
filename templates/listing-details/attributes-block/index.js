import React from 'react';
import {Box, Grid, Typography, Hidden, useTheme} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';

import {
  LocationAttributesIcon,
  FeatureAttributesIcon,
  SpecificationAttributesIcon,
} from '../icons';

import {getSpecifications, getFeatures} from './helpers';
import Title from './title';
import {SpecificationTitle, Divider} from './styled-components';

function AttributesBlock({apartment}) {
  const theme = useTheme();

  const specifications = getSpecifications(apartment);
  const features = getFeatures(apartment);

  return (
    <Box bgcolor="background.lightPrimary" color="primary.main" p={2}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box p={1}>
            <Box mb={2}>
              <Title text="SPECIFICATIONS" icon={SpecificationAttributesIcon} />
            </Box>
            <Grid container>
              {specifications.map(({title, value}, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} sm={6}>
                    <SpecificationTitle variant="subtitle2">
                      {title}
                    </SpecificationTitle>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">{value}</Typography>
                  </Grid>
                  <Hidden smUp>
                    <Divider
                      color={theme.palette.primary.light}
                      mt={1}
                      mb={1}
                      mr={-3}
                      ml={-3}
                    />
                  </Hidden>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={1}>
            <Box mb={2}>
              <Title text="LOCATION" icon={LocationAttributesIcon} />
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle2">
                {apartment?.location?.cross_streets?.join(' & ')}
              </Typography>
            </Box>
            <Box mb={2}>
              <Title text="KEY FEATURES" icon={FeatureAttributesIcon} />
            </Box>
            <Box>
              {features.map((feature, index) => (
                <Typography key={index} variant="subtitle2">
                  {feature}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

AttributesBlock.propTypes = {
  apartment: ApartmentType,
};

AttributesBlock.defaultProps = {
  apartment: {},
};

const Memo = React.memo(AttributesBlock);

export {Memo as default};
