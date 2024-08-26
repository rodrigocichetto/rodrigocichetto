import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/styles/theme';
import AppProvider from '@/providers/app';

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.colors.background} />
        <meta name="title" content="Rodrigo Cichetto // &#x1F3AE; shibetto" />
        <meta
          name="description"
          content="Desenvolvedor Front-end &#x1F468;&#x1F4BB; formado em Ciência da Computação, Gamer &#x1F3AE;, amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento. Este sou eu, Rodrigo Cichetto"
        />
        <meta name="title" content="Rodrigo Cichetto // &#x1F3AE; shibetto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@rodrigocichetto" />
        <meta property="og:url" content="https://cichetto.com.br/" />
        <meta property="og:title" content="Rodrigo Cichetto" />
        <meta
          property="og:description"
          content="Software Engineer &amp;#x1F468;&amp;#x1F4BB; formado em Ciência da Computação, Gamer &amp;#x1F3AE;, amante do mundo do design e apaixonado pelas melhores tecnologias de desenvolvimento. Este sou eu, Rodrigo Cichetto"
        />
        <meta
          property="og:image"
          content="https://rodrigocichetto.s3.us-east-2.amazonaws.com/social-share.jpg"
        />
        <meta property="og:locale" content={locale} />
        <link rel="canonical" href="https://cichetto.com.br/"></link>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <AppProvider>{children}</AppProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
