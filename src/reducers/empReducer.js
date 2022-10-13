export default function empReducer(state={}, action)
{

    //yes / or -> conditional Statements.....
    switch(action.type)
    {
        case 'EmpAction' :
            return action.payload; 

            default:
                return state
                
    }
    
}