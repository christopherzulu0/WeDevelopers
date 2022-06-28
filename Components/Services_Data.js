/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Services from "./Services";
// import EventBlog from "../pages/EventBlog";
import Head from "next/head"
import CountUp from "react-countup";
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
            <span className="sub-title">Digital Marketing</span>
            <h2>Creative solutions, creative results</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <div className="features-text">
              <h4>
                <i className="flaticon-tick" /> Core Development
                {/* */}
              </h4>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
            <div className="features-text">
              <h4>
                <i className="flaticon-tick" /> Define Your Choices
                {/* */}
              </h4>
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
            <span className="sub-title">Design &amp; Development</span>
            <h2>Solving problems, building brands</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <ul className="features-list">
              <li>
                <span>
                  <i className="fas fa-check" /> Recommender systems
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Demand prediction
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Omnichannel analytics
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Lead generation
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Dedicated Developers
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> 24/7 Support
                  {/* */}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overview-box">
        <div className="overview-content">
          <div className="content">
            <span className="sub-title">Social Media Marketing</span>
            <h2>We are the next generation of the advertising world</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <div className="features-text">
              <h4>
                <i className="flaticon-tick" /> Core Development
                {/* */}
              </h4>
              <p>
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
            </div>
            <div className="features-text">
              <h4>
                <i className="flaticon-tick" /> Define Your Choices
                {/* */}
              </h4>
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
            <span className="sub-title">SEO Consultancy</span>
            <h2>We make smart, good-looking things</h2>
            <p>
              We believe brand interaction is key to communication. Real
              innovations and positive customer experience are the heart of
              successful communication.
            </p>
            <ul className="features-list">
              <li>
                <span>
                  <i className="fas fa-check" /> Recommender systems
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Demand prediction
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Omnichannel analytics
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Lead generation
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> Dedicated Developers
                  {/* */}
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-check" /> 24/7 Support
                  {/* */}
                </span>
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
        <span className="sub-title">Our Features</span>
        <h2>We always try to understand customers expectation</h2>
      </div>
      <div className="tab features-list-tab">
        <ul className="tabs">
          <li className="current">
            <div className="bg-fa7070">
              <i className="flaticon-achievement" />
              <span>User Experience</span>
            </div>
          </li>
          <li>
            <div className="bg-00aeff">
              <i className="flaticon-architecture" />
              <span>Product Design</span>
            </div>
          </li>
          <li>
            <div className="bg-c679e3">
              <i className="flaticon-digital-marketing" />
              <span>Digital Marketing</span>
            </div>
          </li>
          <li>
            <div className="bg-eb6b3d">
              <i className="flaticon-analytics" />
              <span>Branding</span>
            </div>
          </li>
          <li>
            <div>
              <i className="flaticon-data" />
              <span>Development</span>
            </div>
          </li>
          <li>
            <div className="bg-f78acb">
              <i className="flaticon-research" />
              <span>Marketing</span>
            </div>
          </li>
        </ul>
        <div className="tab_content">
          <div id="tab1" className="tabs_item">
            <div className="features-overview">
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">Define Your Choices</span>
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
                      <span>
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
                        {/* */}
                      </span>
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
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
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
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
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
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
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
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
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
                        <i className="flaticon-tick" /> Open Source
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Optimal Choice
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> High Security
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Great Advices
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Creative Layout
                        {/* */}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-tick" /> Super Responsive
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
  <section className="fun-facts-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="single-fun-facts">
            <h3>
              <span className="odometer">
                <span />
              </span>
              <span className="sign-icon"><CountUp end={100} duration={5} />+</span>
            </h3>
            <p>Project Completed</p>
            <div className="back-text">P</div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-fun-facts">
            <h3>
              <span className="odometer">
                <span />
              </span>
              <span className="sign-icon"><CountUp end={50} duration={5} />%</span>
            </h3>
            <p>Client Satisfaction</p>
            <div className="back-text">C</div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-fun-facts">
            <h3>
              <span className="odometer">
                <span />
              </span>
              <span className="sign-icon"><CountUp end={5} duration={5} />%</span>
            </h3>
            <p>Awards</p>
            <div className="back-text">C</div>
          </div>
        </div>
        
        <div className="col-lg-3 col-sm-6">
          <div className="single-fun-facts">
            <h3>
              <span className="odometer">
                <span />
              </span>
              <span className="sign-icon"><CountUp end={8} duration={5}/>+</span>
            </h3>
            <p>Expert Members</p>
            <div className="back-text">E</div>
          </div>
        </div>
      </div>
    </div>
  </section>
 

</div>
        </>
    )
}