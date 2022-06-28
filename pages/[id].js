/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Header from "../Components/Header"
import EventBlog_intro from "../Components/EventBlog_intro"
import Footer from "../Components/Footer"
import { RWebShare } from "react-web-share";
import CountUp from "react-countup"
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  setDoc,
  deleteDoc,
  query,
} from "@firebase/firestore";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { db } from "../firebase";
import { useRouter } from "next/router";
import Head from "next/head"
import Script from "next/script"
import { Image,Stack } from '@chakra-ui/react'
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
        <link href="assets5/css/styles.css" rel="stylesheet"></link>
      </Head>
      <Script src="assets5/js/summernote.min.js"></Script>
		
	
      <>
      <>
  {/* ============================ Page Title Start================================== */}
  <div className="ed_detail_head bg-light">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-lg-3 col-md-12 col-sm-12">
          <div className="authi_125">
            <div className="authi_125_thumb" >
              <img
                src={post?.image}
                className="img-fluid rounded object-cover object-contain"
                alt=""
                // style={{width:"350px",height:"200px"}}
              />
            </div>
            <a href="#" className="klio_45">
              <div className="lklo_45">
                <i className="fas fa-play" />
              </div>
              <h6>Preview</h6>
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="dlkio_452">
            <div className="ed_detail_wrap">
              <div className="crs_cates cl_1">
                <span>{post?.Type}</span>
              </div>
              <div className="crs_cates cl_1">
                <span>{post?.published}</span>
              </div>
              <div className="ed_header_caption">
                <h6 className="ed_title display-5">{post?.Name}</h6>
                
              </div>
              <div className="ed_header_short">
                <h6 className="text-muted">
                {post?.description}
                </h6>
              </div>
              <div className="ed_rate_info">
                <div className="star_info"
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
                <div className="review_counter">
                
                      {likes.length > 0 && (
                 <span className={`likes group-hover:text-pink-600 text-sm  ${
                  liked && "text-pink-600"}`}
                 
                  >
                         {likes.length}
                 </span>
                 )}
                </div>
              </div>
            </div>
            <div className="dlkio_last">
              <div className="ed_view_link">
                <a href="#" className="btn theme-bg enroll-btn">
                  Get Membership
                  <i className="ti-angle-right" />
                </a>
                <RWebShare
        data={{
          text: "You envision,we develop",
          url: "https://we-developers.vercel.app/",
          title: "WeDevelopers",
        }}
        onClick={() => console.log("shared successfully!")}
      >
                <a  className="btn theme-border enroll-btn">
                  Share
                  <i className="fas fa-share" />
                </a>
                </RWebShare>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ============================ Page Title End ================================== */}
  {/* ================================ Tag Award ================================ */}
  <section className="p-0 gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="crp_box fl_color ovr_top">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="dro_140">
                  <div className="dro_141">
                    <i className="fa fa-calendar" />
                  </div>
                  <div className="dro_142">
                    <h6>Starts on {post?.Month} {post?.Date}</h6>
                    <p>Aug 21, 2021 - Oct 21, 2021</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="dro_140">
                  <div className="dro_141 st-1">
                    <i className="fa fa-play" />
                  </div>
                  <div className="dro_142">
                    <h6>Lessions</h6>
                    <p><CountUp end={35} duration={10} /> Lectures</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="dro_140">
                  <div className="dro_141 st-3">
                    <i className="fa fa-user-shield" />
                  </div>
                  <div className="dro_142">
                    <h6>Current Students</h6>
                    <p><CountUp end={22} duration={10} /> k Students Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================================ Tag Award ================================ */}
  {/* ============================ Course Detail ================================== */}
  <section className="gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 order-lg-first">
          {/* Overview */}
          <Tabs variant='enclosed'>
  <TabList>
    <Tab><h6>Event Overview</h6></Tab>
    <Tab><h6>Event Topics</h6></Tab>
    <Tab><h6>Event Speaker</h6></Tab>
    
  </TabList>
  <TabPanels>
    <TabPanel>
     <>
     <p className="text-muted"> 
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p><br/>
      <h6>Requirements</h6>
											<ul className="simple-list p-0 text-muted">
												<li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
												<li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
												<li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
												<li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
												<li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
											</ul><br/>

 {/* <Stack direction='row'>
 <Image boxSize='200px'  src='data:image/jpeg;base64,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' alt='Dan Abramov' />
  <Image boxSize='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSM2VW3MDQ6xZh1mBfjAi4_LqcXDmXVX-6w&usqp=CAU' alt='Dan Abramov' />
  
  <Image boxSize='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvVJGudeqKtbl2EvCVRechavszypjqG-bcg&usqp=CAU' alt='Dan Abramov' />
</Stack> */}

     </>
                      


    </TabPanel>
    <TabPanel>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="card-body pl-3 pr-3">
														<ul className="lectures_lists">
															<li className="complete"><div className="lectures_lists_title"><i className="fas fa-check dios"></i></div>Web Designing Beginner<span className="cls_timing">40:20</span></li>
															<li className="progressing"><div className="lectures_lists_title"><i className="fas fa-play dios"></i></div>Startup Designing with HTML5 & CSS3<span className="cls_timing">20:12</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To Call Google Map iFrame<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>Create Drop Down Navigation Using CSS3<span className="cls_timing">25:05</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to Create Sticky Navigation Using JS<span className="cls_timing">18:10</span></li>
														</ul>
													</div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="card-body pl-3 pr-3">
														<ul className="lectures_lists">
															<li className="complete"><div className="lectures_lists_title"><i className="fas fa-check dios"></i></div>Web Designing Beginner<span className="cls_timing">40:20</span></li>
															<li className="progressing"><div className="lectures_lists_title"><i className="fas fa-play dios"></i></div>Startup Designing with HTML5 & CSS3<span className="cls_timing">20:12</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To Call Google Map iFrame<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>Create Drop Down Navigation Using CSS3<span className="cls_timing">25:05</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to Create Sticky Navigation Using JS<span className="cls_timing">18:10</span></li>
														</ul>
													</div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 3 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="card-body pl-3 pr-3">
														<ul className="lectures_lists">
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To Call Google Map iFrame<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To embed video in html5 banner?<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to use SVG card in html5?<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>Create Drop Down Navigation Using CSS3<span className="cls_timing">25:05</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to Create Sticky Navigation Using JS<span className="cls_timing">18:10</span></li>
														</ul>
													</div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 4 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="card-body pl-3 pr-3">
														<ul className="lectures_lists">
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To Call Google Map iFrame<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How To embed video in html5 banner?<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to use SVG card in html5?<span className="cls_timing">32:10</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>Create Drop Down Navigation Using CSS3<span className="cls_timing">25:05</span></li>
															<li className="unview"><div className="lectures_lists_title"><i className="fa fa-lock dios lock"></i></div>How to Create Sticky Navigation Using JS<span className="cls_timing">18:10</span></li>
														</ul>
													</div>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
    </TabPanel>
    <TabPanel>
    <div className="single_instructor bg-light">
  <div className="single_instructor_thumb">
    <a href="#">
      <img src="assets5/img/user-4.jpg" className="img-fluid" alt="" />
    </a>
  </div>
  <div className="single_instructor_caption">
    <h4>
      <a href="#">Jonathan Campbell</a>
    </h4>
    <ul className="instructor_info">
      <li>
        <i className="ti-video-camera" />
        72 Videos
      </li>
      <li>
        <i className="ti-control-forward" />
        102 Lectures
      </li>
      <li>
        <i className="ti-user" />
        Exp. 4 Year
      </li>
    </ul>
    <h6>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi.
    </h6>
    <ul className="social_info">
      <li>
        <a href="#">
          <i className="ti-facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ti-twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ti-linkedin" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ti-instagram" />
        </a>
      </li>
    </ul>
  </div>
