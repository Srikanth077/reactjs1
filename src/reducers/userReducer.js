export default function userReducer(state=[], action)
{

    //yes / or -> conditional Statements.....
    switch(action.type)
    {
        case 'UserAction' :
            return action.payload; 

            default:
                return state
                
    }
    
}