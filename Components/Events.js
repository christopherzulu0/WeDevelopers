/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router";
export default function Events({id,post}){
  const router = useRouter();

    return(
        <>
         
            <div className="col-lg-4 col-md-6"
              onClick={() => router.push(`/${id}`)}
            >
              <div className="blog-card shadow-lg bg-light">
                <div className="blog-img">
                  <a>
               
                    <img
                      src={post?.image}
                      alt="Blog Images"
                      className="img-responsive "
                      id="imgfit"
                    />
                 
                  </a>
                  <div className="blog-tag">
                    <h3>{post?.Date}</h3>
                    <span>{post?.Month}</span>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <a>
                        <i className="bx bxs-user" /> {post?.published}
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="bx bx-purchase-tag-alt" />
                       {post?.Type}
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a >
                     {post?.Name}
                    </a>
                  </h3>
                  <p>
                    {post?.description}
                  </p>
                  <a 
                   
                  className="read-btn">
                    Read More <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          
        </>
    )
}