</div>

    </TabPanel>
  </TabPanels>
</Tabs>
          
        
        </div>
        {/* Sidebar */}
        <div className="col-lg-4 col-md-12 order-lg-last">
          {/* Course info */}
          <div className="ed_view_box style_3 stick_top">
            <div className="property_video sm">
              <div className="thumb">
                <img
                  className="pro_img img-fluid w100"
                  src="assets5/img/banner-3.jpg"
                  alt="7.jpg"
                />
                <div className="overlay_icon">
                  <div className="bb-video-box">
                    <div className="bb-video-box-inner">
                      <div className="bb-video-box-innerup">
                        <a
                          href="https://www.youtube.com/watch?v=A8EI6JaFbv4"
                          data-toggle="modal"
                          data-target="#popup-video"
                          className="theme-cl"
                        >
                          <i className="ti-control-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ed_view_price pl-4">
              <h6>Entry Price</h6>
              <h6 className="theme-cl">K 1449.00</h6>
            </div>
            <div className="ed_view_short pl-4 pr-4 pb-2">
              <h6>
                The online andriod app development, is for both bigginners and experts.
              </h6>
            </div>
            <div className="ed_view_features half_list pl-4 pr-3">
              <span>Course Features</span>
              <ul>
                <li>
                  <i className="ti-user" />
                  <h6>Firebase</h6>
                </li>
                <li>
                  <i className="ti-time" /><h6>2 hour 30 min</h6>
                </li>
                <li>
                  <i className="ti-bar-chart-alt" />
                  <h6>React Native</h6>
                </li>
                <li>
                  <i className="ti-cup" />
                  <h6>React Js</h6>
                </li>
              </ul>
            </div>
            <div className="ed_view_link">
             
              <a className="btn theme-bg enroll-btn">
                Contact Us
                <i className="ti-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

</>

 
 <Footer />
 
</>

    )
}