import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Grid} from '@material-ui/core';

import {ListLink} from './styled-components';

function LinksList({list}) {
  return (
    <Grid container component="ul">
      {list.map((listItem) => (
        <Grid key={listItem.link} component="li" item xs={12} sm={6} lg={4}>
          <NextLink href={listItem.link} passHref>
            <ListLink variant="overline" component="a">
              {listItem.label}
            </ListLink>
          </NextLink>
        </Grid>
      ))}
    </Grid>
  );
}

const LinksListType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
);

LinksList.propTypes = {
  list: LinksListType,
};

export {LinksList, LinksListType};
