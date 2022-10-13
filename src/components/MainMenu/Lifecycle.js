import React, {Component} from 'react'

 class Lifecycle extends Component
  {
    //Constructor_is_Mounting_method
    constructor(props){
        super(props);
        this.state = {}
        console.log(`********Constructor_is_Mounting_method*********`)
    }

    componentWillMount(){
        console.log(`********componentWillMount_is_Mounting_method*********`)
    }


    //Render_is_Mounting_method
    render(){
        console.log(`**********Render_is_Mounting_method***********`)
        return(<>
            <div className="p-5 text-center">

                <h2>REACT CLASS COMPONENT LIFE CYCLE PROCESS</h2>
                
            </div>
            </>)
    }

    //R estAPI_Calls
    componentDidMount(){
        console.log(`********componentDidMount_is_Mounting_method*********`)
    }
}

export default Lifecycle;