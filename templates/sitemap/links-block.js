import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Box} from '@material-ui/core';

import {TitleContainer, TitleLink} from './styled-components';

function LinksBlock({title, link, children}) {
  return (
    <Box component="section" mb={3}>
      <TitleContainer mt={2} mb={2} pt={1} pb={1}>
        <NextLink href={link} passHref>
          <TitleLink variant="h6" component="a">
            {title}
          </TitleLink>
        </NextLink>
      </TitleContainer>
      {children}
    </Box>
  );
}

LinksBlock.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const Memo = React.memo(LinksBlock);

export {Memo as LinksBlock};
