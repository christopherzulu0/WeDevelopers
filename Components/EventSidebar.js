/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
export default function EventSidebar({id,post}){
    const router = useRouter();
    return(
        <>
       
                <><div className="post-img"
                onClick={() => router.push(`/${id}`)} >
                  <a >
                    <img src={post?.image} alt="" />
                  </a>
                </div><div className="post-desc">
                    <a >
                    {post?.Name}
                    </a>
                    <span className="date">
                      <i className="fa fa-calendar" />
                      {post?.Month} {post?.Date}, 2020
                    </span>
                  </div></>
                  
           
        </>
    )
}