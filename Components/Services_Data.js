/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Services from "./Services";
// import EventBlog from "../pages/EventBlog";
import Head from "next/head"

import { useRouter } from "next/router";
export default function Services_Data(){
    const [services, setServices] = useState([]);
    const router = useRouter();
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Services")),
            (snapshot) => {
              setServices(snapshot.docs);
            }
          ),
        [db]
      );
    return(
        <>
  <Head>
        <link rel="stylesheet" href="/css/2fe6c173ce88135e.css"></link>
        <link
        href="../fonts.googleapis.com/css21d74.css?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet" />
        </Head>

                  <div className="features ptb-100 bg-f9faff bg-light" style={{marginTop:"-5%"}}>
  <div className="container ">
    <div className="default-section-title default-section-title-2 default-section-title-middle">
      <h6>Features</h6>
      <h3>WeDeveloper's Services To Clients.</h3>
    </div>
    <div className="section-content">
      <div className="row">
        {services.map((post) => (
          <Services key={post.id} id={post.id} post={post.data()} />
        ))}
        </div>
        </div>
        </div>
        </div>


      
        <div id="__next">


  
  
  <section className="overview-area ptb-100 pt-0 bg-light">
    <div className="container ">
      <div className="section-title">
      
        <h2>Amazing Business Solution Whatever Your Needs</h2>
        <p>
          Real innovations and positive customer experience are the heart of
          successful communication. No fake products and services.
        </p>
      </div>
      <div className="overview-box">
        <div className="overview-content">
          <div className="content">
            <h6 className="sub-title">Digital Marketing</h6>
            <h2>Creative solutions, creative results</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <div className="features-text">
              <h6>
                 <i className="bi bi-check-all" /> Core Development
                {/* */}
              </h6>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
            <div className="features-text">
              <h6 >
                 <i className="bi bi-check-all" /> Define Your Choices
                {/* */}
              </h6>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
          </div>
        </div>
        <div className="overview-image">
          <div className="image">
            <img src="images2/about-img1.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="overview-box">
        <div className="overview-image">
          <div className="image">
            <img src="images2/why-choose-img1.png" alt="image" />
          </div>
        </div>
        <div className="overview-content">
          <div className="content right-content">
            <h6 className="sub-title">Design &amp; Development</h6>
            <h2>Solving problems, building brands</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <ul className="features-list">
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Recommender systems
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Demand prediction
                  {/* */}
                </h6 >
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Omnichannel analytics
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Lead generation
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Dedicated Developers
                  {/* */}
                </h6 >
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> 24/7 Support
                  {/* */}
                </h6 >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overview-box">
        <div className="overview-content">
          <div className="content">
            <h6 className="sub-title">Social Media Marketing</h6>
            <h2>We are the next generation of the advertising world</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <div className="features-text">
              <h6>
                 <i className="bi bi-check-all" /> Core Development
                {/* */}
              </h6>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
            <div className="features-text">
              <h6>
                 <i className="bi bi-check-all" /> Define Your Choices
                {/* */}
              </h6>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
          </div>
        </div>
        <div className="overview-image">
          <div className="image">
            <img src="images2/features-image/feature-image1.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="overview-box">
        <div className="overview-image">
          <div className="image">
            <img src="images2/features-image/feature-image2.png" alt="image" />
          </div>
        </div>
        <div className="overview-content">
          <div className="content right-content">
       
            <h6 
            className="text-center"
            style={{fontSize:"30px"}}>
              
  IT Consultancy</h6>
            <p>
              We Give advisory services that help clients, assess different technology strategies , and in doing so, they align their technology startegies with business or process strategies.
              In this service, we:
            </p>
            <ul className="features-list">
              <li>
                <h6 className="text-muted">
                <i className="bi bi-check-all" /> Check software quality
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Consults best practices
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                <i className="bi bi-check-all" />
                  Help choose Tech stack
                  {/* */}
                </h6>
              </li>
              <li>
                <h6 className="text-muted">
                   <i className="bi bi-check-all" /> Gather technical requirements
                  {/* */}
                </h6>
              </li>
              <li>
                <h6  className="text-muted">
                   <i className="bi bi-check-all" /> Help build a developed team
                  {/* */}
                </h6>
              </li>
              <li>
                <h6  className="text-muted">
                   <i className="bi bi-check-all" /> Suggests improvements
                  {/* */}
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="features-area ptb-100 pt-0 bg-light">
    <div className="container">
      <div className="section-title">
        <h6 className="sub-title">Our Features</h6>
        <h2>We always try to understand customers expectation</h2>
      </div>
      <div className="tab features-list-tab">
        <ul className="tabs">
          <li className="current">
            <div className="bg-fa7070">
              <i className="flaticon-achievement" />
              <h6>User Experience</h6>
            </div>
          </li>
          <li>
            <div className="bg-00aeff">
              <i className="flaticon-architecture" />
              <h6>Product Design</h6>
            </div>
          </li>
          <li>
            <div className="bg-c679e3">
              <i className="flaticon-digital-marketing" />
              <h6>Digital Marketing</h6>
            </div>
          </li>
          <li>
            <div className="bg-eb6b3d">
              <i className="flaticon-analytics" />
              <h6>Branding</h6>
            </div>
          </li>
          <li>
            <div>
              <i className="flaticon-data" />
              <h6>Development</h6>
            </div>
          </li>
          <li>
            <div className="bg-f78acb">
              <i className="flaticon-research" />
              <h6>Marketing</h6>
            </div>
          </li>
        </ul>
        <div className="tab_content">
          <div id="tab1" className="tabs_item">
            <div className="features-overview">
              <div className="overview-content">
                <div className="content">
                  <h8 className="sub-title">Define Your Choices</h8>
                  <h2>User Experience</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-muted">
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="tab2" className="tabs_item">
            <div className="features-overview">
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image2.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
                  <h2>Product Design</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="tab3" className="tabs_item">
            <div className="features-overview">
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
                  <h2>Digital Marketing</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image2.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="tab4" className="tabs_item">
            <div className="features-overview">
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image4.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
                  <h2>Branding</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="tab5" className="tabs_item">
            <div className="features-overview">
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
                  <h2>Development</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image5.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="tab6" className="tabs_item">
            <div className="features-overview">
              <div className="overview-image">
                <div className="image">
                  <img
                    src="images2/features-image/feature-image6.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
                  <h2>Marketing</h2>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.
                    The customer is king, their lives and needs are the
                    inspiration.
                  </p>
                  <ul className="features-list">
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                         <i className="bi bi-check-all" /> Super Responsive
                        {/* */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-img7">
      <img src="images2/shape/shape7.png" alt="image" />
    </div>
    <div className="shape-img2">
      <img src="images2/shape/shape2.svg" alt="image" />
    </div>
    <div className="shape-img3">
      <img src="images2/shape/shape3.svg" alt="image" />
    </div>
    <div className="shape-img4">
      <img src="images2/shape/shape4.png" alt="image" />
    </div>
  </section>

 

</div>
        </>
    )
}