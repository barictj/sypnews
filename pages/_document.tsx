import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  // console.log('doc page')
    return (
      <Html>
        <Head><link rel="shortcut icon" href="/images/favico.ico" /></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }