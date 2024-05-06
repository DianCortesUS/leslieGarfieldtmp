import styled from 'styled-components';
import {ParsedText} from '@perchwell/components';

export const Title = styled(ParsedText)`
  font-weight: bold;
`;

export const Subtitle = styled(ParsedText)`
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  })};
`;
