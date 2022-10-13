import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

var idno;

class View extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
        // veiwdata:{}
    }
  }

  render() {
       idno=this.props.match.params.idno
    //this.props->history, location, match
    console.log(idno)

    var {id, name, email, phone} = this.state

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

   <Link className="btn btn-success" to="/restapi">GOTO BACK</Link>

        </div>
      </>
    );
  }
  //RESTAPI_CALLS
  componentDidMount() {
    const url = `http://localhost:3007/user/${idno}`
    axios.get(url).then((result) => this.setState(result.data));
  }
}

export default View;
