import React from 'react';
import {default as NextLink} from 'next/link';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import styled from 'styled-components';

const LinkText = styled(Typography)`
  &:hover {
    color: ${({theme}) => theme.palette.common.white};
  }
`;

function Link({href, children, ...otherProps}) {
  return (
    <NextLink href={href} passHref>
      <LinkText
        component="a"
        variant="subtitle2"
        display="block"
        {...otherProps}
      >
        {children}
      </LinkText>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Link.defaultProps = {
  href: '',
};

export {Link};
