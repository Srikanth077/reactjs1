import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

var idno;

const url = `http://localhost:3007/user`

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
        name:'',
        email:'',
        phone:'',
        txtConformation:''

    };
  }

   //Name input textbox
   unameHandling = (e) => 
   {
       this.setState({name:e.target.value})
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
         'name':this.state.name,
         'email':this.state.email,
         'phone':this.state.phone
     }
     alert(JSON.stringify(FormData));
 
    
 
      axios.put(`${url}/${idno}`, FormData)
      .then(()=>this.props.history.push('/restapi'));
     
   }

  render() {
    idno = this.props.match.params.idno;
    //this.props->history, location, match
    console.log(idno);

    var {id, name, email, phone, txtConformation} = this.state

    return (
      <>
        <div className="container p-5">
          <h2>EDIT COMPONENT PAGE</h2>

          <form onSubmit={this.submitHandler.bind(this)}>
            <div class="mb-3">
              <label  class="form-label">Id </label>
              <input type="text" class="form-control" value={id}/>               
            </div>

            <div class="mb-3">
              <label  class="form-label">Name </label>
              <input type="text" class="form-control" value={name} onChange={this.unameHandling.bind(this) }/>               
            </div>

            <div class="mb-3">
              <label  class="form-label">Email </label>
              <input type="email" class="form-control" value={email} onChange={this.emailHandling.bind(this) } />               
            </div>

            <div class="mb-3">
              <label  class="form-label">Phone No </label>
              <input type="number" class="form-control" value={phone} onChange={this.phoneHandling.bind(this) }/>               
            </div>

            <div class="mb-3">
            <Link className="btn btn-success mx-2" to="/restapi"> GOTO BACK </Link>
              <button type="submit" class="btn btn-warning text-white" value="update">Update</button>             
            </div>

          </form>

          
        </div>
      </>
    );
  }
  //RESTAPI_CALLS
  componentDidMount() {
    axios.get(`http://localhost:3007/user/${idno}`).then((result) => this.setState(result.data));
  }
}

export default Edit;
