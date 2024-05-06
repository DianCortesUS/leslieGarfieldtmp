import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Box} from '@material-ui/core';

const StyledBox = styled(Box)`
  > * {
    padding-left: 12%;
    padding-right: 12%;
  }
  ${({theme, desktoppadding = '6.5%'}) => ({
    [theme.breakpoints.down('xs')]: {
      '> *': {
        paddingLeft: '4%',
        paddingRight: '4%',
      },
    },
    [theme.breakpoints.up('lg')]: {
      '> *': {
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: desktoppadding,
        paddingRight: desktoppadding,
      },
    },
    [theme.breakpoints.up(1400)]: {
      '> *': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  })}
`;

function ContentBlock({children, desktopPadding, ...restProps}) {
  return (
    <StyledBox desktoppadding={desktopPadding} {...restProps}>
      {children}
    </StyledBox>
  );
}

ContentBlock.propTypes = {
  children: PropTypes.node.isRequired,
  desktopPadding: PropTypes.string,
};

export {ContentBlock};
