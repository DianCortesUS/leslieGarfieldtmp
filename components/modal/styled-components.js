import { Typography } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { ParsedText } from '@perchwell/components';
import styled from 'styled-components';

export const Backdrop = styled.div`
    z-index: 1100;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(49,49,49,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
`;

export const ModalContainer = styled.div`
    background-color: #EBE9DD;
    padding: 20px 0;
    width: 734px;
    height: 651px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            width: '367px',
            height: '751px',
            padding: '50px 20px',
        },
    })};
`;

export const CloseIconContainer = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    cursor: pointer;
    background-color: transparent;
    border: none;
`;

export const ModalTitle = styled(Typography)`
    font-family: Sweet sans pro;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
`;

export const ModalPropertyName = styled(ParsedText)`
    font-family: Copernicus;
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 30px;
`;

export const ModalForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextFieldName = styled.div`
    display: flex;
    justify-content: space-between;

    .padding-right {
        padding-right: 12px;

        ${({theme}) => ({
            [theme.breakpoints.down('sm')]: {
            paddingRight: 0,
            },
        })};
    }

    .padding-left {
        padding-left: 12px;

        ${({theme}) => ({
            [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            },
        })};
    }

    ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
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

export const ButtonFormDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const SentModalContainer = styled.div`
    background-color: #EBE9DD;
    padding: 20px 0;
    width: 723px;
    height: 266px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;

    ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
            width: '367px',
            height: '266px',
            padding: '50px 20px',
        },
    })};
`;

export const SentModalContent = styled.div`
  font-family: Copernicus;
  font-size: 16px;
  line-height: 28px;
  line-height: 17.21px;
  margin-top: 5px;
  text-align: center;

  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '65%',
        lineHeight: '25px',
        marginTop: '10px',
    },
})};
`;