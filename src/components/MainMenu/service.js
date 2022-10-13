import React from "react";

// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

//Import External Local JSON file data into component
import ServiceData from "./../../assets/json/services.json";

// var body = {
//   backgroundColor: "",
// };

// var servicecard = {
//   fontFamily: "Overpasssans-serif",
//   height: "auto",
//   width: "90%",
//   color: "red",
//   backgroundColor: "#6185e9",
//   margin: "20px",
//   transition: "all .15s ease",
//   cursor: "pointer",
//   borderRadius: "20px",
// };
// var title = {
//   padding: "15px",
//   fontSize: "24px",
//   borderBottom: "2px solid #FAD961",
//   color: "#fff",
//   borderRadius: "30px",
// };

var bgc = { backgroundColor: "#12151c" };

function Service() {
  return (
    <>
      <div className="container-fluid" style={bgc}>
        <div className="conatiner p-5 text-center">
          <h1 className="text-white pt-2 -b-5">SERVICES</h1>
          <div className="row">
            {ServiceData.map((data, i) => {
              return (
                <div className="col-lg-4 bg-dark">
                  <div className="card text-center text-white p-3 m-5" style={bgc}>
                    <p className="text-center">
                      {/* <FontAwesomeIcon
                        icon={data.icon}
                        size="4x"
                        className="fw-bold text-success"
                      /> */}
                    </p>
                    <div className="card-body ">
                      <h3 className="py-3">{data.name}</h3>
                      <p className="text-justify">{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
