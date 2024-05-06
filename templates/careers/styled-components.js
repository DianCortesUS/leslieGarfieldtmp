import { Typography } from '@material-ui/core';
import { ContentBlock } from 'components/content-block';
import styled from 'styled-components';

export const CareersTextBlock = styled(ContentBlock)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 0;
`;

export const CareersTextTitle = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    margin-bottom: 35px;
    text-align: center;
`;

export const CareersTextContent = styled(Typography)`
    font-family: Copernicus;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    width: 45%;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '28px',
            width: '100%',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    })};
`;

export const CareersQuoteText = styled(Typography)`
    font-family: Copernicus;
    font-size: 28px;
    line-height: 42px;
    font-style: italic;
    text-align: center;
    margin-bottom: 20px;
`;

export const CareersQuoteAuthor = styled(Typography)`
    font-size: 13px;
    font-family: Sweet sans pro;
    line-height: 17.21px;
    font-weight: bold;
    margin-top: 30px;
    text-transform: uppercase;
    text-align: center; 
`;

export const CareersNumberBoxes = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    justify-content: space-between;
    margin-top: 20px;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    })};
`;

export const CareersNumberText = styled(Typography)`
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    width: 45%;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    })};
`;

export const CareersNumberBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            marginBottom: '50px',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            padding: '0 25px',
        },
    })};
`;

export const CareersNumberBoxCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    border-right: 1px solid black;
    border-left: 1px solid black;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            marginBottom: '50px',
            borderRight: 'none',
            borderLeft: 'none',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            padding: '0 25px',
        },
    })};
`;

export const CareersBoxNumber = styled(Typography)`
    font-family: Copernicus;
    font-size: 52px;
    line-height: 42px;
    margin-bottom: 30px;
`;

export const CareersBoxText = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 12px;
    line-height: 17.21px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;

export const CareerJoinUs = styled.div`
    display: flex;
    background-color: #EBE9DD;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    })};
`;

export const CareerGrowUs = styled.div`
    display: flex;
    background-color: #EBE9DD;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',

        },
    })};
`;

export const CareerJoinUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EBE9DD;
    padding-left: 80px;
    padding-right: 50px;
    max-width: 50%;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            padding: '80px 0',
            alignItems: 'center'
        },
    })};
`;

export const CareerJoinUsImage = styled.div`
    max-width: 50%;
    margin-bottom: -8px;

    .join-img {
        width: 100%;
        height: auto;
    }

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
    })};
`;

export const CareerTitleText = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
`;

export const CareerJoinUsContent = styled(Typography)`
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
    width: 70%;
    text-align: left;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    })};
`;

export const CareersButtonContainer = styled.div`
    margin-top: 30px;
`;

export const CareersCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 346px 346px 346px;
    grid-template-rows: 164px;
    grid-gap: 20px;
    margin-bottom: 120px;

    ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '346px 346px',
        },
    })};

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '346px',
        },
    })};
`;

export const CareersCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 346px;
    height: 164px;
    border: 1.5px solid black;
    padding: 0 30px;
`;

export const CareerCardTitle = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const CareerCardContent = styled(Typography)`
    font-family: Copernicus;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
`;