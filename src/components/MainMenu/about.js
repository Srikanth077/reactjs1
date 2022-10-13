import React from "react";
 
 
 

var h={height:'20px'}
function About(){
    return (<>
     <div className="container-fluid" style={ {backgroundColor:'#12151c'}}>
  <div className="container p-5 w-75 text-center">
      <h1 className="display-4 text-white font-weight-bold py-3">ABOUT US</h1>
       <p className="text-white pb-3">
       it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
       </p>
       <div className='jumbtron text-white p-5' style={{borderRadius:'10px'}}>
         <div className='container'>

         <div className="row">
        <div className="col-lg-6">
            <div className="container w-100">
                <table className="table table-borderless text-white ">
                  <tbody>
                    <tr>
                        <th> FULL NAME</th>
                            <td>SRIKANTH BANDARI</td>
                     
                    </tr>
                    <tr>
                        <th> MOBILE NUMBER</th>
                        <td>9133882300</td>
                    </tr>
                    <tr>
                        <th>BIRTHIDAY </th>
                        <td>25/08/1995</td>
                    </tr>
                    <tr>
                        <th> EMAIL ID</th>
                        <td>srikanth@gmail.com</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>
        <div className="col-lg-6">
            <h4>SKILLS</h4>
            <p className="text-left">HTML & CSS</p>
            <div className="progress" style={h}>
            <div className="progress-bar bg-success" style={{width:'95%'}} >95%</div>
            </div>
        </div>
        <p className="text-left pt-4">BOOTSTRAP4</p>
        <div className="progress" style={h}>
        <div className="progress-bar bg-success" style={{width:'90%'}} >90%</div>
        
     </div>
     <p className="text-left pt-4">JAVASCRIPT & ECMASCRIPT</p>
        <div className="progress" style={h}>
        <div className="progress-bar bg-success" style={{width:'85%'}} >85%</div>
        </div>
        <p className="text-left pt-4">REACT</p>
        <div className="progress" style={h}>
        <div className="progress-bar bg-success" style={{width:'80%'}} >80%</div>
        </div>
     </div>

  </div>
     </div>
     </div>
     </div>
    </>)
}
export default About;