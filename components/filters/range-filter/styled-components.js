import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  width: 100%;
`;

export const MobileContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const InputContainer = styled(Box)`
font-size: 12px;
font-family: sweet sans;

.filter-text {
  font-family: sweet sans;
  font-size: 12px;

  &:focus {
    color: black;
  }
}

  .MuiInputBase-root {
    width: 100%;
    margin-top: 10px;
    height: 40px;
    color: gray;
  }
  .MuiInputBase-input {
    text-align: center;
  }
  .MuiOutlinedInput {
    padding: 9.5px 8px;
  }
  .MuiOutlinedInput-adornedStart {
    padding-left: 0;
  }
  .MuiOutlinedInput-adornedStart {
    padding-left: 8px;
  }
  .MuiOutlinedInput-notchedOutline {
    font-family: sweet sans
    font-size: 12px;;
  }
`;

export const FilterInput = styled.input`
width: 100%;
height: 40%;
border: none;
background-color: lightgray;
text-align: center;
`

export const MobileFilterTitle = styled.div`
font-family: sweet sans;
  font-size: 12px;
  color: black;
  margin-bottom: 10px;

  .mobile-filter-title {
    font-family: sweet sans;
    font-size: 18px;
    color: black;
    margin-bottom: 10px;
  }
`
