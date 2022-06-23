/* eslint-disable @next/next/no-img-element */
export default function Clients_Say(){
    return(
        <>
        {/* test for testimonial part */}
      <div className="bg-light text-gray-100 px-8 py-12 ">
        <div className="section-title text-center">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-center m-auto">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Carousel --> */}
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="img-box">
                    <img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh
                    non aliquet.
                  </p>
                  <p className="overview">
                    <b>Jennifer Smith</b>, Office Worker
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus.
                    Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                    dictum risus. Pellentesque viverra sagittis quam at mattis.
                    Suspendisse potenti. Aliquam sit amet gravida nibh,
                    facilisis gravida odio.
                  </p>
                  <p className="overview">
                    <b>Dauglas McNun</b>, Financial Advisor
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                    id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                    luctus turpis at accumsan tincidunt. Phasellus risus risus,
                    volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                    hendrerit dolor eget rutrum.
                  </p>
                  <p className="overview">
                    <b>Hellen Wright</b>, Athelete
                  </p>
                </div>
              </div>
              {/* <!-- Carousel Controls --> */}
              <a
                className="carousel-control left carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control right carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}