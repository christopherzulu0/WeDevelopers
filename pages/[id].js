/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Header from "../Components/Header"
import EventBlog_intro from "../Components/EventBlog_intro"
import Footer from "../Components/Footer"
import { RWebShare } from "react-web-share";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  setDoc,
  deleteDoc,
  query,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import Head from "next/head"
import EventSidebar_Data from "../Components/EventSidebar_Data";
export default function EventPage(){
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
 
  useEffect(
    () =>
      onSnapshot(doc(db, "Events", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [id]
  );
  
  useEffect(
    () =>
      onSnapshot(collection(db, "Events", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === id) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "Events", id, "likes", id));
    } else {
      await setDoc(doc(db, "Events", id, "likes",id), {
        id,
      });
    }
  };
 
    return(
        <>
        <Header/>
        <EventBlog_intro/>

<Head>
<link rel="stylesheet" type="text/css" href="assets3/css/bootstrap.min.css" />
   
        <link rel="stylesheet" type="text/css" href="assets3/css/font-awesome.min.css" />
     
        <link rel="stylesheet" type="text/css" href="assets3/fonts/flaticon.css" />
       
        <link rel="stylesheet" type="text/css" href="assets3/css/animate.css" />
     
       
    
       
      
        <link rel="stylesheet" href="assets3/css/rsmenu-main.css" />
        
        <link rel="stylesheet" type="text/css" href="assets3/css/rs-spacing.css" />
      
        <link rel="stylesheet" type="text/css" href="assets3/style.css" />
      
        <link rel="stylesheet" type="text/css" href="assets3/css/responsive.css" />
</Head>

        
        <>
  {/* Blog Section Start */}
  <div className="rs-inner-blog pt-70 pb-120 md-pt-90 md-pb-90" style={{marginTop:"-5%"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 order-last">
          <div className="widget-area">
           
            <EventSidebar_Data/>
            <div className="categories mb-50">
              <div className="widget-title">
                <h3 className="title">Categories</h3>
              </div>
              <ul>
                <li>
                  <a href="#">Application Testing</a>
                </li>
                <li>
                  <a href="#">Artifical Intelligence</a>
                </li>
                <li>
                  <a href="#">Digital Technology</a>
                </li>
                <li>
                  <a href="#">IT Services</a>
                </li>
                <li>
                  <a href="software-development.html">Software Development</a>
                </li>
                <li>
                  <a href="web-development.html">Web Development</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 pr-35 md-pr-15">
          <div className="row">
            <div className="col-lg-12 mb-50">
              <div className="blog-item">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src={post?.image} alt="" />
                  </a>
                  <ul className="post-categories">
                    <li>
                      <a href="blog-details.html" 
                      className="text-white"
                      style={{color:"#00638D"}}>{post?.Type}</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                    {post?.Name}
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <ul className="btm-cate">
                      <li>
                        <div className="blog-date">
                          <i className="fa fa-calendar-check-o" /> {post?.Date} {post?.Month},
                          2020
                        </div>
                      </li>
                      <li>
                        <div className="author">
                          <i className="fa fa-user-o" /> {post?.published}
                        
                        </div>
                          
                      </li>
                      <div className="block ml-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        likePost();
                      }}
                      >
                          {liked ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{color:"#00638D"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>
) : (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
</svg>
  )}
                      </div>
                      {likes.length > 0 && (
                 <span className={`likes group-hover:text-pink-600 text-sm  ${
                  liked && "text-pink-600"}`}
                 
                  >
                         {likes.length}
                 </span>
                 )}
                      <div className="block ml-2">
                      <RWebShare
        data={{
          text: "You envision,we develop",
          url: "https://we-developers.vercel.app/",
          title: "WeDevelopers",
        }}
        onClick={() => console.log("shared successfully!")}
      >
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
</RWebShare>
                      </div>
                    </ul>
                  </div>
                  <div className="blog-desc">
                  {post?.description}
                  </div>
                  
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog Section End */}
  

</>

 
 <Footer />
 
</>

    )
}