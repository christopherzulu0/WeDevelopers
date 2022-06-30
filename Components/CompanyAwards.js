/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import CountUp from "react-countup"
export default function CompanyAwards(){
    return(
        <>
     {/* ============================ Our Awards Start ================================== */}
  <section className="p-0 bg-light">
    <div className="container ">
      <div className="row justify-content-center bg-light">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="crp_box ovr_top bg-light shadow-sm z-10">
            <div className="row align-items-center m-0">
             
              <div className="col-xl-10 col-lg-9 col-md-10 col-sm-12 " >
                <div className="part_rcp">
                  <ul>
                    <li>
                      <div className="dro_140">
                        <div className="dro_141" style={{border:"none"}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/1705/1705271.png"  alt="image" />
                        </div>
                        <div className="dro_142">
                          <h6 >
                            Completed Projects <br/>
                            <CountUp end={20} duration={5} />
                          </h6>
                         
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dro_140">
                        <div className="dro_141 st-1" style={{border:"none"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/7560/7560780.png"  alt="image" />
                        </div>
                        <div className="dro_142">
                          <h6>
                            Client Satisfaction<br/>
                            <CountUp end={100} duration={5} />
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dro_140">
                        <div className="dro_141 st-2" style={{border:"none"}}>
                        <img src="https://cdn-icons.flaticon.com/png/128/3099/premium/3099530.png?token=exp=1656590202~hmac=c99bef27939eb48a70dc163c247fd88e"  alt="image"  />
                        </div>
                        <div className="dro_142">
                          <h6>
                           Awards<br/>
                           <CountUp end={5} duration={5} />
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dro_140">
                        <div className="dro_141 st-3" style={{border:"none"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/609/609104.png"  alt="image" />
                        </div>
                        <div className="dro_142">
                          <h6>
                           Expert Members<br/>
                           <CountUp end={3} duration={5} />+
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dro_140">
                        <div className="dro_141 st-3" style={{border:"none"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3280/3280897.png"  alt="image" />
                        </div>
                        <div className="dro_142">
                          <h6>
                           Partnership<br/>
                           <CountUp end={6} duration={5} />
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============================ Our Awards End ================================== */}
        </>
    )
}