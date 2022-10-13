export default function EmpAction()
{
    return({
        type: 'EmpAction',
        payload: [
            {
                id:1, 
                name:'Srikanth', 
                email:'srikanth@gmail.com'
            },
            {
                id:2, 
                name:'sudheer', 
                email:'Sudheer@gmail.com'
            },
            {
                id:3, 
                name:'shekar', 
                email:'shekar@gmail.com'
            }
        ]
    })
}