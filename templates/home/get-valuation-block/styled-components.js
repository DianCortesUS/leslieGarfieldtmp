import styled from 'styled-components';
import {Grid, TextField} from '@material-ui/core';
import { Button } from 'components/buttons/button';

export const Container = styled(Grid)`
padding: 50px 0;
display: flex;
flex-direction: column;
align-items: center;

.evaluation-text-cont {
  font-size: 16px;
  font-family: Copernicus;
  max-width: 50%;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 760px) {
    max-width: 90%;
  }
}

.evaluation-title-text {
  font-size: 14px;
  border-bottom: 1px solid black;
  padding: 6px 0;
  font-weight: bold;
}

.evaluation-button {
  margin-top: 30px;
  font-weight: bold;
}
`;

export const ContainerForm = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .valuation-title-text {
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
  }

  .form-content {
    margin-top: 30px;
  }

  .name-lastname {
    display: flex;
    justify-content: space-between;

    .padding-right {
      padding-right: 12px;

      ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
          paddingRight: 0,
        },
      })};
    }

    .padding-left {
      padding-left: 12px;

      ${({theme}) => ({
        [theme.breakpoints.down('md')]: {
          paddingLeft: 0,
        },
      })};
    }

    ${({theme}) => ({
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    })};
    
  }

  .button-form-div {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    ${({theme}) => ({
      [theme.breakpoints.down('md')]: {
        marginBottom: '40px',
      },
    })};
  }

  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  })};
`;

export const TextFieldForm = styled(TextField)`
  margin-bottom: 25px;

  input {
    font-family: Sweet sans pro;
    font-size: 12px;
    height: 31px;
    border-radius: 0;
    box-shadow: 0px 4px 4px 0px #00000026;
  }
`;

export const ButtonForm = styled(Button)`
  background-color: black;
  color: #EBE9DD;
  padding: 6px 60px;
  font-size: 11px;
  line-height: 17.21px;

  &:hover {
    background-color: white;
    color: black;
  }
`;