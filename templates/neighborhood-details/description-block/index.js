import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';
import styled from 'styled-components';
import { DescriptionBlockContent } from '../styled-components';

const Desciption = styled(ParsedText)`
  font-family: Copernicus;
  font-size: 16px;
  line-height: 28px;
  width: 70%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 95%;
  }
`;

function DescriptionBlock({description}) {
  return (
    <DescriptionBlockContent bgcolor="background.header">
      <Box pt={10} pb={10}>
        <Desciption align="center">
          {description}
        </Desciption>
      </Box>
    </DescriptionBlockContent>
  );
}

DescriptionBlock.propTypes = {
  description: PropTypes.string.isRequired,
};

export {DescriptionBlock};
