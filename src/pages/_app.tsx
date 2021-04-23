import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

import theme from 'styles/theme';

import { ThemeProvider } from 'context/ThemeContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Rodrigo Cichetto // &#x1F3AE; shibetto</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.colors.background} />
        <meta
          name="description"
          content="Desenvolvedor Front-end &#x1F468;&#x1F4BB; e Gamer, sou amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento. Rodrigo Cichetto // &#x1F3AE; shibetto"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
