import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Box} from '@material-ui/core';

import {SpinnerIcon} from 'icons';

const ContainerAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const IconContainer = styled(Box)`
  animation: ${ContainerAnimation} 1.5s linear infinite;
`;

const iconStyles = {
  width: '70px',
  height: '70px',
};

function Spinner({...wrapperProps}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...wrapperProps}
    >
      <IconContainer>
        <SpinnerIcon style={iconStyles} />
      </IconContainer>
    </Box>
  );
}

const Memo = React.memo(Spinner);

export {Memo as Spinner};
