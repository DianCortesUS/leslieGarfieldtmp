import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const BoxContainer = styled(Box) `
  position: relative
  component: section
  height: 90px
  color: #bcbfc1;
  margin-top: 90px;
  padding: 15px 0;

  @media (max-width: 1280px) {
    margin-top: 60px;
  }
`

export const FiltersCont = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  .container-filters {
    display: flex;
    align-content: center;
    background-color: #fff;
    border: 1px solid #DEDCDD;
  }

  .m-icon {
    display: flex;
    align-items: center;
    padding: 0 5px;
    cursor: pointer;
  }
`;
