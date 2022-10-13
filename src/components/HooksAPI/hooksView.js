import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

var idno;

export default (props)=> {
  
   var [userData, setStateUserData] = useState({
      id:'',
      name:'',
      email:'',
      phone:''
   });

   //get parameter value
   let  {idno} =useParams();

   //destructuring for object
   let{id, name, email, phone} = userData

   useEffect(()=>{
    
        const url = `http://localhost:3007/user/${idno}`
        axios.get(url).then((result) => setStateUserData(result.data));
      
   },[]) 



    return (
      <>
        <div className="container p-5">
            <h2>VIEW COMPONENT PAGE</h2>
            <p>
                {idno} Reacord Data
            </p>

              <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{email}</li>
                <li>{phone}</li>
              </ul>

   <Link className="btn btn-success" to="/hooksUser">GOTO BACK</Link>

        </div>
      </>
    );
  }
  //RESTAPI_CALLS
  


