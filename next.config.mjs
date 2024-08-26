import createPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = process.env.NODE_ENV === 'production';
const withPWA = createPWA({
  dest: 'public',
  disable: !isProd
});
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default withPWA(withNextIntl(nextConfig));
