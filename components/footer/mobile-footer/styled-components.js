import styled from 'styled-components';
import {ContentBlock} from '../../../components/content-block';

export const Container = styled(ContentBlock)`
  color: #FFFFFF;
  font-size: 12px;
  padding: 0 !important;

  .footer-up-mobile {
    display: flex;
    justify-content: center;
    padding: 50px 0 !important;
  }

  .footer-icon2 {
    margin-top: 5px !important;
  }

  .footer-right {
    margin-left: 70px;
  }

  .title {
    padding: 0 !important;
  }

  .lists-mobile {
    margin-top: 30px;
    display: flex;
    flex-direction: column
  }

  .lists2 {
    margin-top: 38px;
    display: flex;
    flex-direction: column
  }

  .list-item {
    padding: 0 !important;
  }

  .list-block {
    margin-top: 15px;
  }

  .list-block2 {
    margin-top: 90px;
  }

  .list-item2 {
    padding: 0;
    margin-left: -15px;
  }

  .media-icons {
    width: 20px;
  }

  .footer-low-mobile {
    border-top: 1px solid #999;
    padding: 30px 15px !important; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 9px;
    font-family: Copernicus;
  }

  .footer-lmc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-lmc2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .footer-low-list-mobile {
    display: flex;
    margin-bottom: 20px;
  }

  .footer-low-item-mobile {
    font-size: 9px;
    padding: 0 4px !important;
    font-family: Copernicus;
  }

  .2023-text-mobile {
    font-size: 9px;
    font-family: Copernicus;
  }

`;