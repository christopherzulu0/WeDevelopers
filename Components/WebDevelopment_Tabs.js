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