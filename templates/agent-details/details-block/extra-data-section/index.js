import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {PublicationType} from '@perchwell/domain';


import {Title, ContentSubtitle} from './styled-components';

function ExtraDataSection({ facts }) {
  return (
    <Box>
      {facts.length > 0 &&
        facts.map(({title, subtitle}, index) => (
          <Box key={index} mb={3}>
            <Title>{title}</Title>
            <ContentSubtitle>{subtitle}</ContentSubtitle>
          </Box>
        ))}
    </Box>
  );
}

ExtraDataSection.propTypes = {
  facts: PropTypes.array,
  press: PropTypes.arrayOf(PublicationType),
};

ExtraDataSection.defaultProps = {
  facts: [],
  press: [],
};

export {ExtraDataSection as default};
