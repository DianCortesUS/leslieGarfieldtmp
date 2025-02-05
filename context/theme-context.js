import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {theme} from '../theme';

function ThemeProvider({theme, children}) {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: theme,
};

export {ThemeProvider};
