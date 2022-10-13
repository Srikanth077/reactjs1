import { React, useState, useEffect } from "react";
import axios from "axios";

import Pager from './Pager.js'

const apiurl = `https://jsonplaceholder.typicode.com/posts`;

export default (props) => {

//post update for API
  var [post, setStatePost] = useState([]);

  //select Default Max-post per action
  var [MaxDisplaypost] = useState(10);

  //FirstbuttonNumber
  var [DefaultButton, setStateDefaultButton] = useState(1);

  //Lastindex
  var lastindex=DefaultButton*MaxDisplaypost //
  var Firstindex=lastindex-MaxDisplaypost


  //API CALLS by HOOKS
  useEffect(() => {
    axios.get(apiurl).then((result) =>setStatePost(result.data));
  }, []);

//   var DispalyDefaultButtonPost=post.slice(Firstindex, lastindex)


  //Total-post from API
  var totalpost = post.length

  let handleButtonNumberChanges=(btnNumber)=>
  {
    setStateDefaultButton(btnNumber)
  }

  return (
    <>
      <div className="container py-1">
            <hr className="text-primary"></hr>

            <h5>Showing {Firstindex+1}-{lastindex} of {totalpost} result for "Posts"</h5>

            <Pager 
            totalpostinapi={totalpost} 
            maxDisplayrecordPerButton={MaxDisplaypost}
            getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}
            />

          {
          post.slice(Firstindex, lastindex)
          .map((res, i) => {
            return (
              <ul  key={i}>
               
                <li>
                    <h4>{res.id}.{res.title}</h4>
                    <p>{res.body}</p>
                </li>

              </ul>
            );
          })
        }
      </div>
    </>
  );
};
