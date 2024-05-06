import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';

const adornmentSize = 80;

export const AdornmentTitle = styled(Typography)`
  font-weight: bold;
`;

export const AdornmentTitleContainer = styled(Box)`
  position: absolute;
  top: ${adornmentSize / 2}px;
`;

export const AdornmentContainer = styled(Box)`
  position: absolute;
  top: -${adornmentSize / 2}px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  width: ${adornmentSize}px;
  height: ${adornmentSize}px;
  border-radius: 50%;
`;
