import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import theme from '@/styles/theme';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
