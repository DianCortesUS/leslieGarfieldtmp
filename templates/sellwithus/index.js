import { Button } from 'components/buttons/button'
import {usePageContent} from 'api';
import React from 'react'
import GetValuationBlock from '../home/get-valuation-block/form';
import {
  SellWithUsContainer,
  BlockWrapperApproach,
  Experience,
  ExperienceBoxes,
  ExperienceBox,
  BoxTitle,
  BoxText,
  SellQuoteSection,
  SellQuotesContainer,
  SellQuoteText,
  SellQuoteAuthor,
  BlockVideo,
  SectionTitle,
  TitleContainer,
  ApproachContentContainer,
  ApproachContent,
  ApproachButton,
} from './styled-components';
import { SellBanner } from 'components/banner/sellBanner';
import { Link as ScrollLink } from "react-scroll/modules";

const SellWithUsTemplate = () => {
  const {isLoading, data = {}} = usePageContent('sell');
  const {components} = data;

  return (
    <SellWithUsContainer>
      <SellBanner
          type={components?.header?.media?.background_image?.type}
          contentURL={components?.header?.media?.background_image?.content_url}
      />
      <BlockWrapperApproach>
        <TitleContainer>
          <SectionTitle>
            {components?.approach_text?.item_lists?.title?.content} 
          </SectionTitle> 
        </TitleContainer>
        <ApproachContentContainer>
            <ApproachContent>
              {components?.approach_text?.item_lists?.paragraph_1?.content}
            </ApproachContent>
            <ApproachContent>
              {components?.approach_text?.item_lists?.paragraph_2?.content}
            </ApproachContent>
            <ApproachContent>
              {components?.approach_text?.item_lists?.paragraph_3?.content}
            </ApproachContent>
        </ApproachContentContainer>
        <ApproachButton>
            <Button>
                <ScrollLink to='valuationForm' smooth={true} offset={-130}>GET STARTED</ScrollLink>
            </Button>
        </ApproachButton>
      </BlockWrapperApproach>
      <Experience>
        <TitleContainer>
          <SectionTitle>
            {components?.experience_text?.item_lists?.title?.content} 
          </SectionTitle>
        </TitleContainer>
        <ExperienceBoxes>
            <ExperienceBox>
              <BoxTitle>
                {components?.experience_text?.item_lists?.paragraph_1?.title} 
              </BoxTitle>
              <BoxText>
                {components?.experience_text?.item_lists?.paragraph_1?.content} 
              </BoxText>
            </ExperienceBox>
            <ExperienceBox>
              <BoxTitle>
                {components?.experience_text?.item_lists?.paragraph_2?.title} 
              </BoxTitle>
              <BoxText>
                {components?.experience_text?.item_lists?.paragraph_2?.content} 
              </BoxText>
            </ExperienceBox>
            <ExperienceBox>
              <BoxTitle>
                {components?.experience_text?.item_lists?.paragraph_3?.title} 
              </BoxTitle>
              <BoxText>
                {components?.experience_text?.item_lists?.paragraph_3?.content} 
              </BoxText>
            </ExperienceBox>
        </ExperienceBoxes>
      </Experience>
      <SellQuoteSection bgcolor="background.ggColor">
        <SellQuotesContainer>
          <SellQuoteText>
            {components?.sell_quote?.item_lists?.quote_1?.text}
          </SellQuoteText>
          <SellQuoteAuthor>
            {components?.sell_quote?.item_lists?.quote_1?.author}
          </SellQuoteAuthor>
        </SellQuotesContainer>
      </SellQuoteSection>
      <GetValuationBlock
          title={components?.get_valuation?.labels?.title?.content}
          subtitle={components?.get_valuation?.labels?.subtitle?.content}
          image={components?.get_valuation?.media?.background?.content_url}
        />
      <SellQuoteSection bgcolor="background.pink">
        <SellQuotesContainer>
          <SellQuoteText>
            {components?.sell_quote?.item_lists?.quote_2?.text}
          </SellQuoteText>
          <SellQuoteAuthor>
            {components?.sell_quote?.item_lists?.quote_2?.author}
          </SellQuoteAuthor>
        </SellQuotesContainer>
      </SellQuoteSection>
      <BlockVideo>
        <TitleContainer>
          <SectionTitle>
            {components?.experience_video?.labels?.title?.content}
          </SectionTitle>
        </TitleContainer>
        <iframe
          src={components?.experience_video?.media?.background?.content_url}
          frameBorder="0"
          allowFullScreen
          className='iframe-video'
        />
      </BlockVideo>
      <BlockWrapperApproach>
        <TitleContainer>
          <SectionTitle>
            {components?.approach_details?.item_lists?.title?.content}
          </SectionTitle>
        </TitleContainer>
        <ApproachContentContainer>
          <ApproachContent>
            {components?.approach_details?.item_lists?.paragraph_1?.content}
          </ApproachContent>
          <ApproachContent>
            {components?.approach_details?.item_lists?.paragraph_2?.content}
          </ApproachContent>
          <ApproachButton>
            <Button href="#valuationForm">
                <ScrollLink to='valuationForm' smooth={true} offset={-130}>REQUEST A VALUATION</ScrollLink>
            </Button>
          </ApproachButton>
        </ApproachContentContainer>
      </BlockWrapperApproach>
    </SellWithUsContainer>
  );
};

export default SellWithUsTemplate