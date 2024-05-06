import React from 'react';
import PropTypes from 'prop-types';
import {StylesProvider} from '@material-ui/core/styles';
import {ReactQueryConfigProvider} from 'react-query';
import {Hydrate} from 'react-query/hydration';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MediaProvider} from '@perchwell/components';

import {ThemeProvider} from './theme-context';

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
};

function AppProviders({children, dehydratedState = {}}) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider>
        <CssBaseline />
        <MediaProvider>
          <ReactQueryConfigProvider config={queryConfig}>
            <Hydrate state={dehydratedState}>{children}</Hydrate>
          </ReactQueryConfigProvider>
        </MediaProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.any.isRequired,
  dehydratedState: PropTypes.object,
};

export {AppProviders};
