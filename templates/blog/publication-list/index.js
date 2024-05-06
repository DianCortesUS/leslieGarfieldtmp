import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {PublicationType} from '@perchwell/domain';

import {PublicationPost} from '../publication-post';

function PublicationList({publications, queryKey}) {
  return publications.map((publication) => (
    <Box key={publication.id} width="100%" mb={5}>
      <PublicationPost publication={publication} queryKey={queryKey} />
    </Box>
  ));
}

PublicationList.propTypes = {
  publications: PropTypes.arrayOf(PublicationType).isRequired,
  queryKey: PropTypes.string,
};

export {PublicationList};
