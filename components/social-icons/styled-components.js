import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.palette.border.darkGray};
  color: ${({theme}) => theme.palette.gray.dark};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:not(:last-child) {
    margin-right: 10px;
  }
  .MuiSvgIcon-root {
    max-width: 17px;
  }
  &:hover {
    background-color: ${({theme}) => theme.palette.background.darkGray};
    color: ${({theme}) => theme.palette.common.white};
  }
`;

export const Container = styled(Box)`
  display: inline-flex;
`;
