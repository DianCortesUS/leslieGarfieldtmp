import styled from 'styled-components';
import {Typography, Grid} from '@material-ui/core';

//import {linkStyles} from 'helpers/styles';

export const Container = styled(Grid)`
  background-color: #FFF9F0;
  height: 60px;
  display: flex;
  align-items: center;

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttonIcon {
    z-index: 10;
  }

  div {
    display: hidden;
    min-width: 50px;
  }

  a {
    display: flex;
    justify-content: flex-start;
    max-width: 133px;
    max-height: auto;
  }

  .dialog {
    background-color: #FFF9F0; 
    width: 194px;
    height: 844px;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-in-out;
    display: flex;

    .closeIcon {
      position: absolute;
      right: 0;
    }

    .buy-icon {
      display: flex;
      align-items: center;
    }

    .buy {
      font-size: 12px;
      padding-right: 5px;
    }

    .panel-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 194px;
      height: 844px;
      transform: translateX(-0%);
    }
  }

  .social-icons {
    padding: 20px 30px;
    margin-top: 120px;
    display: flex;

    .list-item2 {
      margin-right: 25px;
    }
  }

  .active-dialog {
    background-color: #FFF9F0; 
    width: 194px;
    height: 844px;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(1%);
    transition: all 0.3s ease-in-out;
    display: flex;

    .buy-icon {
      display: flex;
      align-items: center;
    }

    .buy {
      font-size: 12px;
      padding-right: 5px;
    }

    .panel-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 844px;
    }

    .social-icons {
      padding: 20px 30px;
      margin-top: 120px;
      display: flex;

      .list-item2 {
        margin-right: 25px;
      }
    }
  }

  .panel-right {
    background-color: #FFF9F0;
    width: 194px;
    height: 715px;
    position: absolute;
    top: 130px;
    opacity: 0;
  }
  
  .panel-list-item {
    font-size: 12px;
  }

  .panel-right-active {
    background-color: #FFF9F0;
    width: 194px;
    height: 712px;
    position: absolute;
    top: 130px;
    opacity: 1;
  }
  
  .panel-list-item {
    font-size: 12px;
  }

`;

export const LinksList = styled.ul`
  padding: 16px 36px;
  background-color: #FFF9F0;
  margin-top: 65px;

  .mobile-items {
    margin-top: -80px;
  }

`;

export const LinkText = styled(Typography)`
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #FFF9F0;
  padding: 5px 0;
  margin: 15px 0;

  .mobile-links {
    font-size: 12px;

    &:hover {
      color: black;
    }
  }

  ${({isactive, activestyle}) => isactive === 'true' && activestyle}
`;
