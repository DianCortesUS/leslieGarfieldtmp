import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';

import {TAGS} from 'constants/reports';

export const ReportTitle = styled(Typography)`
  font-weight: 700;
  text-transform: uppercase;
`;

export const ReportBox = styled(Box)`
  ${({theme, tag}) => {
    const tagData = TAGS[tag] ?? {};
    const color = tagData.color ? tagData.color : theme.palette.primary.main;

    return `
      display: block;
      background-color: ${theme.palette.background.default};
      border-top: 10px solid ${color};
      border-bottom: 3px solid ${color};
      transition: all 0.1s ease;
      ${ReportTitle} {
        color: ${color};
      }
      &:hover {
        background-color: ${color};
        color: ${theme.palette.text.secondary};
        ${ReportTitle} {
          color: inherit;
        }
      }
    `;
  }}
`;
