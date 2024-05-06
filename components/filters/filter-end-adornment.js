import React from 'react';
import PropTypes from 'prop-types';
import {InputAdornment} from '@material-ui/core';
import styled from 'styled-components';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';

const StyledExpandIcon = styled(ExpandIcon)`
  color: ${({theme}) => theme.palette.border.darkGray};
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: ${({isopen}) => (isopen === 'true' ? 'rotateX(180deg)' : '')};
`;

function FilterEndAdornment({isOpen}) {
  return (
    <InputAdornment position="start">
      <StyledExpandIcon isopen={isOpen.toString()} />
    </InputAdornment>
  );
}

FilterEndAdornment.propTypes = {
  isOpen: PropTypes.bool,
};

FilterEndAdornment.defaultProps = {
  isOpen: false,
};

const Memo = React.memo(FilterEndAdornment);

export {Memo as FilterEndAdornment};
