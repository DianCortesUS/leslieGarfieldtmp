import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from '@material-ui/core';
import {ParsedText, Logo} from '@perchwell/components';

import {ROUTES} from 'constants/routes';
import {Button} from 'components/buttons/button';

import BlockWrapper from '../block-wrapper';

import {Container} from './styled-components';

function HowSellBlock({title, subtitle, image}) {
  return (
    <BlockWrapper>
      <Container container justify="space-between">
        <Grid item xs={12} md={6}>
          {title && (
            <Box mb={{xs: 3, lg: 6}}>
              <ParsedText variant="h3">{title}</ParsedText>
            </Box>
          )}
          <Grid>
            {subtitle && (
              <Grid item md={10}>
                <Box mb={{xs: 2, lg: 6}}>
                  <ParsedText variant="body2">{subtitle}</ParsedText>
                </Box>
              </Grid>
            )}
            <Button to={ROUTES.SERVICES}>SEE HOW WE SELL</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box mt={{xs: 6, lg: 0}} mb={6}>
            <Logo src={image} alt="selling process" />
          </Box>
        </Grid>
      </Container>
    </BlockWrapper>
  );
}

HowSellBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export {HowSellBlock as default};
