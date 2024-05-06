import { ContentBlock } from 'components/content-block';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';

export const SopContainter = styled.div`
    margin-top: 90px;
    background-color: #FFF9F0; 
    padding-bottom: 80px;

    @media (max-width: 1280px) {
        margin-top: 0;
    }
`;

export const SopContentHeader = styled(ContentBlock)`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 50px;
`;

export const SopContentHeaderText = styled(Typography)`
    font-family: Copernicus;
    font-size: 22px;
    line-height: 36px;
    width: 45%;
    text-align: left;

    @media (min-width: 350px) {
        width: 100%;
    }

    @media (min-width: 1280px) {
        width: 80%;
    }

    @media (min-width: 1400px) {
        width: 60%;
    }

    @media (min-width: 1530px) {
        width: 50%;
    }

    @media (min-width: 1920px) {
        width: 45%;
    }
`;

export const SopTextContent = styled(ContentBlock)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SopParagraph = styled(Typography)`
    font-family: Copernicus;
    font-size: 16;
    line-height: 28px;
    width: 45%;
    text-align: left;
    font-weight: 500;
    margin-bottom: 30px;

    @media (min-width: 350px) {
        width: 100%;
    }

    @media (min-width: 1280px) {
        width: 80%;
    }

    @media (min-width: 1400px) {
        width: 60%;
    }

    @media (min-width: 1530px) {
        width: 50%;
    }

    @media (min-width: 1920px) {
        width: 45%;
    }

`;

export const SopListContainer = styled(ContentBlock)`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;     
`;

export const SopListItem = styled.li`
    font-family: Copernicus;
    font-size: 16;
    line-height: 28px;
    width: 63%;
    text-align: left;
    font-weight: 500;
    margin-bottom: 10px;

    @media (min-width: 350px) {
        width: 100%;
    }

    @media (min-width: 1280px) {
        width: 85%;
    }

    @media (min-width: 1400px) {
        width: 65%;
    }

    @media (min-width: 1920px) {
        width: 72%;
    }
`;
