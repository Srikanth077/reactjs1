export default function studentReducer(state={}, action)
{

    //yes / or -> conditional Statements.....
    switch(action.type)
    {
        case 'StudentsAction' :
            return action.payload;

            default:
                return state
                
    }
    
}