import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet as StyledComponentSheets} from 'styled-components';
import {ServerStyleSheets as MaterialUiServerStyleSheets} from '@material-ui/core/styles';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/font.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />

          <meta name="geo.region" content="US-NY" />
          <meta name="geo.placename" content="New York City" />
          <meta name="geo.position" content="41.884013;-74.320194" />
          <meta name="ICBM" content="40.7628871, -73.9714047" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-TileImage"
            content="https://lesliegarfield.com/site/themes/main/img/mstile-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:latitude" content="40.7628871" />
          <meta property="og:longitude" content="-73.9714047" />
          <meta property="og:street-address" content="505 Park Ave #303" />
          <meta property="og:locality" content="New York" />
          <meta property="og:region" content="NY" />
          <meta property="og:postal-code" content="10022" />
          <meta property="og:country-name" content="USA" />
          <meta name="google-site-verification" content="uG2Go5Nn4559W6ggZvst7l3_mccLsp0HlTncGN9qiec" />

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MF7HXF');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF7HXF"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
          <script
            id="facebook-jssdk"
            src="https://connect.facebook.net/en_US/sdk.js"
          />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx) => {
  const styledComponentSheet = new StyledComponentSheets();
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />),
          ),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheet.seal();
  }
};

// Resolution order
//
// On the server:
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render
//
// On the server with error:
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render
//
// On the client
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render
