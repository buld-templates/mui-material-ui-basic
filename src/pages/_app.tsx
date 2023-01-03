import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
