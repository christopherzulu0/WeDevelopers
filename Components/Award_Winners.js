/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Award_Winners(){
    return(
        <>
         <div className="bg-light text-gray-100 px-8 py-12 ">
        <div className="container">
          <div className="section-title text-center">
            <h2>WeDeveloper's Award Winners</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img2 ">
                  <a href="blog-details.html">
                    <img
                      src="https://disrupt-africa.com/wp-content/uploads/2018/07/Andela.jpg"
                      alt="Blog Images"
                    />
                  </a>
                  <div className="blog-tag">
                    <h3>11</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content bg-light shadow">
                  <h3>
                    <a href="blog-details.html">Programming Competition</a>
                  </h3>
                  <p>Unilus won the 2022! inter Universities Competition.</p>
                  <a href="blog-details.html" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img2">
                  <a href="blog-details.html">
                    <img
                      src="https://arcticstartup.com/wp-content/uploads/2021/07/Team-PayQin.jpg"
                      alt="Blog Images"
                    />
                  </a>
                  <div className="blog-tag">
                    <h3>12</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content bg-light shadow">
                  <h3>
                    <a href="blog-details.html">Quiz Competition</a>
                  </h3>
                  <p>
                    Unza! Won the Inter Universities Quiz Competition for
                    Information Technology.
                  </p>
                  <a href="blog-details.html" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="blog-item">
                <div className="blog-img2">
                  <a href="blog-details.html">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/57514b5f22482e8f991a140b/72f6d2b9-fd50-4778-9d1c-642b99a98cb9/7.jpg"
                      alt="Blog Images"
                    />
                  </a>
                  <div className="blog-tag">
                    <h3>15</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content bg-light shadow">
                  <h3>
                    <a href="blog-details.html">Expo Competition </a>
                  </h3>
                  <p>
                    Zambia ICT College students, won the Expo android app
                    development .
                  </p>
                  <a href="blog-details.html" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}