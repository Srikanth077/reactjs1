import React, { setState, useEffect, useState } from "react";

import axios from "axios";
import { Link } from 'react-router-dom';


//Global_varibal for RESTAPI_url
const url = ` http://localhost:3007/user`; //array type of object

export default()=> {
    let [userData, setStateuserData] = useState([]);

  function getData()
   {
    axios.get(url).then((result) =>setStateuserData(result.data ))
   } 
  
useEffect(()=>{ getData() },[]);
    


//delete the data
 let DeleteHandler=(id)=>{     
      if(window.confirm(`Delete the Record Number is ${id} ?`))
      {
        axios.delete(`${url}/${id}`)
        getData();
      }     
  }



    return (
      <>
        <div className="container p-5">
          <h3>FETCH HOOKS RESTAPI DATA LOCAL URL/CLIENT</h3>

          <table className="table table-dark table-bordered my-5">
            <thead className="table table-light ">
              <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE NO</th>
                <th colSpan="3" className="text-center">
                  ACTION
                </th>
              </tr>
            </thead>

            <tbody>   
              {
              userData.map((res, i) => {
                return (
                  <tr key={i}>
                    <td>{i +1}</td>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>
                      <Link to={`/hooksUser/view/${res.id}`} className="btn btn-primary">View</Link>
                    </td>
                    <td>
                      <Link to={`/hooksUser/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                    </td>
                    <td>
                      <button onClick={()=>DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </>
    );
  
}

