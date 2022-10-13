import React from "react";

import image from "./../../assets/images/Profile.JPG";

var sk = {
  height: "350px",
};
 
var card = {
  // boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: "450px",
  margin: "auto",
  textAlign: "center",
  backgroundColor: "aqua"
};  

var bgc={
   backgroundColor:'lightyellow'
}

function Contact() {
  return (
    <>
      <div style={bgc} >
        <div className="card" style={card}>
          <img src={image} style={sk} className="card-img-top " alt="John" />
          <h1>Srikanth Bandari</h1>
          <p className="title card-body" style={{fontWeight:'bold'}}>Full Stack Developer</p>
          <p style={{fontWeight:'bold'}}>Metrolabs Services Pvt. Ltd.</p>

          <p>
            <button style={{backgroundColor:'purple'}}>Phone : +91 9133882300</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
