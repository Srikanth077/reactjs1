import axios from "axios";


const url="http://localhost:3007/user"

export default function StudentsAction()
{
    return({
        type: 'StudentsAction',

        payload: axios.get(url).then((result)=>result.data)
    })
}
 

