import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import '../plasmic-init.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider 
      Head={Head}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=YourFontName&display=swap" 
        />
      >
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
