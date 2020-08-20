import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <>
    
      <div className="ui segment">
        <form onSubmit={props.handler}>
          <h4>{props.isEditForm ? "Editing Employee" : "Add Employee"}</h4>
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <Input
                  name="firstName"
                  placeholder="Enter First Name"
                  labelName="First Name: "
                  handleChange={props.handleChange}
                  value={props.employee.firstName}
                  type="text"
                />
              </div>
              <div className="field">
                <Input
                  name="lastName"
                  placeholder="Enter Last Name"
                  labelName="Last Name: "
                  handleChange={props.handleChange}
                  value={props.employee.lastName}
                  type="text"

                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <Input
                  name="job"
                  placeholder="Enter Job"
                  labelName="Job: "
                  handleChange={props.handleChange}
                  value={props.employee.job}

                />
              </div>
              <div className="field">
                <Input
                  name="salary"
                  placeholder="Enter Salary"
                  labelName="Salary: "
                  handleChange={props.handleChange}
                  value={props.employee.salary}
                  type="text"
                />
              </div>
            </div>

            {/* <div className="inline field">
              <div className="ui checkbox">
                <input name="agree" type="checkbox" className="hidden" />
                <label htmlFor="agree">I agree to the terms and conditions</label>
              </div>
            </div> */}

          </div>
          <br/>
          <div className="inline field">
          <button type="submit" className="ui submit button">Submit</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Form;
