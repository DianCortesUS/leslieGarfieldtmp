import styled from 'styled-components';
import {ParsedText} from '@perchwell/components';

import {linkStyles} from 'helpers/styles';

export const Title = styled(ParsedText)`
  font-weight: bold;
  font-family: Sweet sans pro;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const PublicationTitle = styled(ParsedText)`
  ${linkStyles};
  text-decoration: underline;
`;

export const ContentSubtitle = styled(ParsedText)`
font-family: Sweet sans pro;
font-size: 12px;
line-height: 10px;

@media (max-width: 1280px) {
  line-height: 11px;
}

a {
  text-decoration: none;
}
`;
