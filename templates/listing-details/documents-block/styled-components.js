import styled from 'styled-components';
import {Box, Grid, Typography} from '@material-ui/core';

export const IconContainer = styled(Box)`
  display: inline-block;
  margin-right: 1px;
  margin-bottom: 3px;
  padding: 4px;
  min-width: 30px;
  width: 30px;
  height: 30px;
`;

export const Name = styled(Typography)`
  font-weight: bold;
  font-size: 11px;

  @media (max-width: 740px) {
    font-size: 10px;
  }
`;

export const ActionContainer = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 5px 0;
  align-items: center;
  margin-top: 20px;
  display: flex;
  margin-right: 15px;
`;

export const ActionItemsContainer = styled.div`
display: flex;
align-items: center;

@media (max-width: 1280px) {
  flex-direction: column;
  align-items: start;
}

@media (max-width: 1400px) {
  flex-wrap: wrap;
}

@media (max-width: 959px) {
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
}
`
