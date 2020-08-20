import React from "react";
import EmployeeTableRow from './EmployeeTableRow'

const EmployeeTable = (props) => {
  return (
    <>
   <table className="ui celled table">
     <thead>
  <tr>
    {/* <th>#</th> */}
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Job</th>
    <th>Salary</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  {/* <tr>
  <td>1213456</td>
    <td>Jill</td>
    <td>Smith</td>
    <td>eng</td>
    <td>50</td>
    <td>50</td>

  </tr> */}
  
            {props.employees.map(employee => {
                return <EmployeeTableRow 
                        key={employee._id} 
                        deleteHandler={props.deleteHandler}
                        showEditForm={props.showEditForm}
                        employee={employee}
                         />
            })}
  
  </tbody>
  
</table>
    
    </>
  );
};

export default EmployeeTable;
