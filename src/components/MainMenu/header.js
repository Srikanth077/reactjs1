import React from "react";

import {  NavLink } from "react-router-dom";




function Header() {

var MenuNames = ["Home", "About", "Service", "Itservice","Contact", "Myclass", "Lifecycle", "Restapi", "RB", "Signup", "RRC", "RSHooks", "RUSEffect", "Pagination", "HooksUser", "HooksSignup", "HooksRedux"]
           

  return (
    <>
      {/* LINK FOR MENUBAR */}

      <nav
        className="navbar navbar-expand-lg navbar-light justify-content-end "
        style={{
          backgroundColor: "#475562",
          borderBottom: "0.5px white solid",
          borderTop: "0.5px white solid",
          // justifyContent:'end'
        }}
      >
        <div className="container-fluid " >
         
          <div  className="collapse navbar-collapse "  id="navbarNav">
            {/* <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-white"
                  activeClassName=" bg-dark"
                  activeStyle={{fontWeight:'bold'}}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName=" bg-dark"
                  activeStyle={{fontWeight:'bold'}}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName=" bg-dark"
                  activeStyle={{fontWeight:'bold'}}
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  activeClassName=" bg-dark"
                  activeStyle={{fontWeight:'bold'}}
                  to="/contact"
                >
                  Contact 
                </NavLink>
              </li>
            </ul> */}
             
             <ul className="navbar-nav">
              {
                MenuNames.map((data, i)=>
                <li className="nav-item px-1 justify-content-end" key={i}>
                <NavLink
                  className="nav-link text-white"
                 activeClassName="bg-dark"
                 style={{fontWeight:'bold'}}
                  to={`/${data.toLowerCase()}`}
                >
                  {data}
                </NavLink>
              </li>)
              }
             </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
