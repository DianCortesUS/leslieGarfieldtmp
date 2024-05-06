import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';
import {Box} from '@material-ui/core';

export const HeaderBox = styled(Box)`
margin-top: 90px;

@media (max-width: 1280px) {
  margin-top: 0;
}
`

export const Subtitle = styled(ParsedText)`
  font-weight: normal;
  margin-top: 55px;
  line-height: 30px;

  @media (max-width: 760px) {
    font-size: 15px;
    padding: 0 60px;
    margin-top: 40px;
  }
`;

export const ContentContainer = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.palette.common.black};
  opacity: 0.3;
`;
