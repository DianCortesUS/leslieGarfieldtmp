import React, {useMemo, useState, useCallback} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Grid, useTheme} from '@material-ui/core';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';

import {ROUTES} from 'constants/routes';
import {INTERNATIONAL_PROPERTY_KEY} from '../../../constants/properties';
import {LINKS} from '../constants';
import { NewLogo }  from '../newlogo';

import {
  Container,
  NavContainer,
  LinksList,
  LinksListItem,
  SubLinksList,
  NavLink,
  SubNavLink,
} from './styled-components';
import { DownIcon } from '../downIcon';
import { UpIcon } from '../upIcon';

const expandIconStyle = {fontSize: '1.1rem', verticalAlign: 'middle'};

function DesktopNavbar() {
  const theme = useTheme();
  const router = useRouter();
  const [focusedLink, setFocusedLink] = useState(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const closeDropdown = useCallback(() => setDropDownOpen(false), []);

  const activeLinkStyle = useMemo(() => ({borderBottom: '1px solid black'}), [
    theme,
  ]);

  const handleLinkFocus = (e) => {
    setFocusedLink(e.target);
  };

  const handleLinkClick = () => {
    if (focusedLink) {
      focusedLink.blur();
    }
  };

  const leftNavSidebar = LINKS.slice(1,4)
  const rightNavSidebar = LINKS.slice(4,8)

  return (
    <Container container alignItems="center">
      <NavContainer item container xs={12} component="nav">
        <LinksList>
          <div className='buy-icon' onClick={() => setDropDownOpen(!dropDownOpen)}>
            <p className='buy'>BUY</p>
            {dropDownOpen ? (
              <UpIcon />
            ) : (
              <DownIcon />
            )}
          </div>
        {leftNavSidebar.map((link, index) => (
          <LinksListItem key={index}>
          <Link href={link.to} passHref>
            <NavLink
              variant="overline"
              component="a"
              onClick={handleLinkClick}
              onFocus={handleLinkFocus}
              isactive={(router.pathname === link.to).toString()}
              activestyle={activeLinkStyle}
            >
              {link.label}
              {link.children && <ExpandIcon style={expandIconStyle} />}
            </NavLink>
          </Link>
          {link.children && (
            <SubLinksList component="ul" boxShadow={1}>
              {link.children.map((subLink, subLinkIndex) => (
                <Link key={subLinkIndex} href={subLink.to} passHref>
                  <SubNavLink
                    variant="overline"
                    display="block"
                    component="a"
                    onClick={handleLinkClick}
                    onFocus={handleLinkFocus}
                    isactive={(router.pathname === subLink.to).toString()}
                    activestyle={activeLinkStyle}
                    noWrap
                  >
                    {subLink.label}
                  </SubNavLink>
                </Link>
              ))}
            </SubLinksList>
          )}
        </LinksListItem>
        ))}
        </LinksList>
        <Link href={ROUTES.HOME} passHref>
          <Grid item container xs={2} alignItems="center" component="a" className='logo'>
            <NewLogo />
          </Grid>
        </Link>
        <LinksList>
          {rightNavSidebar.map((link, index) => (
            <LinksListItem key={index}>
              <Link href={link.to} passHref>
                <NavLink
                  variant="overline"
                  component="a"
                  onClick={handleLinkClick}
                  onFocus={handleLinkFocus}
                  isactive={(router.pathname === link.to).toString()}
                  activestyle={activeLinkStyle}
                >
                  {link.label}
                  {link.children && <ExpandIcon style={expandIconStyle} />}
                </NavLink>
              </Link>
              {link.children && (
                <SubLinksList component="ul" boxShadow={1}>
                  {link.children.map((subLink, subLinkIndex) => (
                    <Link key={subLinkIndex} href={subLink.to} passHref>
                      <SubNavLink
                        variant="overline"
                        display="block"
                        component="a"
                        onClick={handleLinkClick}
                        onFocus={handleLinkFocus}
                        isactive={(router.pathname === subLink.to).toString()}
                        activestyle={activeLinkStyle}
                        noWrap
                      >
                        {subLink.label}
                      </SubNavLink>
                    </Link>
                  ))}
                </SubLinksList>
              )}
            </LinksListItem>
          ))}
        </LinksList>
      </NavContainer>

      <div className={ dropDownOpen ? 'active-dropdown' : 'dropdown-container'}>
        <div className='dropdown-item' onClick={closeDropdown}>
            <Link href={ROUTES.NEW_YORK_SALES} className="dropdown-list-item">NEW YORK</Link>
        </div>
        <div className='dropdown-item' onClick={closeDropdown}>
            <Link href={`${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`} className="dropdown-list-item">INTERNATIONAL</Link>
        </div>
    </div>
    </Container>
  );
}

export {DesktopNavbar};
