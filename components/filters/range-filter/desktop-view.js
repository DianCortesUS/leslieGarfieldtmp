import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import {Filter} from '../filter';

import {Container, InputContainer, FilterInput} from './styled-components';

function DesktopView({minProps, maxProps, errorMessage, ...filterProps}) {
  const {label: minLabel, ...restMinProps} = minProps;
  const {label: maxLabel, ...restMaxProps} = maxProps;

  return (
    <Filter {...filterProps}>
      <Container>
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
      </Container>
      {errorMessage ? (
        <Box p={1} mt={2}>
          <Typography color="primary" variant="caption">
            {errorMessage}
          </Typography>
        </Box>
      ) : null}
    </Filter>
  );
}

DesktopView.propTypes = {
  minProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  maxProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  errorMessage: PropTypes.string,
};

const Memo = React.memo(DesktopView);

export {Memo as DesktopView};
