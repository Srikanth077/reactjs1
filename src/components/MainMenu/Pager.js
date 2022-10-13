import { React, } from "react";

//pager
export default (props) => {

    //undefined Array
    var numbers =[]

    var {totalpostinapi,maxDisplayrecordPerButton, getButtonNumber} = props

    var numberofButtons =totalpostinapi/maxDisplayrecordPerButton

    for(let i=1;i<=numberofButtons;i++){
        numbers.push(i)//defined Array
    }
  
  return (
    <>
      <div className="container p-5">

        <ul class="pagination">

        {
            numbers.map((bno, i)=><li class="page-item">
            <a class="page-link" onClick={()=>props.getButtonNumber(bno)}>{bno}</a>
            </li>)
        }

        </ul>
        
      </div>
    </>
  );
};
