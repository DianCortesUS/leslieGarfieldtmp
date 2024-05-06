import styled, {css} from 'styled-components';
import {Link as ReactScrollLink} from 'react-scroll';

import {STICKY_NAV_HEIGHT} from './constants';

export const Nav = styled.nav`
  height: ${STICKY_NAV_HEIGHT}px;
  position: sticky;
  top: ${({top = 0}) => `${top}px`};
  z-index: ${({theme}) => theme.zIndex.stickyNav};
`;

export const LinksList = styled.ul`
  display: flex;
`;

const activeLinkStyles = css`
  border-top: 3px solid ${({theme}) => theme.palette.border.primary};
  color: ${({theme}) => theme.palette.common.white};
`;

export const Link = styled(ReactScrollLink)`
  display: block;
  color: gray;
  cursor: pointer;
  padding: 16px 20px;
  border: 1px solid transparent;
  border-top: 3px solid transparent;

  &:hover {
    ${activeLinkStyles}
  }
`;

export const ActiveLink = styled(Link)`
  ${activeLinkStyles}
`;
