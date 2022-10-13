//Index.js -> Module
import ReactDom from "react-dom";
import React from "react";

// //import home moudle
// import Home from './home.js'

//import Bootstrap into css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Import Routing.js
import Routings from "./components/routings.js";

import { Provider } from "react-redux";

import store from "./store";

ReactDom.render(<Provider store={store}>
  <Routings/>
  </Provider>,
  document.getElementById("root"));