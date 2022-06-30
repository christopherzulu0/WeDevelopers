/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Header from "../Components/Header";
import Intro_Page from "../Components/Intro_Page";
import Experience from "../Components/Experience";
import Services_Data from "../Components/Services_Data";
import Project_Portfolio from "../Components/Project_Portfolio";
import Clients_Say from "../Components/Clients_Say";
import Events_Data from "../Components/Events_Data";
import Award_Winners_Data from "../Components/Award_Winners_Data";
import App_Integration from "../Components/App_Integration";
// import Team_Data from "../Components/Team_Data";
import Contact from "../Components/Contact";
// import Technology from "../Components/Technology"
import CompanyAwards from "../Components/CompanyAwards"
import Footer from "../Components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


const Home: NextPage = () => {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
  ];
  return (
    <div className="bg-white">
      <Head>
        <title>WeDevelopers</title>
        <meta name="description" content="Generated WeDevelopers" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        
        <link rel="stylesheet" href="assets/css/animate.min.css" />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        /> */}
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
        <link href="assets5/css/styles.css" rel="stylesheet"></link>
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

     {/* Pages are called and Displayed heere */}
  
     <Header/>
   
     <Intro_Page/>
     <CompanyAwards/>
     <Experience/>
     <Services_Data/>
     <Project_Portfolio/>
     <Clients_Say/>
     <Events_Data EventPage={undefined} id={undefined}/>
     <Award_Winners_Data/>
    
     {/* <Technology/> */}
     {/* <Team_Data/> */}
     <Contact/>
   
     <Footer/>
     {/* <Notification /> */}
      {/*End Pages that are called and Displayed heere */}
    </div>
  );
};

export default Home;
