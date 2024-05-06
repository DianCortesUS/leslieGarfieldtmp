import styled from 'styled-components';
import {ParsedText} from '@perchwell/components';
import { BlockWrapper } from './block-wrapper';
import { Button } from 'components/buttons/button';
import { ContentBlock } from 'components/content-block';

export const BlockTitle = styled(ParsedText)`
  text-align: center;
  font-weight: bold;
`;

export const BlockSubitle = styled(ParsedText)`
  font-style: normal;
  color: black;
`;

export const BlockWrapperBeliefs = styled(BlockWrapper)`
margin: auto;

.company-beliefs {
  padding: 30px 0;
  width: 70%;
  margin: auto;
  font-family: Copernicus;
}
`

export const CompanyBanner = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 90px;

  @media (max-width: 1280px) {
    margin-top: 60px;
  }

  .company-title {
    font-family: Copernicus;
    font-style: italic;
    font-size: 60px;
    color: white;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 38px;
    }
  }
`

export const ButtonCompany = styled(Button)`
  color: white !important;
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
  }
`

export const DirectorsWrapper = styled(ContentBlock)`
  background-color: #FFF9F0;
  padding: 100px 0;
  text-align: center;

  @media (max-width: 1024px) {
    padding-bottom: 20px;
  }

  .directors-title {
    margin-bottom: 50px;
    font-size: 14px;
    line-height: 18px;
  }
`

export const BlockWrapperAuthority = styled(BlockWrapper)`

  .company-authority {
    width: 85%;
    margin: auto;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .company-authority-text {
    font-family: Copernicus;
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
  }

  .authority-title-text {
    font-size: 14px;
    text-transform: uppercase;
    line-height: 18px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const BlockWrapperWorth = styled(BlockWrapper)`
  background-color: #EDCFDE;
  display: flex;
  justify-content: center;

  .townhouse-worth-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

  }

  .townhouse-worth-text {
    font-family: Copernicus;
    font-size: 28px;
    font-style: italic;
    line-height: 42px;
    margin-bottom: 40px;
    text-align: center;
  }
`
