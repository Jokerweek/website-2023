import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "~/styles/globals.css";

const titleFont = localFont({
  src: [{ path: "../styles/fonts/Thick Thinks.otf" }],
  variable: "--font-title",
});

const subTitleFont = localFont({
  src: [{ path: "../styles/fonts/Helvetica-Bold-Font.ttf" }],
  variable: "--font-subTitle",
});

const bodyFont = localFont({
  src: [{ path: "../styles/fonts/HelveticaNeueLight.otf" }],
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/images/logo/Logo-Insta-fb.jpg" />
      </Head>
      <main
        className={`${titleFont.variable} font-sans, ${subTitleFont.variable} font-serif, ${bodyFont.variable} font-serif, font-body tracking-wider leading-tight`}
      >
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
