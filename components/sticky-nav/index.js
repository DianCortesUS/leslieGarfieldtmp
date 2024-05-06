import React, {useEffect, useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {scroller} from 'react-scroll';
import {useMediaQuery} from '@material-ui/core';
import {useHeaderHeight} from '@perchwell/hooks';
import {ParsedText} from '@perchwell/components';

import {ContentBlock} from 'components/content-block';

import {Nav, LinksList, ActiveLink, Link} from './styled-components';
import {STICKY_NAV_HEIGHT} from './constants';

function StickyNav({links}) {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const headerHeight = useHeaderHeight();

  const scrollOffset = useMemo(() => -(STICKY_NAV_HEIGHT + headerHeight), [
    headerHeight,
  ]);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      scroller.scrollTo(hash.replace('#', ''), {
        offset: scrollOffset,
      });
    }
  }, [scrollOffset]);

  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = useCallback((to) => {
    setActiveLink(to);
  }, []);

  const clearActiveLink = useCallback(() => {
    setActiveLink(null);
  }, []);

  if (isSm) {
    return null;
  }

  return (
    <Nav top={headerHeight}>
      <ContentBlock bgcolor="background.dark" overflow="auto">
        <LinksList>
          {links.map((link, index) => {
            const LinkComponent = activeLink === link.to ? ActiveLink : Link;

            return (
              <li key={index}>
                <LinkComponent
                  to={link.to}
                  duration={500}
                  offset={scrollOffset}
                  onSetActive={handleSetActive}
                  onSetInactive={clearActiveLink}
                  hashSpy
                  spy
                  smooth
                >
                  <ParsedText
                    variant="subtitle2"
                    style={{fontWeight: '600'}}
                    noWrap
                  >
                    {link.name}
                  </ParsedText>
                </LinkComponent>
              </li>
            );
          })}
        </LinksList>
      </ContentBlock>
    </Nav>
  );
}

StickyNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Memo = React.memo(StickyNav);

export {Memo as StickyNav};
