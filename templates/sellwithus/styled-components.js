import { Typography } from '@material-ui/core';
import { ContentBlock } from 'components/content-block';
import styled from 'styled-components';
import { BlockWrapper } from 'templates/company/block-wrapper';

export const SellWithUsContainer = styled.div`
`;

export const BlockWrapperApproach = styled(BlockWrapper)`
    background-color: #DFDBDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 80px 0;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SectionTitle = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const ApproachContentContainer = styled.div`
    width: 80%;
    margin: auto;
`;

export const ApproachContent = styled.div`
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 30px;
`;

export const ApproachButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 50px;
`;

export const Experience = styled(ContentBlock)`
    background-color: #DFDBDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
`;

export const ExperienceBoxes = styled.div`
    display: flex;
    margin-top: 40px;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }
`;

export const ExperienceBox = styled.div`
    text-align: center;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    width: 65%;
    padding: 0 50px;
    margin-bottom: 60px;

        @media (max-width: 1024px) {
            width: 100%;
        }
`;

export const BoxTitle = styled(Typography)`
    font-family: Copernicus;
    font-size: 60px;
    line-height: 68px;
    font-style: italic;
    margin-bottom: 20px;
`;

export const BoxText = styled(Typography)`
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
`;

export const SellQuoteSection = styled(ContentBlock)`
padding: 80px 0;
`;

export const SellQuotesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SellQuoteText = styled(Typography)`
    font-family: Copernicus;
    font-style: italic;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
`;

export const SellQuoteAuthor = styled(Typography)`
    font-size: 13px;
    font-family: Sweet sans pro;
    line-height: 17.21px;
    font-weight: bold;
    margin-top: 30px;
    text-transform: uppercase;
    text-align: center;
`;

export const BlockVideo = styled(ContentBlock)`
    background-color: #DFDBDC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;

    .iframe-video {
        width: 1024px;
        height: 740px;

        @media (min-width: 370px) {
            width: 370px;
            height: 140px;
            margin-top: 0;
        }

        @media (min-width: 400px) {
            width: 400px;
            height: 190px;
            margin-top: 0;
        }

        @media (min-width: 500px) {
            width: 500px;
            height: 290px;
        }

        @media (min-width: 640px) {
            width: 640px;
            height: 490px;
            margin-top: -80px;
        }

        @media (min-width: 740px) {
            width: 740px;
            height: 590px;
            margin-top: -120px;
        }

        @media (min-width: 900px) {
            width: 900px;
            height: 690px;
        }

        @media (min-width: 1024px) {
            width: 1024px;
            height: 740px;
        }

        @media (min-width: 1280px) {
            width: 1280px;
            height: 940px;
            margin-top: -80px;
        }
    }
`;