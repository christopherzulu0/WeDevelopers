/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Services({post}){
    return(
        <>
    
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
          <div className="features-card shadow bg-light" style={{height:"88%"}}>
            <div className="features-card-img">
              <img src={post?.image} alt="image" style={{width:"62px",height:"62px"}} />
            </div>
            <div className="features-card-text-area">
              <h4>
                <a href="about.html">{post?.Name}</a>
              </h4>
              <p>
              {post?.description}
              </p>
            </div>
          </div>
        </div>
        </>
    )
}