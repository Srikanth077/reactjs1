//
import React from "react";

//Functional_Components_into_Routings
import Header from "./MainMenu/header.js";
import Footer from "./MainMenu/footer.js";
import Home from "./MainMenu/home.js";
import About from "./MainMenu/about.js";
import Service from "./MainMenu/service.js";
import Contact from "./MainMenu/contact.js";
import pagenotfound from "./pagenotfound.js";
import Itservice from "./MainMenu/itservice.js";

//Class_component
import Myclass from './myclass'
import Lifecycle from './MainMenu/Lifecycle.js'
import Restapi from './MainMenu/Restapi.js'
import View from './MainMenu/RESTAPI/view.js'
import Edit from './MainMenu/RESTAPI/edit.js'
import ReactBootstrap from './MainMenu/reactbootstrap.js'
import Signup from './MainMenu/signup.js'

import ReactReduxConnection from './MainMenu/ReactReduxConnection.js'

//React Hooks
import RSHooks from './MainMenu/useStateHooks.js'
import RUSEffect from './MainMenu/useEffectHooks.js'
import Pagination from './MainMenu/pagination.js'
import HooksUser from './HooksAPI/hooksUser.js'
import HooksView from './HooksAPI/hooksView.js'
import HooksEdit from './HooksAPI/hooksEdit.js'
import HooksSignup from './HooksAPI/hooksSingup.js'
import HooksRedux from './HooksRedux/HooksRedux.js'




//Router_Package
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Routing_setup
function Routings() {
  return (
    <BrowserRouter>

    {/* Nav bar links */}
      <Header/>

      <Switch>
   
       {/* Load Home component as Default page of the Project */}
      <Route exact path="/" component={Home} />

      <Route path="/home" component={Home} />

      <Route path="/about" component={About} />

      <Route path="/service" component={Service} />

      <Route path="/itservice" component={Itservice} />

      <Route path="/contact" component={Contact} />

         {/* <Myclass/> */}
      <Route path="/myclass" component={Myclass} />

         {/* <Lifecycle/> */}      
      <Route path="/Lifecycle" component={Lifecycle} />

      {/* <Restapi/> */} 
      <Route  exact path="/Restapi" component={Restapi} />

       {/* <View/> with Router parameter */} 
       <Route   path="/restapi/view/:idno" component={View} />

       {/* <Edit/> with Router parameter */} 
       <Route   path="/restapi/edit/:idno" component={Edit} />

       {/* <ReadtBootStrap/> */} 
       <Route   path="/rb" component={ReactBootstrap} />

        {/* <Signup/> */} 
        <Route   path="/signup" component={Signup} />

         {/* <ReactReduxConnection/> */} 
        <Route   path="/rrc" component={ReactReduxConnection} />

         {/* <ReactHooks/> */} 
        <Route   path="/RSHooks" component={RSHooks} />

        {/* <ReactHooks UseEffect/> */} 
        <Route   path="/RUSEffect" component={RUSEffect} />

        {/* <ReactHooks Pagination/> */} 
        <Route   path="/Pagination" component={Pagination} />

        {/* <ReactHooks Pagination/> */} 
        <Route   exact path="/HooksUser" component={HooksUser} />
        <Route   path="/HooksUser/view/:idno" component={HooksView} />
        <Route   path="/HooksUser/edit/:idno" component={HooksEdit} />

        <Route   path="/hooksSignup" component={HooksSignup} />

        <Route   path="/HooksRedux" component={HooksRedux} />
        

      <Redirect to="/home"/>


      <Route component={pagenotfound} />

      </Switch>


      {/* Footer link */}

      <Footer/>
       
    </BrowserRouter>
  );
}

export default Routings;
