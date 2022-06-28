/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
export default function AboutUs(){
    return(
        <>
        <Head>
      
        </Head>
        <div className="col-lg-12 col-xl-6">
  <div className="inner mt_mobile--40">
    <div
      className="section-title text-start"
      data-sal-delay={150}
      data-sal="slide-up"
      data-sal-duration={800}
    >
      <span className="pre-title">Who We Are</span>
      <h3 className="title">We Offer The Best Carrier</h3>
    </div>
    <div className="feature-style-6 mt--40">
      <div
        className="edu-feature-list color-variation-1"
        data-sal-delay={150}
        data-sal="slide-up"
        data-sal-duration={800}
      >
        <div className="icon">
          <img src="assets/images/icons/student.png" alt="Icons Images" />
        </div>
        <div className="content">
          <h6 className="title">Industry Expert Instructor</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded
            tempor incididunt dolore magna aliqua.
          </p>
        </div>
      </div>
      <div
        className="edu-feature-list color-variation-2"
        data-sal-delay={150}
        data-sal="slide-up"
        data-sal-duration={800}
      >
        <div className="icon">
          <img src="assets/images/icons/book.png" alt="Icons Images" />
        </div>
        <div className="content">
          <h6 className="title">Up-to-Date Course Content</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded
            tempor incididunt dolore magna aliqua.
          </p>
        </div>
      </div>
      <div
        className="edu-feature-list color-variation-3"
        data-sal-delay={150}
        data-sal="slide-up"
        data-sal-duration={800}
      >
        <div className="icon">
          <img src="assets/images/icons/reward.png" alt="Icons Images" />
        </div>
        <div className="content">
          <h6 className="title">Biggest Student Community</h6>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded
            tempor incididunt dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div
      className="read-more-btn mt--30"
      data-sal-delay={150}
      data-sal="slide-up"
      data-sal-duration={800}
    >
      <a className="edu-btn" href="about-us-1.html">
        Know About Us <i className="icon-arrow-right-line-right" />
      </a>
    </div>
  </div>
</div>

        </>
    )
}