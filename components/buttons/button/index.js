import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ButtonBase, Typography} from '@material-ui/core';
import Link from 'next/link';

const StyledButton = styled(ButtonBase)`
padding: 6px 35px;
color: black;
background-color: transparent;
border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
}
  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      padding: '10px 35px',
    },
  })};
`;

function Button({children, to, variant, ...restProps}) {
  if (to) {
    return (
      <Link href={to} passHref>
        <StyledButton component="a" focusRipple {...restProps}>
          <Typography variant={variant}>{children}</Typography>
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton component="button" focusRipple {...restProps}>
      <Typography variant={variant}>{children}</Typography>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: 'overline',
};

export {Button};
