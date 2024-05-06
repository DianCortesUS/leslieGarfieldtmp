import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import styled from 'styled-components';

import {DesktopNavbar} from './desktop-navbar';
import {MobileNavbar} from './mobile-navbar';

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  background-color: ${({theme}) => theme.palette.common.white};
  z-index: ${({theme}) => theme.zIndex.appBar};
`;

function Navbar() {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  if (isDesktop) {
    return (
      <Header id="expandedHeader">
        <DesktopNavbar />
      </Header>
    );
  }

  return (
    <Header id="mobileHeader">
      <MobileNavbar />
    </Header>
  );
}

export {Navbar};
