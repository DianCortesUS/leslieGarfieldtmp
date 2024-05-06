import styled from 'styled-components';
import {Grid, Select as MuiSelect, MenuItem} from '@material-ui/core';

export const Select = styled(MuiSelect)`
  font-family: sweet sans;
  font-size: 12px;
  margin-left: 5px;
  background-color: transparent;
  .MuiInputBase-input {
    padding-bottom: 6px;
  }
`;

export const SelectItem = styled(MenuItem)`
  color: ${({theme}) => theme.palette.gray.dark};
  font-family: sweet sans;
  font-size: 12px;
`;

export const Container = styled(Grid)`
  font-family: sweet sans;
  width: auto;
  color: ${({theme}) => theme.palette.gray.dark};
  .MuiSelect-select {
    color: ${({theme}) => theme.palette.gray.dark};
  }

  .sort-by-container {
    border-bottom: 1px solid black;
    z-index: 2;
  }

  .sort-by-text {
    font-famly: sweet sans !important;
    font-size: 12px;
    color: black;
    font-weight: 500 !important;
  }
`;
