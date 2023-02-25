import type { AppProps } from "next/app";
import '@/styles/globals.scss'
import {SWRConfig} from 'swr'
export default function App({ Component, pageProps }: AppProps) {
  return(
  <SWRConfig
   value={{shouldRetryOnError: false}}>
  <Component {...pageProps} />;
  </SWRConfig>
  )
}
