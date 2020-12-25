import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { AppProps } from 'next/app';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import theme from '@/styles/theme';
import { defaultSeo, socialProfile } from '~/next-seo.config';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...defaultSeo} />
      <SocialProfileJsonLd {...socialProfile} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
