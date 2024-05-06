import {css} from 'styled-components';

export const linkStyles = css`
  &:hover {
    color: ${({theme}) => theme.palette.primary.main};
  }
`;
