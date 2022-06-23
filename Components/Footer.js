/* eslint-disable @next/next/no-img-element */


function Footer(){
    return(
      
        <>
       
    
       
       
       <footer className="footer-area footer-bg2 " 
        style={{marginTop:"3%"}}
       >
    <div className="container">
      <div className="footer-top pt-100 pb-70">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="footer-widget footer-widget3">
              <div className="footer-logo">
                <a href="index.html">
                <img src="/logo.png" alt="Images" />
                </a>
              </div>
              <p id="sponsors">
              <span>Web Design</span> <span>Andriod Apps</span>  <span>Logo Designs</span> <br/>
                     <span>UI/UX Designs</span> <span>IOS Apps</span> <span>Content Creation</span><br/>
                     <span>Digital</span> <span>Adverts</span> <span>Photography</span>  <span>Vidoegraphy</span>
              </p>
             
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget pl-2">
              <h3>Services</h3>
              <ul className="footer-list">
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    IT Consultancy
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Business Solution
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Digital Services
                  </a>
                </li>
                <li>
                  <a href="compare.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Business Reform
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    <i className="bx bx-chevron-right" />
                    Data Analysis
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget footer-widget1 pl-5">
              <h3>Our Blog</h3>
              <ul className="footer-blog">
                <li>
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-img-footer.jpg"
                      alt="Images"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      <a href="blog-details.html">
                        Product Idea Solution For New Generation
                      </a>
                    </h3>
                    <span>04 Dec 2020</span>
                  </div>
                </li>
                <li>
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-img-footer2.jpg"
                      alt="Images"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      <a href="blog-details.html">
                        New Device Invention for Digital Platform
                      </a>
                    </h3>
                    <span>07 Dec 2020</span>
                  </div>
                </li>
                <li>
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-img-footer3.jpg"
                      alt="Images"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      <a href="blog-details.html">
                        Business Strategy Make His Goal Acheive
                      </a>
                    </h3>
                    <span>10 Dec 2020</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget footer-widget2">
              <h3>Address</h3>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg> Findeco House Floor 23,<br/>Room 45,<br/>+260-777-603-060
              </p>
         
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="copy-right-text">
          <p>
          Copyright © 2022. All Rights Reserved by WeDevelopers.
          </p>
        </div>
      </div>
    </div>
  </footer>

        
      </>
      
    )
}


export default Footer;