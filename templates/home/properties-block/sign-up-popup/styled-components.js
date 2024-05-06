import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import {Button as DefaultButton} from 'components/buttons/button';

export const Container = styled.div`
  position: fixed;
  width: 296px;
  height: 236px;
  padding: 8px;
  z-index: 100;
  bottom: 18px;
  right: 18px;
  background-color: ${({theme}) => theme.palette.primary.main};
  transition: all 0.5s;
  ${({theme}) => ({
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  })};
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.7);
`;

export const Title = styled(Typography)`
  font-size: 18px;
  line-height: 27px;
`;

export const Body = styled(Typography)`
  width: 100%;
  font-size: 13px;
  line-height: 20px;
`;

export const Button = styled(DefaultButton)`
  padding: 10px 40px;
  border: ${({theme}) => `1px solid ${theme.palette.common.white}`};
  &:hover {
    background-color: ${({theme}) => theme.palette.primary.main};
  }
`;
