import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box} from '@material-ui/core';

import {Container, LinkText} from './styled-components';

function PublicationTags({tags}) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Container>
      {tags.map((tag, index) => (
        <Box
          key={tag.link}
          component="li"
          display="inline"
          pl={index === 0 ? 0 : 1}
          pr={index === tags.length - 1 ? 0 : 1}
        >
          <Link href={tag.link} passHref>
            <LinkText variant="subtitle1" component="a">
              {tag.label.toUpperCase()}
            </LinkText>
          </Link>
        </Box>
      ))}
    </Container>
  );
}

PublicationTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
};

export {PublicationTags};
