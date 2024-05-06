import styled from 'styled-components';
import {Banner, ParsedText} from '@perchwell/components';
import { Button } from 'components/buttons/button';

export const PerchwellBanner = styled(Banner)`
margin-top: 90px;

@media (max-width: 1280px) {
  margin-top: 0;
}
`;

export const Subtitle = styled(ParsedText)`
  font-style: normal;
`;

export const ButtonCompany = styled(Button)`
color: white;
border: 1px solid white;

&:hover {
  border: 1px solid black;
}
`
export const OurCompanyBanner = styled.div`

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
export const SellHeader = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .sell-header-title-text {
        font-family: Copernicus;
        font-size: 60px;
        font-style: italic;
        line-height: 68px;
        color: white;

        @media (max-width: 1024px) {
            font-size: 38px;
        }
    }

    .header-text-content {
        margin-bottom: 40px;
        color: white;
        width: 68%;

        @media (max-width: 1024px) {
            width: 90%;
        }
    }

    .sell-header-text-content {
        margin-bottom: 30px;
        color: white;

        @media (min-width: 360px) {
            width: 90%;
        }

        @media (min-width: 600px) {
            width: 70%;
        }

        @media (min-width: 730px) {
            width: 60%;
        }

        @media (min-width: 1024px) {
            width: 50%;
        }

        @media (min-width: 1280px) {
            width: 45%;
        }
    }

    .sell-header-text {
        font-family: Copernicus;
        font-size: 18px;
        line-height: 30px;
        text-align: center;

        @media (max-width: 1024px) {
            font-size: 15px;
        }
    }
`;