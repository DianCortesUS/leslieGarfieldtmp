import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box} from '@material-ui/core';

import {TAGS} from 'constants/reports';

import {TagItem} from './styled-components';

function TagList({tag}) {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {Object.keys(TAGS).map((tagKey, index) => {
        const tagData = TAGS[tagKey];

        return (
          <Box key={index} ml={2} mr={2}>
            <Link href={tagData.link} passHref>
              <TagItem
                variant="subtitle2"
                active={(tag === tagData.value).toString()}
                component="a"
                noWrap
              >
                {tagData.label}
              </TagItem>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

TagList.propTypes = {
  tag: PropTypes.string.isRequired,
};

const Memo = React.memo(TagList);

export {Memo as TagList};
