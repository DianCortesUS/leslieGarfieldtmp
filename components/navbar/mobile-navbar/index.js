import React, {useState, useMemo} from 'react';
import {useRouter} from 'next/router';
import {Link} from '../../footer/link';
import { Grid, IconButton, useTheme, Box} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { Container, LinksList, LinkText } from './styled-components';
import { NewLogo } from '../newlogo';
import { LeftIcon } from '../leftArrow';
import {LINKS} from '../constants';
import { RightIcon } from './rightIcon';
import { MEDIA_ICONS_DARK } from 'components/footer/constants';

import {ROUTES} from 'constants/routes';
import {INTERNATIONAL_PROPERTY_KEY} from '../../../constants/properties';

function MobileNavbar() {
  const [isDialogOpen, setDialogIsOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  const router = useRouter();
    const theme = useTheme();
  
    const activeLinkStyle = useMemo(() => ({color: 'black', borderBottom: '1px solid black'}), [
      theme,
    ]);

  const flatLinks = LINKS.map((link) =>
      link.children
        ? link.children.map((subLink) => ({
            ...subLink,
            label: `${subLink.label} ${link.label}`,
          }))
        : link,
    ).flat();

  return (
    <Container container>
      <Grid container className='nav-items'>
        <div className='left'></div>
        <Link href="/" className="Leslie-icon">
          <a>
            <NewLogo />
          </a>
        </Link>
        <IconButton className='buttonIcon' aria-label="Navigation menu" disableRipple onClick={() => setDialogIsOpen(!isDialogOpen)} htmlColor="#000">
          {isDialogOpen ? (
            <LeftIcon />
          ) : (
            <MenuIcon color="black" fontSize="medium" htmlColor="black"/>
          )}
        </IconButton>
      </Grid>

      <div className={ isDialogOpen ? "active-dialog" : "dialog"}>
          <div className="panel-content">
            <LinksList>
              <div className="buy-icon" onClick={() => setPanelOpen(!panelOpen)}>
                {panelOpen ? (
                  <p className="buy">BACK</p>
                ) : (
                  <>
                    <p className="buy">BUY</p>
                    <RightIcon />
                  </>
            )}
              </div>
              {flatLinks.slice(1, 9).map((link, index) => (
                <Box key={index} component="li" pt={1} pb={1}>
                  <Link href={link.to} passHref>
                    <LinkText
                      variant="overline"
                      component="a"
                      isactive={(router.pathname === link.to).toString()}
                      activestyle={activeLinkStyle}
                    className="mobile-links">
                      {link.label}
                    </LinkText>
                  </Link>
                </Box>
              ))}
            </LinksList>
            <div className="social-icons">
              {MEDIA_ICONS_DARK.map(({href, icon: Icon}) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    textAlign: 'center',
                    display: 'flex',
                  }}
                  className="list-item2"
                >
                  <Icon className="media-icons" htmlColor="black"/>
                </Link>
              ))}
            </div>
          </div>
          <div className={ panelOpen ? 'panel-right-active' : 'panel-right'}>
            <LinksList>
              <Box className='mobile-items'>
                <LinkText>
                  <Link href={ROUTES.NEW_YORK_SALES} className="mobile-links">NEW YORK</Link>
                </LinkText>
                <LinkText>
                  <Link href={`${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`} className="mobile-links">INTERNATIONAL</Link>
                </LinkText>
              </Box>
            </LinksList>
          </div>
        </div>
    </Container>
  );
}

export {MobileNavbar};
