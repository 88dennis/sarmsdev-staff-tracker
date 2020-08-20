import React from "react";

const EmployeeTableRow = (props) => {
  console.log(props)
  const { firstName, lastName, job, salary, _id } = props.employee;
  return (
    <tr>
      {/* <th> {_id}</th> */}
      <td> {firstName}</td>
      <td> {lastName}</td>
      <td> {job}</td>
      <td> {salary}</td>
      <td>
        <div className="ui buttons">
          <button type="button" onClick={()=>props.showEditForm(props.employee)} className="ui button">Edit</button>
          <button type="button" onClick={()=>props.deleteHandler(_id)} className="ui button">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
