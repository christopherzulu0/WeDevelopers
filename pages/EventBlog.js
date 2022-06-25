/* eslint-disable @next/next/no-img-element */
import Header from "../Components/Header"
import EventBlog_intro from "../Components/EventBlog_intro"
import Footer from "../Components/Footer"
export default function EventBlog(){

    return(
        <>
        <Header/>
        <EventBlog_intro/>
  <div className="blog-details-area pt-100 pb-70 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-article">
            <div className="blog-article-img">
              <img src="https://minhmedia.vn/wp-content/uploads/2019/12/event-01.png" alt="Images" />
              <div className="blog-article-tag">
                <h3>04</h3>
                <span>Nov</span>
              </div>
            </div>
            <div className="blog-article-title">
              <ul>
                <li>
                  <i className="bx bxs-user" /> By Admin
                </li>
                <li>
                  <i className="bx bx-show-alt" />
                  322 View
                </li>
                <li>
             
                  <i className="bx bxs-conversation" >2 Comments</i>
            
                </li>
              </ul>
              <h2>10 Ways to Get Efficient Result and Benefits</h2>
            </div>
            <div className="article-content">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. cu sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies ne, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet n, vu eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum semper nisi. Aenean vulputate eleifend tellus. Aen li,
                porttitor eu, consequat vitae, eleifend ac, enim.
              </p>
              <p className="text-muted">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum. gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, Proin gravida nibh vel
                velit nisi elit consequat ipsum.Proin gravida nibh vel velit
                auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                nisi elit consequat ipsum. Proin gravida nibh vel velit.
              </p>
              <blockquote className="blockquote">
                <p className="text-muted">
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, Proin gravida nibh
                  vel velit nisi elit.
                </p>
                <span>- Albedin Simanth</span>
                <i className="bx bxs-quote-alt-left" />
              </blockquote>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. cu sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies ne, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet n, vu eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum semper nisi. Aenean vulputate eleifend tellus. Aen li,
                porttitor eu, consequat vitae, eleifend ac, enim.
              </p>
              <p className="text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ,Content
                here, content here, making it look like readable English.
              </p>
            </div>
            <div className="blog-article-share">
              <div className="row align-items-center">
                <div className="col-lg-7 col-sm-7 col-md-7">
                  <div className="blog-tag">
                    <ul>
                      <li>
                        <i className="bx bx-purchase-tag-alt" /> Tags:
                      </li>
                      <li>
                        <a href="blog-details.html">Android</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Creative</a>
                      </li>
                      <li>
                        <a href="blog-details.html">App</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5 col-md-5">
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin-square" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="comments-wrap">
              <div className="comment-title">
                <h3 className="title">Comments (02)</h3>
              </div>
              <ul className="comment-list">
                <li>
                  <img src="assets/images/blog/blog-profile1.png" alt="Image" />
                  <h3>Medison Decros</h3>
                  <span>On September 18,2020 at 4.30 pm</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. cu sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridicule us mus. Donec quam felis, ultricies ne,
                    pellentesque.
                  </p>
                  <a href="blog-details.html"> Reply</a>
                </li>
                <li>
                  <img src="assets/images/blog/blog-profile2.png" alt="Image" />
                  <h3>Jekson Albin</h3>
                  <span>On September 18,2020 at 4.30 pm</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. cu sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridicule us mus. Donec quam felis, ultricies ne,
                    pellentesque.
                  </p>
                  <a href="blog-details.html"> Reply</a>
                </li>
                <li>
                  <img src="assets/images/blog/blog-profile3.png" alt="Image" />
                  <h3>Bentham Debid</h3>
                  <span>On September 18,2020 at 4.30 pm</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. cu sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridicule us mus. Donec quam felis, ultricies ne,
                    pellentesque.
                  </p>
                  <a href="blog-details.html">Reply</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4">
          <div className="side-bar-area">
            <div className="search-widget">
              <form className="search-form">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                />
                <button type="submit">
                  <i className="bx bx-search" />
                </button>
              </form>
            </div>
            <div className="side-bar-widget bg-light">
              <h3 className="title">Blog Categories</h3>
              <div className="side-bar-categories">
                <ul >
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      IT Services<span>[70]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Business<span>[24]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Creative Invention<span>[08]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Technology <span>[17]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      IT Consulting <span>[20]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Marketing Growth <span>[13]</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="side-bar-widget bg-light">
              <h3 className="title">Latest Blog</h3>
              <div className="widget-popular-post">
                <article className="item">
                  <a href="blog-details.html" target="_blank" className="thumb">
                    <span className="full-image cover bg1" role="img" />
                  </a>
                  <div className="info">
                    <h4 className="title-text">
                      <a href="blog-details.html" target="_blank">
                        10 Ways to Get Efficient Result &amp; Benefits
                      </a>
                    </h4>
                    <p>Nov 05, 2020</p>
                  </div>
                </article>
                <article className="item">
                  <a href="blog-details.html" target="_blank" className="thumb">
                    <span className="full-image cover bg2" role="img" />
                  </a>
                  <div className="info">
                    <h4 className="title-text">
                      <a href="blog-details.html" target="_blank">
                        New Device Invention for Digital Platform
                      </a>
                    </h4>
                    <p>13 October, 2020</p>
                  </div>
                </article>
                <article className="item">
                  <a href="blog-details.html" target="_blank" className="thumb">
                    <span className="full-image cover bg3" role="img" />
                  </a>
                  <div className="info">
                    <h4 className="title-text">
                      <a href="blog-details.html" target="_blank">
                        Idea For New 5 App Design
                      </a>
                    </h4>
                    <p>17 October, 2020</p>
                  </div>
                </article>
                <article className="item">
                  <a href="blog-details.html" target="_blank" className="thumb">
                    <span className="full-image cover bg4" role="img" />
                  </a>
                  <div className="info">
                    <h4 className="title-text">
                      <a href="blog-details.html" target="_blank">
                        Product Idea Solution For New Generation
                      </a>
                    </h4>
                    <p>17 October, 2020</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="side-bar-widget bg-light">
              <h3 className="title">Tag Cloud</h3>
              <ul className="side-bar-widget-tag">
                <li>
                  <a href="blog-details.html" target="_blank">
                    Android
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" target="_blank">
                    Creative
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" target="_blank">
                    App
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" target="_blank">
                    IOS
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" target="_blank">
                    Business
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" target="_blank">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div className="side-bar-widget bg-light">
              <h3 className="title">Gallery</h3>
              <ul className="blog-gallery">
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img1.jpg"
                      alt="image"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img2.jpg"
                      alt="image"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img3.jpg"
                      alt="image"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img4.jpg"
                      alt="image"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img5.jpg"
                      alt="image"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                      src="assets/images/blog/blog-small-img6.jpg"
                      alt="image"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="side-bar-widget bg-light">
              <h3 className="title">Archive</h3>
              <div className="side-bar-categories">
                <ul>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Design<span>[70]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Business<span>[24]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Development<span>[08]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Technology <span>[17]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Startup <span>[20]</span>
                    </a>
                  </li>
                  <li>
                    <div className="line-circle" />
                    <a href="blog-details.html" target="_blank">
                      Marketing Growth <span>[13]</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <Footer />
</>

    )
}