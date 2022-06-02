import {
  Html, Head, Main, NextScript
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://accounts.google.com/gsi/client" async defer />
      </body>
    </Html>
  );
}
