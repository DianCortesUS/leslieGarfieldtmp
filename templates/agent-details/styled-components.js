import { Typography } from '@material-ui/core';
import { ParsedText } from '@perchwell/components';
import styled from 'styled-components';

export const AgentsDetail = styled.div`
  background: linear-gradient(#EBE9DD, #FFFFFF);
  margin-top: 90px;

  @media (max-width: 1280px) {
    margin-top: 0;
  }
`;

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;

.agent-properties-title {
  font-family: Sweet sans pro;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 50px;
  padding: 5px 0;
  border-bottom: 1px solid black;
  margin-top: -5px;
}
`;

export const HeadCell = styled(Typography)`
  font-weight: bold;
  font-family: Sweet sans pro;
  font-size: 16px;
`;

export const TableTitle = styled(Typography)`
font-family: Sweet sans pro;
font-size: 36px;
text-transform: uppercase;
`;

export const TableContent = styled(ParsedText)`
font-family: Sweet sans pro;
font-size: 13px;
`;