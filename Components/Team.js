/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
function Team({post}) {
  return (
    <>
     
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                <div className="team-card">
                  <div className="team-card-text">
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          style={{
                            width: "100%",
                            height: "160px",
                            marginLeft: "10%",
                          }}
                          id="img-team"
                          name="Dan Abrahmov"
                          src={post?.image}
                        />
                      </WrapItem>
                    </Wrap>
                    <h4 className="mt-3">
                      <a href="team.html">{post?.Name}</a>
                    </h4>
                    <p>{post?.Position}</p>
                    <div className="team-social-icons">
                      <ul>
                        <li>
                          <a
                            href={post?.Facebook}
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={post?.Linkedin}
                            target="_blank"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href={post?.Twitter} target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href={post?.Instagram} target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              

              

            
    </>
  );
}

export default Team;
