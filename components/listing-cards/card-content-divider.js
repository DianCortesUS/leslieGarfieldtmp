import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  width: 20px;
  border-top: 1px solid ${({theme}) => theme.palette.border.dark};
  margin-top: 8px;
  margin-bottom: 8px;
`;

export default React.memo(StyledDivider);
