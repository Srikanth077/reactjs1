import React from "react";

class Myclass extends React.Component 
{
   
  //constructor
  constructor() {
    super();

    //step-1 state object initilazation
    this.state=
    {  
           email:'srikanth@gmail.com',
           Phone: 9133882300
    }
  }

  statechanges=()=>
  {
    this.setState({

        email:'keerthisrikanth2517@gmail.com',
        Phone:9133882517

    })
  }

  //Prepare The Component_Input
  render() {
    return (<>

    <div className="container p-5">
    <h1> REACT CLASS COMPONENTS & STATE & EVENTS</h1>

    {/* step-2 Acess State oject prperties from JSX*/ }
    <p> Email is:  {this.state.email} </p>

    {/**step-3 change state object data by this.setState() */}
    <button type="button" onClick={()=>this.setState({email:'srikanthbandari@gmail.com'})}>Change My Email</button>

    <br/><br/>
    <p> Phone Number is:  {this.state.Phone} </p>
    {/**step-3 change state object data by this.setState() */}
    <button type="button" onClick={()=>this.setState({Phone:7981851335})}>Change My Phone Number</button>

    <br/><br/>

     <button onClick={()=> this.statechanges()}>Update All State properties</button>

    </div>
    
    </>);
  }
}

export default Myclass;
