import styled from 'styled-components';
import {Box} from '@material-ui/core';

export const Dropzone = styled(Box)`
  .MuiDropzoneArea-root {
    min-height: 52px;
    margin-bottom: 15px;
    ${({isfocused, theme}) =>
      isfocused === 'true'
        ? `border-color: ${theme.palette.primary.main};`
        : null}
  }
  .MuiDropzoneArea-text {
    margin: 0;
    margin-left: 10px;
    font-style: normal;
    font-weight: bold;
    font-family: Sweet sans pro;
    font-size: 12px;
  }
  .MuiDropzoneArea-textContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    height: 52px;
    padding: 10px;
  }
  .MuiDropzoneArea-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
  .MuiDropzonePreviewList-root {
    width: 100%;
    margin: 0;
  }
  .MuiDropzonePreviewList-image {
    display: none;
  }
  .MuiDropzonePreviewList-removeButton {
    top: -45px;
    right: 8px;
  }
  .MuiDropzonePreviewList-imageContainer {
    padding: 10px;
    & .MuiDropzonePreviewList-removeButton {
      opacity: 1;
    }
  }
`;
