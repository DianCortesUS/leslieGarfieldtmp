import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@material-ui/core';

import {MobileContainer, InputContainer, FilterInput, MobileFilterTitle} from './styled-components';

function MobileView({title, minProps, maxProps, errorMessage}) {
  const {label: minLabel, ...restMinProps} = minProps;
  const {label: maxLabel, ...restMaxProps} = maxProps;

  return (
    <>
      <MobileFilterTitle gutterBottom>
        <span className='mobile-filter-title'>{title}</span>
      </MobileFilterTitle>
      <MobileContainer mb={2}>
        <InputContainer>
          <div className='filter-text' component="p">
            {minLabel}
          </div>
          <FilterInput name="min" {...restMinProps} />
        </InputContainer>
        <InputContainer>
          <div className='filter-text' component="p"> 
            {maxLabel}
          </div>
          <FilterInput name="max" {...restMaxProps} />
        </InputContainer>
      </MobileContainer>
      {errorMessage ? (
        <Box>
          <Typography color="primary" variant="caption">
            {errorMessage}
          </Typography>
        </Box>
      ) : null}
    </>
  );
}

MobileView.propTypes = {
  title: PropTypes.string.isRequired,
  minProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  maxProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  errorMessage: PropTypes.string,
};

const Memo = React.memo(MobileView);

export {Memo as MobileView};
