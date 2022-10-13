import React, { Component } from "react";

import axios from "axios";
import { Link } from 'react-router-dom';


//Global_varibal for RESTAPI_url
const url = ` http://localhost:3007/user`; //array type of object

class Restapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [], //empty array
    };
  }

  getData = ()=> {
    
  }

//delete the data
  DeleteHandler=(id)=>
  {     
      if(window.confirm(`Delete the Record Number is ${id} ?`))
      {
        //Delete the Selcted id record
        axios.delete(`${url}/${id}`) // http://localhost:3007/user

        //Fetch rest of the id Records after delete
        axios.get(url).then((result) => this.setState({ userData:result.data }))
      }     
  }


  render() {
    return (
      <>
        <div className="container p-5">
          <h3>FETCH RESTAPI DATA LOCAL URL/CLIENT</h3>

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
              {this.state.userData.map((res, i) => {
                return (
                  <tr key={i}>
                    <td>{i +1}</td>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>
                      <Link to={`/Restapi/view/${res.id}`} className="btn btn-primary">View</Link>
                    </td>
                    <td>
                      <Link to={`/Restapi/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                    </td>
                    <td>
                      <button onClick={()=>this.DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
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

  //RESTAPI_CALLS
  componentDidMount() {
    axios.get(url).then((result) => this.setState({ userData:result.data }));
  }
}

export default Restapi;
