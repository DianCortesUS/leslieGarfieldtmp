import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LinkText } from './styled-components'

function TitleLink({href, label}) {
  return (
    <Link href={href} passHref>
      <LinkText component="a" variant="subtitle1">
        {label}
      </LinkText>
    </Link>
  );
}

TitleLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TitleLink;
