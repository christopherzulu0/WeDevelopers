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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/330855937/preview/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6847d8d9715a69e2ed33ac0c6caae096" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/294246037/01_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9e9bd4ad7cd8d8ca5cdc45b94d792ec2" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/294459006/01_mainpreview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ba1eca4e42b73c599a0c44c2faca274a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/236650261/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0bad35524260d564b3f2f76cf091c4d7" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/374335106/01_Homepage.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6eb8d8e5fcf0fc2e346fbe965632ee5a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/393823057/theme_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2b4f55f9e6eecaf2580087521b28402e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/278358037/01_590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=808f8024f6c5d4a92f76fa6f8d662575" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/278358422/01_590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d58fce703e848e63887c92c7e2107783" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/327657922/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=b950330c2a65fbf3e2d820e3c2f3ce69" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/256961911/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9f899922aae462b787f18d5aa94c1d0b" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/180656804/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=cebd5b0411b8e93026a13d940612558f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/370790662/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d2029cfdf0b0032dc860457303077414" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/284305333/01-590x300.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f9b22a298c91fa4522ed985e49e6a0e6" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/368466636/01_Exponent.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=cc53025a915841218936b529c50e4c4f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/304076200/01_healthflex-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a66521ae8ecfea5f62366929b061d57e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/336675335/Preview-WP.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5d7e832a9d291d721228f5cae9dcd779" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/247825235/banner.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=06539c334e50272eef1c6cc67c7cb980" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/289242522/001_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5f440521487277de4ef2e7bdd768a2ad" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/387399417/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=62ec964d48035a11fe4762605d787886" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/376816385/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=298db52a0f79f3c8ed07108902e10bd6" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/346869337/00_Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6e51a8f979d409eb6c07eaba927c81fe" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397219514/01_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e46317234562fa24fe1d9eae14ed78ac" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/373536014/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82ad3c9dac0e4494a5578b500b25ee6d" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/387224051/preview/01_cover.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9baaf25dc5ca5ccd9a826a42ee000917" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/388916680/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=87854b3fcee3ebf7daf980b12f7853fa" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/376213627/neeon-preview/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=383f938e4b4bb4406143a4f57daa9648" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/377168627/volia_preview/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=1e8322ed9910feb2309a10d86573e8b9" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397058374/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=b99800c2df44f8bbf025a78c8e918157" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/355410386/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0eb35c65a911632f3c0fbce1431bead1" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/395364558/Banner.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6989fee40b0bcb11f46fb94f1b1ec915" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/369366426/theme+preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2164a83cb2a14652c3a75fa6a5e8f701" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/363267005/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=12b8fd3cdd72f7620d858eb55231d429" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/389038496/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e3619367b2e2854604ad41fe3528f10e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/395565948/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ca96945111efb25218284b81e852bea8" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/262303941/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7ce45de3cf6b14d6864372b1ff1fef81" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/126636889/00-everline-590.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=14d98fbde9a5cd6a6da00d2e08cb73f3" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/272737031/Preview+image/01_preview_590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=089e15df40ed7f07179e3674a17610f7" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/371699020/01_590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=802a93a6d284ba14b140ac33573d8c3a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/304575652/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=a5d37c25d9289946ef85ad989280be22" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/335122503/01_preview_medizin.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e6d0fce99844965f633c533757c7705a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/355848162/preview+nutrivix.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=448516b04fd7ad13fb09af1797e69009" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/286988438/proz-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=29b85cb184fa93af180c3e9674fabd06" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/319461680/01_Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2068f5fba4f17741883740fdf85b3760" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/180370980/preview-image.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=332980c7c159c341b7f8af8831d41203" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/389572276/original+image.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=32ef6966f7255ebd3162c2ecb3d51ee1" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/272366352/I-cam.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0de126d1dd3067f7386f6dd750888adf" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/221066070/SP_Venster_Preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f4629cfd973d2df63c6f6909cd9b641a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/190199142/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=df4c9ed12efc7a87cb055cf5d4e477ba" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/241779462/00_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=8c459291bd42186991989c64da438922" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/321836131/preview_590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a46be6d6df39a5c2abed1d6dbb2efe0" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/263757726/00.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=935ca4675da8ab9f8051142b4d1085dc" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/251559882/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7d1b4daf70ae0c8b68ce58626e1b3949" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/274244955/Mabel-Fashion.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=81a3ea9491b08258b46d2712499f0cca" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/385826050/ScreenShots/00.ThemePreview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e188863a1830f1eb9cb8dfbf0b44f8b1" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/374835629/spares.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=48783cacb6a72de1af3988c34ee7193e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/390640830/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f4c277d6c30b8a710293ad8b922aff4a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/377276926/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=3f93f79919350d9b3f54feebbab364a0" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/349119054/01_octal_theme_preview.jpg.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=4f1cbf67cf13cd2fffe2b16e3ba8c73f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/368264161/01_descon_theme_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=63cd085455359e821213e3835fb55d51" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/385838797/01_alexis_theme_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=8581387f76a2cfd0a3146318d06864b4" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/392025788/01_stark_theme_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ed556c18a32ca8b524df9cc62b743d0a" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/387828672/01_Appexy.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f85465d2bf74e1624524bde9ca80e112" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/361489602/00_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=49982a784030f8830449c376090d5115" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/208835088/Screenshots/00_cover.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=3ed7d25bdb38efb64bfafd1375442970" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/143008448/Screenshots/00_cover.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=0143aced40799464af78d252443130ee" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/233268110/Screenshots/00_cover.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7575378e788e3c17587bc7ad8f3d32e0" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/84429211/Previews/1+preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ea7cead1c36f9525a5853c516eb3fef2" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/83381179/theme-preview/01_banner.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=31abdeb4e4263546da04099e58400aad" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/248088842/Preview/00_Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fd62c1445bf0ee822d04ec97900bc34e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/126568380/Preview/590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=eb4a67ed7b6f23f2e31c73c4e658bebc" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/129265821/00_preview-avira.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d48513d2a48cf3f21a0181a1c81c536e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/85365624/previews/01_banner.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e460ed51d6b3f370a570ff0572b7ef7e" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/132213970/Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ff941591d2fa222af8c6ad6303280db2" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/285849041/protem_unbounce_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=849998c5d35fc26ddb95c058e51726af" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/257100132/Preview/00_Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d71fd93d206b0fc101b0e8b08db63010" alt="Images" />
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

      {/* Start Of CMS Tab */}
      <Tab eventKey="CMS" title="CMS"   style={{marginLeft:"0%"}} >
      <div className="build-area-two pt-30 pb-70">
        <div className="container">
   
    <div className="row pt-5" style={{marginLeft:"-3%"}}>
      <div className="col-lg-4 col-md-6">
        <div className="build-item">
          <a href="case-details.html">
            <img src="https://themeforest.img.customer.envatousercontent.com/files/330789271/best_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9cd158eafa913638383754f1afd4b80f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/390544623/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=26553404ede14510e43461399657a543" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/395057659/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=06acaf54a890635ffb66cde8eb2ab277" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/298315215/preview/01_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=d69d028727b0d0e5f9b8613932a81900" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/304071840/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=cd812261ddeb6fc353c83c238b8fbb3f" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397373338/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7fa1bd55c3c0958aa03545ba8daeac56" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/397202206/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=8662e7aca24f26ee3360acd40a7664b5" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/388720677/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=28ad7acb7762c0411d0ff4ee5e35350c" alt="Images" />
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
            <img src="https://previews.customer.envatousercontent.com/files/365647916/01_preview.__large_preview.jpg" alt="Images" />
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
            <img src="https://previews.customer.envatousercontent.com/files/365647916/01_preview.__large_preview.jpg" alt="Images" />
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
            <img src="https://previews.customer.envatousercontent.com/files/383154327/01_Preview.__large_preview.jpg" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/346578173/screenshot.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=35fcfd940fb7cdf133be0b7b4065c260" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/346580677/01_softek_HubSpot.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=84bc33600f0bf8d1c8bb561ec16c4ec9" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/345149377/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6cd205ee65e6777bac2916738c9bdae6" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/343608846/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=984a2a87cc313fb08d83d52b9a4d8f46" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/354827709/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=4e7efbe32b19aea0e26104b2176617ff" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/343174688/banner.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e888e51e88de72c957a87ac2805bd105" alt="Images" />
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
            <img src="https://themeforest.img.customer.envatousercontent.com/files/345312697/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=537584180bf55c46704c380f9c496697" alt="Images" />
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