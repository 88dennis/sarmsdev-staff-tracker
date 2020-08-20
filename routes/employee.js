const express = require('express');
const employeeRouter = express.Router();

const Employee = require('../model/Employee');

//CRUD

//create
employeeRouter.post('/', async (req, res)=> {
    const employeeData = req.body;
    const employee = new Employee(employeeData);
   await employee.save((err, document)=>{
        if(err){
            res.status(500).json({
                message:{
                    msgBody: "Unable to save and add employee data",
                    msgError: true
                }
            });
        } else {
            res.status(200).json({
                message: {
                    msgBody: "Successfully added",
                    msgError: false
                }
            });

        }
    });
});

//read
employeeRouter.get('/', async(req, res) => {
    // res.send("hello")
    await Employee.find({}, (err, response)=>{
        if(err) {
            console.log("ERROR IN GET EMPLOYEES")
            res.status(500).json({message: {
                msgBody: "Unable to get Employees",
                msgError: true
            }})
        } else {
            console.log("Connected to Get Employees Endpoint")
            res.status(200).json(response);
        }
    });
});

//update
employeeRouter.post('/update/:id', async (req, res)=> {
    // console.log(req.body)
    // console.log(req.params.id)
// await Employee.findOne({"_id":req.params.id}).then(res => {
//     console.log(res, "FROM RES")
// });

//you can also use findByIdAndUpdate
await Employee.findOneAndUpdate({"_id": req.params.id}, req.body, {
    new: true
}, (err, response)=>{
        if(err) {
            console.log("ERROR")
            res.status(500).json({message: {
                msgBody: "Unable to update",
                msgError: true
            }})
        } else {
            console.log(response);
            res.status(200).json({
                message: {
                    msgBody: "Successfully updated employee",
                    msgError: false
                }
            });
        }
});


// await Employee.findByIdAndUpdate()
    //params -> (id, document, options)
    // Employee.findOneAndUpdate(req.params.id, req.body, (err)=>{
    //     if(err) {
    //         console.log("ERROR")
    //         // console.log(response)
    //         res.status(500).json({message: {
    //             msgBody: "Unable to update",
    //             msgError: true
    //         }})
    //     } else {
    //         // console.log(req.body)
    //         // console.log(response)
    //         res.status(200).json({
    //             message: {
    //                 msgBody: "Successfully updated employee",
    //                 msgError: false
    //             }
    //         });
    //     }
    // })
})
//delete
employeeRouter.delete('/:id', async (req, res)=> {
    console.log("DELETE ROUTE")
    await Employee.findByIdAndDelete(req.params.id, err=>{
        if(err) {
            res.status(500).json({message: {
                msgBody: "Unable to delete",
                msgError: true
            }})
        } else {
            console.log("DELETEDASDASDASSASADSDA")
            res.status(200).json({
                message: {
                    msgBody: "Successfully deleted",
                    msgError: false
                }
            });
        }
    })
});

module.exports = employeeRouter;