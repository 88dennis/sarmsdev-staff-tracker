const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const employee = require('./routes/employee');
app.use('/employee', employee);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}
const uri = process.env.mongodb || 'mongodb://localhost:27017/stafftracker';
mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false
},(err)=>{
    if(err){
        console.log('unable to connect to the database');
        process.exit(1);
    } else {
        console.log('connected to db');
    }

});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("connected to server http://localhost:" + port);
});



