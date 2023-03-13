import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "~/styles/globals.css";

const titleFont = localFont({
  src: [{ path: "../styles/fonts/Thick Thinks.otf" }],
  variable: "--font-title",
});

const bodyFont = localFont({
  src: [{ path: "../styles/fonts/Helvetica-Bold-Font.ttf" }],
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/images/logo/Logo-Insta-fb.jpg" />
      </Head>
      <main
        className={`${titleFont.variable} font-sans, ${bodyFont.variable} font-serif, font-body leading-tight`}
      >
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
