import { ParsedText } from '@perchwell/components';
import {ContentBlock} from 'components/content-block';
import {Box} from '@material-ui/core';
import styled from 'styled-components';

export const ClosingCostsContent = styled.div`
    margin-top: 90px;

    @media (max-width: 1280px) {
        margin-top: 0;
      }
`;

export const TableContent = styled(ContentBlock)`
    background-color: #FFF9F0;
`;

export const BoxTitle = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TableTitle = styled(ParsedText)`
    font-family: Copernicus;
    font-size: 28px;
    line-height: 42px;
`;

export const TableSubtitle = styled(ParsedText)`
    font-family: Sweet sans pro;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
`;

