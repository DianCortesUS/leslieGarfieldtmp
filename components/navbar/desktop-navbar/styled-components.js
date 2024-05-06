import styled from 'styled-components';
import {Box, Typography, Grid} from '@material-ui/core';

import {linkStyles} from 'helpers/styles';

export const Container = styled(Grid)`
  height: 90px;
  background-color: #FFF9F0;
  font-size: 12px;
  display: flex;
  justify-content: center;

  .logo {
    display: flex;
    justify-content: center;
    padding-left: 75px;
  }

  .dropdown-container {
    background-color: #FFF9F0;
    position: absolute;
    left: 50px;
    top: 91px;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  .dropdown-item {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 60px;
    font-size: 12px;

    &:hover {
      background-color: white;
      color: black;
    }

    .dropdown-list-item {
      font-size: 12px;

      &:hover {
        color: black;
      }
    }
  }

  .active-dropdown {
    background-color: #FFF9F0;
    position: absolute;
    left: 50px;
    top: 91px;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all 0.2s ease-in-out;

    .dropdown-item {
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 15px;
      padding-right: 60px;
      font-size: 12px;

      &:hover {
        background-color: white;
        color: black;
      }

      .dropdown-list-item {
        font-size: 12px;

        &:hover {
          color: black;
        }
      }
    }
  }

`;

export const NavContainer = styled(Grid)`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LinksList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding: 0 38px;
  display: flex;
  height: 100%;
  align-items: center;

  .buy {
    padding: 1px 5px;
  }

  .buy-icon {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-left: 30px;
    padding: -20px 0;
    cursor: pointer;
    position: relative;

    &:after {
      content: '';
      height: 1.4px;
      width: 100%;
      background: black;
      position: absolute;
      display: block;
      left: 1px;
      bottom: 10px;
      opacity: 0
    }

    &:hover:after {
      opacity: 1;
    }
  }

`;

export const SubLinksList = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: ${({theme}) => theme.palette.common.white};
  font-family: Copernicus;
`;

export const LinksListItem = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;

  > ${SubLinksList} {
    display: none;
  }

  &:hover > ${SubLinksList} {
    display: block;
  }

  &:focus-within > ${SubLinksList} {
    display: block;
  }
`;

export const NavLink = styled(Typography)`
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 1px;
  margin: 0 25px;
  position: relative;

  &:after {
    content: '';
    height: 1px;
    width: 100%;
    background: black;
    display: block;
    position absolute;
    left: 0;
    bottom: -2.5px;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover:after {
    opacity: 1;
  }

  ${({isactive, activestyle}) => isactive === 'true' && activestyle}

`;

export const SubNavLink = styled(NavLink)`
  padding: 8px 20px;

`;
