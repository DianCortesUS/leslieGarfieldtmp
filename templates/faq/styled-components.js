import { ParsedText } from '@perchwell/components';
import styled from 'styled-components';

export const FaqContent = styled.div`
    margin-top: 90px;
    background-color: #FFF9F0;

    @media (max-width: 1280px) {
        margin-top: 0;
    }
`;

export const FloatingBoxTitle = styled(ParsedText)`
    font-family: Sweet sans pro;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
`;

export const QuestionsTitle = styled(ParsedText)`
    font-family: Sweet sans pro;
    font-size: 14px;
    font-weight: bold;
`;

export const QuestionsContent = styled(ParsedText)`
    font-family: Copernicus;
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 30px;
`;