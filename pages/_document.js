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
        {/* eslint-disable-next-line max-len */}
        <script src="https://www.paypal.com/sdk/js?client-id=AfQklEZggo_oiqWT5BcCUzlMZzXClpM57fBxM_KIgVlOElA9Ijk6YNTHEWBcTk6fsb18nRksgh-8ZR0c" />
      </body>
    </Html>
  );
}
