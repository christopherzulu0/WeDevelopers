/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
export default function Events({id,post,EventBlog}){
  
    return(
        <>
  
            <div className="col-lg-4 col-md-6"
              
            >
              <div className="blog-card">
                <div className="blog-img">
                  <a>
                  {Events && (
                    <img
                      src={post?.image}
                      alt="Blog Images"
                      className="img-responsive "
                      id="imgfit"
                    />
                  )}
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