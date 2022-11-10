import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import "./styles.css";

import type { Session } from "next-auth";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
