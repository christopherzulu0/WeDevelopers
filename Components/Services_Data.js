/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Services from "./Services";
// import EventBlog from "../pages/EventBlog";
import { useRouter } from "next/router";
export default function Services_Data(){
    const [services, setServices] = useState([]);
    const router = useRouter();
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Services")),
            (snapshot) => {
              setServices(snapshot.docs);
            }
          ),
        [db]
      );
    return(
        <>
                  <div className="features ptb-100 bg-f9faff" style={{marginTop:"-10%"}}>
  <div className="container">
    <div className="default-section-title default-section-title-2 default-section-title-middle">
      <h6>Features</h6>
      <h3>WeDeveloper's Services To Clients.</h3>
    </div>
    <div className="section-content">
      <div className="row">
        {services.map((post) => (
          <Services key={post.id} id={post.id} post={post.data()} />
        ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}