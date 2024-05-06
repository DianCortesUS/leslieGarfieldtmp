import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

export const GridContainer = styled(Grid)`

  .text-above {
    font-size: 12px;
    font-weight: bold;
    margin-top: 70px;
    text-transform: uppercase;
  }

  .image-cont {
    background-color: #C1B28A;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    max-height: 770px;
  }

  .image-big-cont {
    cursor: pointer;

    @media (min-width: 370px) {
      width: 333px;
      height: 239px
    }

    @media (min-width: 660px) {
      width: 493px;
      height: 399px
    }

    @media (min-width: 1024px) {
      width: 393px;
      height: 319px
    }

    @media (min-width: 1280px) {
      width: 533px;
      height: 489px
    }

    @media (min-width: 1410px) {
      width: 623px;
      height: 489px;
    }
  }

  .cont-button {
    margin-top: 40px;
    margin-bottom: 70px;
  }

  .cards-cont {
    display: flex;
    max-width: 50%;
    flex-wrap: wrap;
    justify-content: end;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      padding: 0;
      max-width: 100%;
    }
  }

  .card {
    cursor: pointer;
    margin-bottom: 25px;
  }

  .cont-interno {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .lower-container-outside {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .lower-container {
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    justify-content: space-between;
    max-width: 50%;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }
  }

`;

export const CardContainer = styled.div`
padding: 0 12px;
margin-bottom: 10px;

@media (max-width: 1024px) {
  padding: 15px 0;
}

  &:hover {
    
  }

  .n-title-cont {
    margin-top: 5px;
  }

  .n-title-text {
    font-family: sweet sans;
    font-size: 12px;
    text-transform: uppercase;
    border-bottom: 1.5px solid black;
    padding: 3px 0;
  }

  .image-n-properties {
    width: 200px;
    height: auto;

    @media (min-width: 370px) {
      width: 340px;
      height: 226px;
    }

    @media (min-width: 660px) {
      width: 500px;
      height: 333px;
    }

    @media (min-width: 1024px) {
      width: 160px;
      height: 106px;
    }

    @media (min-width: 1280px) {
      width: 240px;
      height: 160px;
    }

    @media (min-width: 1536px) {
      width: 280px;
    }


  }
`;

export const NeighborhoodName = styled.div`
  margin-top: 15px;
`;

export const NeighborhoodNameText = styled(Typography)`
  font-family: Sweet sans pro;
  font-size: 12px;
  line-height: 17.21px;
  text-transform: uppercase;
  font-weight: bold;
`;