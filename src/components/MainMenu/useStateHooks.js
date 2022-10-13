import { React, useState } from "react";

export default (props) => {
  var [stateEmail, setStateEmail] = useState("Srikanth@gmail.com");

  let handleStateEmail = () => {
    setStateEmail("srikanthchandra@gmail.com");
  };

  return (
    <>
      <div className="container p-5">
        <h1>React Hooks UseState</h1>
        {stateEmail}
        <br></br>
        <button onClick={handleStateEmail}>Update Email</button>
      </div>
    </>
  );
};
