/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/app";
import Script from 'next/script';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <><>
    <Head>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQHPRBC"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

    </Head>

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
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KQHPRBC');
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
