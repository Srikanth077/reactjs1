import {React, Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import EmpAction from './../../actions/EmpAction.js';




class ReactReduxConnection extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount()
    {
        this.props.EmpAction();
    }
       
    render(){
        return(<>

        <div className="container py-2">
            <h2 className="text-center text-primary">Contact Component</h2>
            <p className='text-center '>This is a React-Redux-connection Example</p>

             {
                this.props.empdata.map((result, i)=>
                {
                
                     return(<ul key={i}>
                        <li>{result.id}</li>
                        <li>{result.name}</li>
                        <li>{result.email}</li>
                     </ul>)
                    
                })
             }



        </div>
        
        </>)
    }

}


const mapStateToProps=(state)=>{
     return({
    empdata:state.empReducer
})

}

 const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({EmpAction}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxConnection)