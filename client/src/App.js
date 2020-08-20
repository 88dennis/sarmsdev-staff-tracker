import React, { Component } from 'react'
import EmployeeTable from './components/EmployeeTable';
import Form from './components/Form';
import Message from './components/Message';
import './App.css';

import EmployeeAPI from './EmployeeAPI';

class App extends Component {
    _isMounted = false;
    state = {
        employees: [],
        isEditForm: false,
        employee: {
            firstName: "",
            lastName: "",
            job: "",
            salary: ""
        },
        message: "",
    }

    componentDidMount(){
        this._isMounted = true;

        EmployeeAPI.getEmployees().then(data => {
            console.log(data, "FROM DIDMOUNT");
            if(this._isMounted === true) {
                this.setState({
                    employees: data.reverse()
                })
            }
        })
    }

    resetForm = () => {
         this.setState({
            employee: {
                firstName: "",
                lastName: "",
                salary: "",
                job: ""
            }
         })
    }

     deleteHandler = async (id) => {
       await EmployeeAPI.deleteEmployee(id).then(response => {
            console.log(response, "FROM APPJS LINE 50")
         if(response.message.msgError) {
            let messageError = response.message
            this.setState({
                message: messageError
            })
        } else {
            let messageBody = response.message
            console.log(messageBody);
            EmployeeAPI.getEmployees().then(data => {
                console.log(data, "FROM DELETING");
                    this.setState({
                        message: messageBody,
                        employees: data
                    })
            })
        }
        })
        window.scrollTo(0, 0);
    }

    addHandler = async (e) => {
        e.preventDefault();
        const postData = await EmployeeAPI.createEmployee(this.state.employee);
        const message = postData.message;
        if(message.msgError) {
            this.setState({
                message
            });
        } else {
            const data = await EmployeeAPI.getEmployees();
            console.log(data, "FROM ADD HANDLER")
            this.setState({
                message,
                employees: data
            })
        } 
        this.resetForm();
        window.scrollTo(0, 0);
    }


    updateHandler = async (e) => {
        e.preventDefault();
        console.log(this.state.employee, "EMPPPPPPPP")
        await EmployeeAPI.updateEmployee(this.state.employee).then(response => {
            console.log(response, "FROM APPJS LINE 98")
         if(response.message.msgError) {
            let messageError = response.message
            this.setState({
                message: messageError
            })
        } else {
            let messageBody = response.message
            console.log(messageBody);
            EmployeeAPI.getEmployees().then(data => {
                console.log(data, "FROM DELETING");
                    this.setState({
                        message: messageBody,
                        employees: data
                    })
            })
        }

        })
        this.setState({isEditForm: false});
        this.resetForm();
        // const updateData = await EmployeeAPI.updateEmployee(this.state.employee);
        // const message = updateData.message;
        // if(message.msgError) {
        //     this.setState({
        //         message
        //     })
        // } else {
        //     const data = await EmployeeAPI.getEmployees();
        //     console.log(data, "FROM UPDATE HANDLER")
        //     this.setState({
        //         message,
        //         employees: data
        //     })
        // } 
       
    }

    handleChange = (e) => {
        this.setState({
            employee: {
                ...this.state.employee,
                [e.target.name] : e.target.value
            },
            message:""
        })
    }

    showEditForm = (employee) => {
        this.setState({
            isEditForm: true,
            employee: employee
        }); 
        window.scrollTo(0, 0);
    }

componentWillUnmount(){
    this._isMounted = false;
}

renderEmployeeTable = () => {
    if(this.state.employees.length > 0) {
        return (
            <EmployeeTable 
                employees = {this.state.employees}
                deleteHandler = {this.deleteHandler}
                showEditForm = {this.showEditForm}
            />
        )
    }
    return null;
}

renderForm = () => {

    return (
        <Form 
            isEditForm = {this.state.isEditForm}
            employee = {this.state.employee}
            handleChange = {this.handleChange}
            handler = {!this.state.isEditForm ? this.addHandler : this.updateHandler}
        />
    )
}

renderMessage = () => {
    if(this.state.message === "") {
        return null;
    }
    return (
        <Message message = {this.state.message} />
    )
}
    render() {
        return (
            <>
                <div className="ui container segment">
                    {this.renderForm()}
                    {this.renderMessage()}
                    {this.renderEmployeeTable()}
                </div>
            </>
        )
    }
}

export default App
