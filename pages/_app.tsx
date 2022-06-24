/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/app";
import Script from 'next/script';
import SSRProvider from 'react-bootstrap/SSRProvider';
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <><>

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-XR0SXFJQPB?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    
    </>
    <RecoilRoot>
       <ChakraProvider>
       <SSRProvider>
        <Component {...pageProps} />
        </SSRProvider>
      </ChakraProvider>
      </RecoilRoot>
      </>
  )
}

export default MyApp
