import { AppProps } from 'next/app'

export default function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


