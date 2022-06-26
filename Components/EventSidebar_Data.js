/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import EventSidebar from "./EventSidebar"
export default function EventSidebar_Data(){
    const [sidebar, setSidebar] = useState([]);
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Events")),
            (snapshot) => {
                setSidebar(snapshot.docs);
            }
          ),
        [db]
      );
    return(
        <>

        <div className="recent-posts mb-50">
        <div className="recent-posts mb-50">
              <div className="widget-title">
                <h3 className="title">Latest Events</h3>
              </div>
              <div className="recent-post-widget">
        {sidebar.map((post) => (
             < EventSidebar key={post.id} id={post.id} post={post.data()}/>
        ))}
            </div>
            </div>
            </div>
        </>
    )
}