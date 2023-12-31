import * as React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { prefix } from '../utils/prefix';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={prefix + '/img/favicon.png'} />
        <link rel="icon" type="image/png" href={prefix + '/img/favicon.png'} />
        <link rel="icon" href={prefix + '/img/favicon.ico'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
