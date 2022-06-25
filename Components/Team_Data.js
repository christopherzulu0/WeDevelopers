import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Team from "./Team";
// import EventBlog from "../pages/EventBlog";
import { useRouter } from "next/router";
export default function Team_Data(){
    const [team, setTeam] = useState([]);
    const router = useRouter();
    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "Team")),
            (snapshot) => {
              setTeam(snapshot.docs);
            }
          ),
        [db]
      );
    return(
        <>
         <div className="team ptb-100 bg-light">
        <div className="container">
          <div className="default-section-title default-section-title-middle">
            <h6 style={{ color: "#00638D" }}>WEDEVELOPERS TEAM</h6>
            <h3>Meet Our Professional Experienced Team</h3>
          </div>
          <div className="section-content">
            <div className="row">
        {team.map((post) => (
          <Team key={post.id} id={post.id} post={post.data()} />
        ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}