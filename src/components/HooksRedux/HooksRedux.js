import {React, useEffect} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import EmpAction from './../../actions/EmpAction';


let HooksRedux=(props)=>{
    useEffect(()=>{
        props.EmpAction();
    }, [])

return (<>

  <div className="container py-2">
    <h2 className="text-center text-primary">Hooks Redux</h2>
    <p className='text-center'>This is a Hooks-Redux Example</p>
    {
        props.empdata.map((res, i)=>{
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
    }
  </div>

</>)

}


const mapStateToProps=(state)=>{
    return({
        empdata:state.empReducer
    })
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({EmpAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HooksRedux)