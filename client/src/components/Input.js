import React from 'react'

function Input(props) {
    return (
        <>
                 <label htmlFor={props.name}>{props.labelName}</label>
                <input 
                    placeholder={props.placeholder} 
                    onChange = {props.handleChange}
                    value={props.value}
                    type={props.type}
                    name = {props.name} 
                    
                    />

            {/* <div className="two fields">
              <div className="field">
               
              </div>
              <div className="field">
                <label>Last Name</label>
                <input placeholder="Last Name" type="text" />
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Job </label>
                <input placeholder="First Name" type="text" />
              </div>
              <div className="field">
                <label>Salary</label>
                <input placeholder="Last Name" type="text" />
              </div>
            </div>

            <div className="inline field">
              <div className="ui checkbox">
                <input type="checkbox" tabindex="0" className="hidden" />
                <label>I agree to the terms and conditions</label>
              </div>
            </div> */}
        </>
    )
}

export default Input
