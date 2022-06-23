/* eslint-disable @next/next/no-img-element */
import {useState} from "react"
import {Tab,Tabs} from "react-bootstrap"
export default function WebDevelopment_Tabs(){
    const [key, setKey] = useState('wordpress');
    return(
        <>
        <div className="bg-light">
        <div className="section-title text-center bg-light">
      
      <h2 >Web Development Web Sites</h2><br/>
      <h4>We can create different types of websites ranging from</h4>
    </div>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 bg-light"
     
    >
        {/* Start Of Wordpress Tab */}
      <Tab eventKey="wordpress" title="Wordpress" style={{marginLeft:"0%"}} className="text-info">
      <div className="build-area-two pt-30 pb-70">
        <div className="container">
   
    <div className="row pt-5" style={{marginLeft:"-3%"}}>
      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/353880308/preview/00_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f0ba41039b876ba14eed6300782ca896" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/387233983/01_Preview+Image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=42da55a013376b19a0fc5ff93db2a9ff" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397060378/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5d0cec3d1bf225be1209d6b4a78ba8e7" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/385517374/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=09cc33f18cd600a55ce141f0b10398ae" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/388605991/qoxag_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e32904b463b407ab6f6df183d745b303" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/392444251/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=41096cbba3faf51d872257a4227d752c" alt="Images" />
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

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/395075411/neeon-preview/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d5f95c9d32917e8cb36f41aecdc113af" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/264399716/01_590x300.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a15f426a039d6e17fc423d0f20490ea9" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397042327/01_preview-image.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=dec34fa443e3e7638019d451e26f2fa2" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/360159256/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=040fc66302581a38263220d3924cf573" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/275495308/Theme-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9d2dd14293ece6a35552c3510ddd435d" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/386199611/theme_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a37e0bb6f829ec72d19a56d41e0ec8ef" alt="Images" />
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

      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/390433285/Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2ddc9d837a53794d00522bb4fa20844f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/267632735/01_vividly_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fd54f835d482a1c0d28369cb0fe3b0ea" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/267632735/01_vividly_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fd54f835d482a1c0d28369cb0fe3b0ea" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/390510928/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=998c7568d57720eae3127cef3354e95d" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/291621375/embe-preview/01_embe_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=3419557275fb4ef21a2473f07ed59427" alt="Images" />
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

       {/* End Of Wordpress Tab */}
        
        {/* Start Of Ecommerce Tab */}
      <Tab eventKey="Ecommerce" title="Ecommerce"  style={{marginLeft:"0%"}}>
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/396313924/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9c42ab76216f16d03e944878293e4e5c" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/394970599/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d87c0fe7b7e0bc4756d02e50c4c50dda" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/378039931/pw+sb+emarket/01_590x300.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a311b1e19f0d5ddcca00bb034c0b64fb" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/333584495/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=750e7bfb37331fddaf6ee543920b7d58" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/333584495/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=750e7bfb37331fddaf6ee543920b7d58" alt="Images" />
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
      {/* End Of Ecommerce Tab */}

      {/*Start OF Html Tab */}
      <Tab eventKey="HTML" title="HTML"   style={{marginLeft:"0%"}} >
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
       {/* End Of Shopify Tab */}
      <Tab eventKey="shopify" title="Shopify"   style={{marginLeft:"0%"}} >
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
      {/* End Of Shopify Tab */}
      
      {/* Start of Marketing Tab */}
      <Tab eventKey="Marketing" title="Marketing"   style={{marginLeft:"0%"}} >
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

      {/* End of Marketing Tab */}

      {/* Start Of Blogging Tab */}
      <Tab eventKey="Blogging" title="Blogging"   style={{marginLeft:"0%"}} >
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
       {/*End Of Blogging Tab */}

       {/*Start of Courses Tab */}
      <Tab eventKey="Courses" title="Courses"   style={{marginLeft:"0%"}} >
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
      {/*End Of Courses Tab */}

      {/*Start Of Forums Tab  */}
      <Tab eventKey="Forums" title="Forums"   style={{marginLeft:"0%"}} >
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
        {/*End Of Forums Tab */}

        {/*Start Of UI Templates */}
      <Tab eventKey="UI Templates" title="UI Templates"   style={{marginLeft:"0%"}} >
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
       {/*End Of UI Templates */}

       {/*Start Of UI Templates */}
      <Tab eventKey="Elementor" title="Elementor"   style={{marginLeft:"0%"}} >
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
{/*End Of Elementor Tab */}
    </Tabs>
    
</div>
        </>
    )
}