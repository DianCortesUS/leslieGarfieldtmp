import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';

import {Spinner} from 'components/spinner';

const LoadMore = styled(Typography)`
  color: ${({theme}) => theme.palette.primary.main};
  border: 1px solid ${({theme}) => theme.palette.primary.main};
  padding: 15px 28px;
  cursor: pointer;
`;

function LoadMoreButton({onClick, isLoading, ...restProps}) {
  return isLoading ? (
    <Spinner />
  ) : (
    <LoadMore
      component="a"
      variant="subtitle1"
      onClick={onClick}
      {...restProps}
    >
      Load more
    </LoadMore>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

LoadMoreButton.defaultProps = {
  isLoading: false,
};

export {LoadMoreButton};
