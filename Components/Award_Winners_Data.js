import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Award_Winners from "./Award_Winners";
// import EventBlog from "../pages/EventBlog";
import { useRouter } from "next/router";
export default function Award_Winners_Data(){
    const [award, setAwards] = useState([]);
    const router = useRouter();
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Award_Winners")),
            (snapshot) => {
              setAwards(snapshot.docs);
            }
          ),
        [db]
      );
    return(
        <>
              <div className="bg-light text-gray-100 px-8 py-12 ">
        <div className="container">
          <div className="section-title text-center">
            <h2>WeDeveloper's Award Winners</h2>
          </div>
          <div className="row pt-45">
        {award.map((post) => (
          <Award_Winners key={post.id} id={post.id} post={post.data()} />
        ))}
        </div>
        </div>
        </div>
      
        </>
    )
}