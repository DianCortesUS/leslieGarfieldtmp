import styled from 'styled-components';
import {FormControlLabel as MuiFormControlLabel} from '@material-ui/core';
import {
  TreeView as MuiTreeView,
  TreeItem as MuiTreeItem,
} from '@material-ui/lab';

export const FormControlLabel = styled(MuiFormControlLabel)`
  width: 100%;
  margin: 0;
  justify-content: start;
  text-align: left;

`;

export const TreeItem = styled(MuiTreeItem)`
`;

export const TreeView = styled(MuiTreeView)`
  width: 100%;

  .MuiTypography-root {
    word-break: break-word;
  }
  .MuiTreeItem-iconContainer {
    display: none;
  }
  .MuiTreeItem-label {
    padding-left: 0;
  }
  .MuiTreeItem-root > .MuiTreeItem-content > .MuiTreeItem-label:hover,
  .MuiTreeItem-root.Mui-selected
    > .MuiTreeItem-content
    > .MuiTreeItem-label:hover,
  .MuiTreeItem-root.Mui-selected:not(:focus)
    > .MuiTreeItem-content
  }
  .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content > .MuiTreeItem-label {
    background-color: transparent;
  }
  ${({theme}) => ({
    [theme.breakpoints.down('xs')]: {
      '.MuiTreeItem-content': {
        padding: '4px 0',
      },
      '.MuiTreeItem-label': {
        paddingBottom: 2,
      },
      '.MuiCheckbox-root': {
        padding: 0,
        marginRight: '10px',
      },
    },
  })}
`;

export const MobileTypeFiltersContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
`;

export const NeighborhoodFilterList = styled.div`
  font-family: sweet sans;
  font-size: 12px;
`

export const TypeOption = styled.div`
font-family: sweet sans;
font-size: 13px;
`

export const MobileTypeFilterTitle = styled.div`
font-family: sweet sans;
    font-size: 18px;
    color: black;
    margin-bottom: 10px;
`
