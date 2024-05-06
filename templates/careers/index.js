import React from 'react';
import {Grid, useTheme} from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';
import {ROUTES} from 'constants/routes';
import {useCareers, usePageContent} from 'api';
import {getCareerDetailsLink} from 'helpers/detail-links';
import {Head} from 'components/head';
import {PageSpinner} from 'components/page-spinner';
import { CareersBanner } from 'components/banner/careersBanner';
import {
  CareersTextBlock,
  CareersTextTitle,
  CareersTextContent,
  CareersQuoteText,
  CareersQuoteAuthor,
  CareersNumberText,
  CareersNumberBoxes,
  CareersNumberBox,
  CareersBoxNumber,
  CareersBoxText,
  CareersNumberBoxCenter,
  CareerJoinUs,
  CareerGrowUs,
  CareerJoinUsContainer,
  CareerJoinUsContent,
  CareerJoinUsImage,
  CareerTitleText,
  CareersButtonContainer,
  CareerCardContent,
  CareerCardTitle,
  CareersCard,
  CareersCardsContainer
} from './styled-components';
import { Button } from 'components/buttons/button';

const CareerLink = styled.a`
  display: block;
  padding: 10px;
  text-align: center;
  border: 2px solid ${({theme}) => theme.palette.border.dark};
  user-select: none;
`;

function CareersTemplate() {
  const {isLoading: isStaticLoading, data = {}} = usePageContent('careers');
  const {isLoading: isCareersLoading, data: careers = []} = useCareers({
    accepting_applications: true,
  });
  const theme = useTheme();

  const {components} = data;
  console.log(data);

  return (
    <>
      <Head
        title="NYC Real Estate Jobs | Career Opportunities with Leslie Garfield"
        description="Join the wonderful team at Leslie J. Garfield. If you’re in the market for a new career or job with great support, follow our job listings here!"
      />
      <PageSpinner visible={isStaticLoading || isCareersLoading}>
        <CareersBanner bgcolor="black"
          type={components?.header?.media?.background_image?.type}
          contentURL={components?.header?.media?.background_image?.content_url}
        />
        <CareersTextBlock bgcolor="background.header">
          <CareersTextTitle>
            <strong>{components?.details?.labels?.title?.content}</strong>
          </CareersTextTitle>
          <CareersTextContent>
            {components?.details?.labels?.subtitle?.content}
          </CareersTextContent>
        </CareersTextBlock>
        <CareersTextBlock bgcolor="background.ggColor">
          <CareersQuoteText>
            {components?.testimonial?.labels?.quote?.content}
          </CareersQuoteText>
          <CareersQuoteAuthor>
            {components?.testimonial?.labels?.author?.content}
          </CareersQuoteAuthor>
        </CareersTextBlock>
        <CareersTextBlock bgcolor="background.header">
          <CareersTextTitle>
            <strong>AGENTS BY THE NUMBER</strong>
          </CareersTextTitle>
          <CareersNumberBoxes>
            <CareersNumberBox>
              <CareersBoxNumber>
                {components?.headline_stats?.item_lists?.values?.content?.[0].title}
              </CareersBoxNumber>
              <CareersBoxText>
                {components?.headline_stats?.item_lists?.values?.content?.[0].subtitle}
              </CareersBoxText>
            </CareersNumberBox>
            <CareersNumberBoxCenter>
              <CareersBoxNumber>
                {components?.headline_stats?.item_lists?.values?.content?.[1].title}
              </CareersBoxNumber>
              <CareersBoxText>
                {components?.headline_stats?.item_lists?.values?.content?.[1].subtitle}
              </CareersBoxText>
            </CareersNumberBoxCenter>
            <CareersNumberBox>
              <CareersBoxNumber>
                {components?.headline_stats?.item_lists?.values?.content?.[2].title}
              </CareersBoxNumber>
              <CareersBoxText>
                {components?.headline_stats?.item_lists?.values?.content?.[2].subtitle}
              </CareersBoxText>
            </CareersNumberBox>
          </CareersNumberBoxes>
          <CareersNumberText>
            {components?.headline_stats?.labels?.description?.content}
          </CareersNumberText>
        </CareersTextBlock>
          <CareerJoinUs>
            <CareerJoinUsContainer>
              <CareerTitleText>
                {components?.join_us?.labels?.title?.content}
              </CareerTitleText>
              <CareerJoinUsContent>
                {components?.join_us?.labels?.subtitle?.content}
              </CareerJoinUsContent>
            </CareerJoinUsContainer>
            <CareerJoinUsImage>
                <img src={components?.join_us?.media?.background_image?.content_url} className="join-img" />
            </CareerJoinUsImage>
          </CareerJoinUs>
          <CareerGrowUs>
            <CareerJoinUsImage>
                <img src={components?.grow_with_us?.media?.background_image?.content_url} className="join-img" />
            </CareerJoinUsImage>
            <CareerJoinUsContainer>
              <CareerTitleText>
                {components?.grow_with_us?.labels?.title?.content}
              </CareerTitleText>
              <CareerJoinUsContent>
                {components?.grow_with_us?.labels?.subtitle?.content}
              </CareerJoinUsContent>
            </CareerJoinUsContainer>
          </CareerGrowUs>
        <CareersTextBlock bgcolor="background.header">
          <CareersTextTitle>
            <strong>OUR BENEFITS</strong>
          </CareersTextTitle>
          <CareersCardsContainer>
            {components?.our_benefits?.item_lists?.values.content.map((cont) => (
              <CareersCard>
              <CareerCardTitle>
                <strong>{cont.title}</strong>
              </CareerCardTitle>
              <CareerCardContent>
                {cont.subtitle}
              </CareerCardContent>
            </CareersCard>
            ))}
          </CareersCardsContainer>
          <CareersTextTitle>
            <strong>{components?.about_me?.labels?.title?.content}</strong>
          </CareersTextTitle>
          <CareersNumberText>
            {components?.about_me?.labels?.subtitle?.content}
          </CareersNumberText>
          <CareersButtonContainer>
            <Button to={ROUTES.SELL}>
              GET IN TOUCH
            </Button>
          </CareersButtonContainer>
        </CareersTextBlock>
        <CareersTextBlock bgcolor="background.cream" id="openPositions">
          <CareersTextTitle>
            OPEN POSITIONS
          </CareersTextTitle>
          <Grid container direction="column" alignContent='center'>
              <Grid item container spacing={1} xs={12} lg={6} alignContent='center' style={{ justifyContent: 'center', marginTop: '10px' }}>
                {careers.map((career, index) => (
                  <Grid item key={index} xs={12} sm={6} alignContent='center'>
                    <Link href={getCareerDetailsLink(career)} passHref>
                      <CareerLink>{career.position_title}</CareerLink>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
        </CareersTextBlock>
      </PageSpinner>
    </>
  );
}

export {CareersTemplate as default};
