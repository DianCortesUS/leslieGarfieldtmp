import styled from 'styled-components';
import {Button as DefaultButton} from 'components/buttons/button';

export const ButtonMap = styled(DefaultButton)`
  background-color: transparent;
  color: #000;
  border: none;
    &:hover {
      background-color: transparent !important;
      color: #000;
    }
    
    .show-map-text {
      position: relative;
      font-weight: bold;

      &:after {
        content: '';
        height: 1px;
        width: 100%;
        background: black;
        display: block;
        position absolute;
        left: 0;
        bottom: -2.5px;
        opacity: 0;
        transition: all 0.2s;
      }

      &:hover:after {
        opacity: 1;
      }
    }
`;