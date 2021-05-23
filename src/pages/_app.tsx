import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import GlobalStyles from 'styles/global';

import theme from 'styles/theme';

import { ThemeProvider } from 'context/ThemeContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.colors.background} />

        <NextSeo
          title="Rodrigo Cichetto // &#x1F3AE; shibetto"
          description="Desenvolvedor Front-end &#x1F468;&#x1F4BB; formado em Ciência da Computação, Gamer &#x1F3AE;, amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento. Este sou eu, Rodrigo Cichetto"
          canonical="https://cichetto.com.br/"
          openGraph={{
            url: 'https://cichetto.com.br/',
            title: 'Rodrigo Cichetto',
            description:
              'Desenvolvedor Front-end &#x1F468;&#x1F4BB; formado em Ciência da Computação, Gamer &#x1F3AE;, amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento. Este sou eu, Rodrigo Cichetto',
            images: [
              {
                url:
                  'https://rodrigocichetto.s3.us-east-2.amazonaws.com/social-share.jpg'
              }
            ],
            locale: 'pt_BR'
          }}
          twitter={{
            handle: '@rodrigocichetto',
            site: '@site',
            cardType: 'summary_large_image'
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
