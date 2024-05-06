import styled from 'styled-components';
import {ParsedText} from '@perchwell/components';

import {Button} from 'components/buttons/button';

export const DownloadButton = styled(Button)`
  padding: 10px 48px;
`;

export const DecoratedContent = styled(ParsedText)`
  &::first-letter {
    float: left;
    ${({theme}) => `
    padding-right: 8px;
    font-size: 450%;
    line-height: 1;
    color: ${theme.palette.primary.main};`}
  }
`;
