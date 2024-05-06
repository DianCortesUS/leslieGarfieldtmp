import styled from 'styled-components';
import {ContentBlock} from 'components/content-block';

export const Container = styled(ContentBlock)`
  color: #FFFFFF;
  font-size: 12px;

  Link {
    font-size: 12px;
    line-height: 13.2px;
  }

  .footer {
    max-width: 100%;
  }

  .footer-low {
    max-width: 100%;
    padding: 20px 70px !important;
    display: flex;
    flex-direction: row;
    font-family: Copernicus;
  }

  .footer-low-list {
    display: flex;
  }

  .footer-low-item {
    font-size: 12px;
    font-family: Copernicus;
    padding: 0 20px;

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  .affiliate {
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  .footer-icons {
    padding-top: 15px;
  }

  .footer-icon2 {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
  }

  .footer-up {
    display: flex;
    justify-content: space-between;
    padding: 70px;
    border-bottom: 1px solid #999;
    max-width: 100%;
  }

  .lists {
    display: flex;
  }

  .list-item {
    font-size: 12px;
    font-family: Copernicus;
    padding: 0 20px;

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  .title {
    padding: 0 20px;
    font-size: 12px;
    line-height: 17.21px;
    font-family: Sweet Sans;

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  .2023-text {
    font-size: 12px;
    margin-right: 30px;

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

`;
