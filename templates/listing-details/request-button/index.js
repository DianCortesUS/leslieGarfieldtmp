import React from 'react';
import {Button} from 'components/buttons/button';
import styled from 'styled-components';

const ButtonRequest = styled(Button)`
background-color: black;
color: #EBE9DD;
padding: 8px 30px;
width: 257px;
height: 32px;
margin-top: 20px;

&:hover {
  background-color: white;
  color: black;
}

@media (max-width: 1280px) {
  width: 200px;
}

@media (max-width: 959px) {
  width: 340px;
}

@media (max-width: 400px) {
  width: 300px;
}
`

function RequestButton(props) {
  return <ButtonRequest {...props}>REQUEST INFO</ButtonRequest>;
}

const Memo = React.memo(RequestButton);

export {Memo as default};
