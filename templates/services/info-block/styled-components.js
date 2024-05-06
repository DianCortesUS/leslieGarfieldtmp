import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

export const Title = styled(ParsedText)`
  font-style: normal;
`;

export const GridContainer = styled(Grid)`
  flex-direction: 'row';
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  })};
`;

export const ServicesBlock = styled.div`
  width: 100%;
  border-top: 3px solid ${({theme}) => theme.palette.border.dark};
  border-bottom: 1px solid ${({theme}) => theme.palette.border.dark};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ServicesListTitle = styled(ParsedText)`
  font-weight: bolder;
`;
