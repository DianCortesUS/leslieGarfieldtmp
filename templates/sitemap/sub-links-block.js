import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Box} from '@material-ui/core';

import {LinksList, LinksListType} from './links-list';
import {TitleLink} from './styled-components';

function SubLinksBlock({title, link, list}) {
  return (
    <Box component="section" mb={3}>
      <NextLink href={link} passHref>
        <TitleLink variant="subtitle1" component="a">
          {title}
        </TitleLink>
      </NextLink>
      <LinksList list={list} />
    </Box>
  );
}

SubLinksBlock.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  list: LinksListType,
};

const Memo = React.memo(SubLinksBlock);

export {Memo as SubLinksBlock};
