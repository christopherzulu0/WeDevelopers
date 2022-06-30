/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import Header from "../Components/Header";
import WebDevelopment_Intro from "../Components/WebDevelopment_Intro";
import WebDevelopment_Tabs from "../Components/WebDevelopment_Tabs";
import Head from "next/head";
import Script from "next/script";

import Footer from "../Components/Footer";
export default function WebDevelopment_Blog(){
    return(
        <>
         <Head>
        <title>WeDevelopers</title>
        <meta name="description" content="Generated WeDevelopers" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/animate.min.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="assets/fonts/flaticon.css" />
        <link rel="stylesheet" href="assets2/css/fontawsome.min.css"></link>
        <link rel="stylesheet" href="assets/css/boxicons.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="assets/css/meanmenu.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets2/css/style.css"></link>
        <link rel="stylesheet" href="assets/css/responsive.css" />

        
        <link rel="icon" href="/logo1.png" />
        
      </Head>

      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/wow.min.js"></Script>
      <Script src="assets/js/jquery.ajaxchimp.min.js"></Script>
      <Script src="assets/js/form-validator.min.js"></Script>
      <Script src="assets/js/contact-form-script.js"></Script>
      <Script src="assets/js/custom.js"></Script>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></Script>
        <Header/>
        <WebDevelopment_Intro/>
        {/* <WebDevelopment_Tabs/> */}
        <Footer />
        </>
    )
}