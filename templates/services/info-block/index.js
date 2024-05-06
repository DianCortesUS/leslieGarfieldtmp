import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {
  GridContainer,
  Title,
  ServicesBlock,
  ServicesListTitle,
} from './styled-components';

import {ServiceBlock, ImageBox} from '../styled-components';

const IMAGE_SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const mapImageSizeToStyles = {
  [IMAGE_SIZES.MEDIUM]: {pt: '74.5%'},
  [IMAGE_SIZES.LARGE]: {pt: '43vw'},
};

function InfoBlock({
  title,
  subtitle,
  description,
  servicesList,
  image,
  imageSize,
}) {
  const imageStyles = useMemo(() => {
    const styles = mapImageSizeToStyles[imageSize];

    if (styles) {
      return styles;
    }

    return mapImageSizeToStyles[IMAGE_SIZES.MEDIUM];
  }, [imageSize]);

  return (
    <ServiceBlock>
      <GridContainer container justify="space-between">
        <Grid item container direction="column" xs={12} md={4}>
          <Grid container justify="space-between">
            <Grid item container xs={12} sm={5} md={12}>
              <Title variant="h5" gutterBottom>
                {title}
              </Title>
              <ParsedText variant="h5" gutterBottom>
                {`&mdash; ${subtitle}`}
              </ParsedText>
              <Box mb={2}>
                <ParsedText variant="subtitle1">{description}</ParsedText>
              </Box>
            </Grid>
            <Grid item container xs={12} sm={5} md={12}>
              <ServicesBlock>
                <ServicesListTitle variant="subtitle2" gutterBottom>
                  Specific Service Delivered
                </ServicesListTitle>
                <Box>
                  {servicesList.map((service, index) => (
                    <Typography key={index} variant="subtitle2">
                      &bull; {service}
                    </Typography>
                  ))}
                </Box>
              </ServicesBlock>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6}>
          <ImageBox image={image} width="100%" {...imageStyles} />
        </Grid>
      </GridContainer>
    </ServiceBlock>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  servicesList: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  imageSize: PropTypes.oneOf(Object.values(IMAGE_SIZES)),
};

InfoBlock.defaultProps = {
  imageSize: IMAGE_SIZES.MEDIUM,
  servicesList: [],
};

export {InfoBlock, IMAGE_SIZES};
