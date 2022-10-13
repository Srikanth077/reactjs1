import React, { Component } from "react";
import axios from "axios";

const url = ` http://localhost:3007/user`; 

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
        uname:'',
        email:'',
        phone:'',
        txtConformation:''

    };
  }

  //Name input textbox
  unameHandling = (e) => 
  {
      this.setState({uname:e.target.value})
  }

  //Email input textbox
  emailHandling = (e) => 
  {
      this.setState({email:e.target.value})
  }

  //Phone input textbox
  phoneHandling = (e) => 
  {
      this.setState({phone:e.target.value})
  }

  submitHandler = (e)=>
  {
    e.preventDefault();

    var FormData=
    {
        'name':this.state.uname,
        'email':this.state.email,
        'phone':this.state.phone
    }
    alert(JSON.stringify(FormData));

    // axios.post(url, FormData)
    // .then(()=>window.alert("....CREATED....."))
    // .catch(()=>window.alert("ERROR"));


    // axios.post(url, FormData)
    // .then(()=>this.setState({txtConformation:'Account Created'}))
    // .catch(()=>this.setState({txtConformation:'Account Failed'}));

     axios.post(url, FormData)
     .then(()=>this.props.history.push('/restapi'));
    
  }


  render() {
   
    console.log(this.props)

    var {uname, email, phone, txtConformation} = this.state
    return (
      <>
        <div className="container p-3">

          <h4 className="py-3 text-center">User Registration</h4>

          <div className="container w-50">

            <form onSubmit={this.submitHandler.bind(this)}>

              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value={uname} onChange={this.unameHandling.bind(this) } />
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value={email} onChange={this.emailHandling.bind(this) } />
              </div>

              <div class="mb-3">
                <label class="form-label">Phone No</label>
                <input type="number" class="form-control"  value={phone} onChange={this.phoneHandling.bind(this) }/>
              </div>

              <div class="mb-3">
                <button type="submit" class="btn btn-primary" >CREATE ACCOUNT</button>
              </div>
              

              <p className="text-success">{txtConformation}</p>

            </form>
          </div>

        </div>
      </>
    );
  }
}

export default Signup;
