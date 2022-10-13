import React from "react";

//Nested Components
import Webapplication from "./itservice/webapplication.js";
import Mobileapplication from "./itservice/mobileapplication.js";
import uiuxdesign from "./itservice/uiuxdesign.js";
import Projectsupport from "./itservice/projectsupport";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

var services = [
{
  title : 'Web application',
  routename : '/webapp'
},
{
  title : 'Mobile application',
  routename : '/mobapp'
},
{
  title : 'UI-UX design',
  routename : '/uiux'
},
{
  title : 'Project Support',
  routename : '/support'
}
]

var bgc = { backgroundColor: "lightyellow" };

function Itservice() {
  return (
    <>
      <BrowserRouter>
        <div
          className="container-fluid p-4 "
          style={{ backgroundColor: "gray" }}
        >
          <h2 style={{color:'white'}}> IT SERVICE</h2>

          <p>
            Information technology service management is the activities that are
            performed by an organization to design, build, deliver, operate and
            control information technology services offered to customers. IT
            services refers to the application of business and technical
            expertise to enable organizations in the creation, management and
            optimization
          </p>

          <div className="container py-5 bg-dark">
            <div className="row">
              <div className="col-md-3">
                {/* <ul className="list-group">
                  <li className="list-group-item" style={bgc}>
                    <Link to="/itservice/webapp">Web Applications Service</Link>
                  </li>

                  <li className="list-group-item" style={bgc}>
                    <Link to="/itservice/mobapp">
                      Mobile Applications Service
                    </Link>
                  </li>

                  <li className="list-group-item" style={bgc}>
                    <Link to="/itservice/uiux">UX-UI Design Service</Link>
                  </li>

                  <li className="list-group-item" style={bgc}>
                    <Link to="/itservice/prosup">Project Support Service</Link>
                  </li>
                </ul> */}
                <ul className="list-group">
                  {
                    services.map((data, i)=>
                    {
                      return( <li className="list-group-item" style={bgc}>
                      <Link to={`/itservice${data.routename}`}>{data.title}</Link>
                    </li>)
                    })
                  }
                </ul>
              </div>
              <div
                className="col-md-9  text-white"
                style={{ backgroundColor: "#12151c" }}
              >
                <Switch>
                  <Route exact path="/itservice" component={Webapplication} />
                  <Route
                    exact
                    path="/itservice/webapp"
                    component={Webapplication}
                  />

                  <Route
                    path="/itservice/mobapp"
                    component={Mobileapplication}
                  />

                  <Route path="/itservice/uiux" component={uiuxdesign} />

                  <Route path="/itservice/support" component={Projectsupport} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Itservice;
