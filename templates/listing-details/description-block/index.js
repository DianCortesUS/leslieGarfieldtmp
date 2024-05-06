import React from 'react';
import {Box} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';
import {ParsedText} from '@perchwell/components';

function DescriptionBlock({apartment}) {
  const description = apartment?.listing_details?.description;

  return (
    <Box pt={3} mb={3}>
      <ParsedText>{description}</ParsedText>
    </Box>
  );
}

DescriptionBlock.propTypes = {
  apartment: ApartmentType,
};

DescriptionBlock.defaultProps = {
  apartment: {},
};

export {DescriptionBlock as default};
