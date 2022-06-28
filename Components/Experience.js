/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Player from "./Player"

export default function Experience(){
    return(
        <>
         <div className="about-area ptb-100 bg-light">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6">
        <div className="about-play">
          <img src="assets/images/about/about-img1.jpg" alt="About Images" />
          <div className="about-play-content">
            <span>Watch Our Intro Video</span>
            <h2>Perfect Solution for IT Services!</h2>
            <div className="play-on-area">
             
                <Player/>
               
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content ml-25">
          <div className="section-title">
            <h6 className="sp-color2">15 Years of Experience</h6>
            <h2>Right Partner for Software Innovation</h2>
            <h6>
            We bring great websites and software to you to build a lasting profitable business.
            </h6>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <ul className="about-list text-start">
                <li>
                  <i className="bx bxs-check-circle" />
                  <h6 className='text-muted'>Cost of IT consultation is affordable.</h6>
                </li>
                <li>
                  <i className="bx bxs-check-circle" />
                  
                  <h6 className='text-muted'>We develop and design, according to customer's need.</h6>
                </li>
                <li>
                  <i className="bx bxs-check-circle" />
                  <h6 className='text-muted'>24/7 Customer support.</h6>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="about-list text-start about-list-2">
                <li>
                  <i className="bx bxs-check-circle" />
                  <h6 className='text-muted'>We deliver our services in time.</h6>
                </li>
                <li>
                  <i className="bx bxs-check-circle" />
                  <h6 className='text-muted'>Easy to Customer Services</h6>
                </li>
                <li>
                  <i className="bx bxs-check-circle" />
                  <h6 className='text-muted'>Good Quality Products Services</h6>
                </li>
              </ul>
            </div>
          </div>
          <h6 className="about-content-text text-muted">
            We work to meet customer requirements,needs and demand.And we also make sure to deliver to client satisfactional and in time with quality results.
          </h6>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}