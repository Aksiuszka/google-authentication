import { getSession, SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={getSession()}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
