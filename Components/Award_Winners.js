/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Award_Winners({post}){
    return(
        <>
        
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img2 ">
                  <a href="blog-details.html">
                    <img
                      src={post?.image}
                      alt="Blog Images"
                    />
                  </a>
                  <div className="blog-tag">
                    <h3>{post?.Date}</h3>
                    <span>{post?.Month}</span>
                  </div>
                </div>
                <div className="content bg-light shadow">
                  <h3>
                    <a href="blog-details.html">{post?.Name}</a>
                  </h3>
                  <p>{post?.description}</p>
                  <a href="blog-details.html" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            
           
        
        </>
    )
}