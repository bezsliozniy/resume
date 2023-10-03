import * as React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { prefix } from '../utils/prefix';
import icon from '../public/img/favicon.ico'
import iconPng from '../public/img/favicon.png'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href={prefix === '' ? '/img/favicon.png' : prefix + '/img/favicon.png'} />
        <link rel="icon" href={prefix === '' ? '/img/favicon.ico' : prefix + '/img/favicon.ico'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
