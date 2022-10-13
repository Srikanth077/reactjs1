import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


let url = `http://localhost:3007/user`

export default(props)=> {
 

   let [userData, setStateUserData]= useState( {
        name:'',
        email:'',
        phone:'',
    });


    //get-parameter value
   let  {idno} = useParams();

    useEffect(()=>{
        axios.get(`${url}/${idno}`).then((result) => setStateUserData(result.data));
    }, []); 
        
      
    var {id, name, email, phone} = userData
    
    let formDatahandling=(e)=>{
        setStateUserData({...userData, [e.target.name]:e.target.value});
    }

 
  let submitHandler = (e)=>
   {
     e.preventDefault();
 
     var FormData=
     {
         name:`${userData.name}`,
         email:`${userData.email}`,
         phone:`${userData.phone}`
     }
     alert(JSON.stringify(FormData));
 
    
 
      axios.put(`${url}/${idno}`, FormData)
      .then(()=>props.history.push('/hooksUser'));
     
   }

 
    return (
      <>
        <div className="container p-5">
          <h2>EDIT COMPONENT PAGE</h2>

          <form onSubmit={submitHandler.bind(this)}>
            <div class="mb-3">
              <label  class="form-label">Id </label>
              <input type="text" class="form-control" value={id}/>               
            </div>

            <div class="mb-3">
              <label  class="form-label">Name </label>
              <input type="text" class="form-control" value={name}  name="name"onChange={formDatahandling.bind(this) }/>               
            </div>

            <div class="mb-3">
              <label  class="form-label">Email </label>
              <input type="email" class="form-control" value={email} name="email" onChange={formDatahandling.bind(this) } />               
            </div>

            <div class="mb-3">
              <label  class="form-label">Phone No </label>
              <input type="number" class="form-control" value={phone} name="phone" onChange={formDatahandling.bind(this) }/>               
            </div>

            <div class="mb-3">
            <Link className="btn btn-success mx-2" to="/hooksUser"> GOTO BACK </Link>
              <button type="submit" class="btn btn-warning text-white" value="update">Update</button>             
            </div>

          </form>

          
        </div>
      </>
    );
  }
 


