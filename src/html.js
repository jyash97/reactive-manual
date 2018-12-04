import React, {Component} from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.error(e);
  }
}

const JS_NPM_URLS = ['//use.fontawesome.com/655968a3e7.js'];

export default class HTML extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      );
    }

    const js = JS_NPM_URLS.map(url => <script key={url} src={url} />);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="https://opensource.appbase.io/reactive-manual/favicon.ico" />
          {this.props.headComponents}
          <script
            // eslint-disable-next-line
						dangerouslySetInnerHTML={{
              __html: `
                ((window.gitter = {}).chat = {}).options = {
                  room: 'appbaseio/reactivesearch'
                };
							`,
            }}
          />
          <script
            // eslint-disable-next-line
						dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:22389,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
							`,
            }}
          />
          <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
          {js}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
