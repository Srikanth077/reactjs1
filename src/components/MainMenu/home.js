//Home.js Module

import React from "react";

//Creat Home Component
function Home() {
  var cname = "Home Component";

  var msg = ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`;

  return (
    <>
      <h1 className="text-center text-primary">{cname}</h1>

      <p>{msg} </p>

    </>
  );
}

export default Home;
