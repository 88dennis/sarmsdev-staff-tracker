export default {
    //CRUD
    //create
    createEmployee: async (employee)=> {
        return await fetch('/employee', 
            {
                method:'post', 
                body: JSON.stringify(employee),
                //we let the server know that we are sending back json using headers
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        )
        .then(res => res.json())
        .then(data => data);
    },  
    
    //read
    getEmployees: async ()=>{
        return await fetch('/employee')
                .then(res => res.json())
                .then(data => data);
    },

    //update
    updateEmployee: async (employee)=> {
        console.log(employee, "UPDATEEMP")
        return await fetch('/employee/update/'+ employee._id, 
            {
                method:'POST', 
                body: JSON.stringify(employee),
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            }
        ).then(res => res.json()).then(data => {
            console.log(data)
            return data;
        });
    },

    //delete
    deleteEmployee: async (_id) => {
        console.log(_id, "FROM EMPLOYEE API")
       return await fetch('/employee/' + _id, {
            method: 'DELETE',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        }).then( res => {
            console.log(res, "FROM EMPOYEE API")
            return res.json()
        }).then(data => {
                console.log(data, "FROM EMPOYEE API")
                return data;
            });
    },
}