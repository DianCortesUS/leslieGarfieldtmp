import { ContentBlock } from 'components/content-block';
import styled from 'styled-components';

export const DisclaimerContent = styled.div`
    margin-top: 90px;
    background-color: #FFF9F0;

    @media (max-width: 1280px) {
        margin-top: 0;
    }
`;

export const DisclaimerTextContainer = (ContentBlock)`
    display: flex;
    justify-content: center;
    align-items: center;
`;