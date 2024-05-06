import 'polyfills';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ReactQueryDevtools} from 'react-query-devtools';
import styled from 'styled-components';

// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   // eslint-disable-next-line no-console
//   console.debug('Applying whyDidYouRender');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

import 'styles.css';

import {AppProviders} from 'context';
import {Navbar} from 'components/navbar';
import {Footer} from 'components/footer';

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

function App({Component, pageProps}) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1637077719911107',
        xfbml: true,
        version: 'v6.0',
      });
    };
  }, []);

  return (
    <React.Fragment>
      <AppProviders dehydratedState={pageProps.dehydratedState}>
        <Navbar />
        <Main className="main">
          <Component {...pageProps} />
        </Main>
        <Footer />
      </AppProviders>
      <ReactQueryDevtools initialIsOpen />
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
