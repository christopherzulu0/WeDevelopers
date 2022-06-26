import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Events from "./Events";
import Link from "next/link"
// import EventBlog from "../pages/EventBlog";

export default function Event_Data({EventPage,id}){
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Events")),
            (snapshot) => {
              setPosts(snapshot.docs);
            }
          ),
        [id]
      );
    return(
        <>
        
            
              <div className="blog-area pt-90 pb-70 bg-light"
              
              >
        <div className="container ">
          <div className="section-title text-center">
            <h2>Events</h2>
          </div>
         
          <div className="row pt-45"
        //   
          >
        {posts.map((post) => (
          <Events key={post.id} id={post.id} post={post.data()} />
        ))}
        </div>
        </div>
        </div>
     
        </>
    )
}