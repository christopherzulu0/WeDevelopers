/* eslint-disable @next/next/no-img-element */
import {useState} from "react"
import {Tab,Tabs} from "react-bootstrap"
export default function ServicesTab(){
    const [key, setKey] = useState('home');
    return(
        <>
        <div className="bg-light">
        <div className="section-title text-center bg-light">
      
      <h2 className="pb-10">Project Portfolio</h2>
    </div>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 bg-light"
      style={{marginLeft:"30%"}}
    >
      <Tab eventKey="home" title="Web Development" style={{marginLeft:"0%"}} className="text-info">
      <div className="build-area-two pt-30 pb-70">
        <div className="container">
   
    <div className="row pt-5" style={{marginLeft:"-3%"}}>
      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/385383074/bb.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=b1d3e6255e6ce5cfc86416c274029aea" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">LMS </a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/367382755/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=249703738e845838ca5dad2f85dc4df4" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Online Courses</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Social</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/358810151/00_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=abe6a0e0f40df06a4a339f2b7ed991fa" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">IT TECH Company</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">UI/UX Design</a>
              </li>
              <li>
                <a href="case-details.html">Research</a>
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/350304229/Maan-Soft-Up.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5ec2c4ae4242d39aed889c1412104460" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Landing Page</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/366363766/01_wolmart.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c51562a4acc19783731ad9c5e36e75a5" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Ecommerce</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/378166127/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=76af8890d53c2f74ebdfb6da443e3bbd" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Health Services</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div> 
      </Tab>
      <Tab eventKey="profile" title="Softwares"  style={{marginLeft:"0%"}}>
      <div className="build-area-two pt-30 pb-70">
        <div className="container">
   
    <div className="row pt-5" style={{marginLeft:"-3%"}}>
      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/355267492/preview/00_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0820ffbbe775fa09e1f6235dd458b771" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Furniture Store</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/390559498/theme_preview.jpeg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=bbf5df51dfd5b994beeff06fed78f9dc" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">WooCommerce</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Social</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/393427384/Biona.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6e4b00295c6a34e31dac7324137f2ce5" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Sports</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">UI/UX Design</a>
              </li>
              <li>
                <a href="case-details.html">Research</a>
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/396313924/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9c42ab76216f16d03e944878293e4e5c" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Home Appliances</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/372131945/00_Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f28af701cc07873df1a8f968bbc2b17d" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Electronic Store</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/395031356/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=8b0b16111c5b6163ed058d3cdcef7f93" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Auto Parts WooCommerce</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
      </Tab>
      <Tab eventKey="contact" title="Mobile Applications"   style={{marginLeft:"0%"}} >
      <div className="build-area-two pt-30 pb-70">
        <div className="container">
   
    <div className="row pt-5" style={{marginLeft:"-3%"}}>
      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/383685933/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ebb677d51751bdf45a3ca3ec49c13135" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">NTF Market Place</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/396174369/01_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=1df1784e472d10d7c74767eb082f9078" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Job Portal</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Social</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/389376219/01_preview_carce.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=926e1e4305b20fe6c41cf5d2778028f3" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Office Decoration</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">UI/UX Design</a>
              </li>
              <li>
                <a href="case-details.html">Research</a>
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/370517652/01_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=bfd01d99136ea87186062f1e86174bca" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Meds Store</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/364710426/01_Foodkapp+mobile+app.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a895b2af76d3019f3a7b8892e97a9360" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Online Restaurant</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/374555564/01_banner.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=89eff0f5138c96ca3b9e4e3d8add1581" alt="Images" />
          </a>
          <div className="content shadow bg-light">
            <h3>
              <a href="case-details.html">Multipurpose Store</a>
            </h3>
            <ul>
              <li>
                <a href="case-details.html">Design</a>
              </li>
              <li>
                <a href="case-details.html">Development</a>{" "}
              </li>
            </ul>
            <a href="case-details.html" className="more-btn">
              <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
      </Tab>
    </Tabs>
    
</div>
        </>
    )
}