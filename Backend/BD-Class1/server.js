
// step1->create your own server
const express = require('express');
const app=express();

// specially parse json data and it to the request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//server live on 3000 port
app.listen(3000,()=>{
    console.log('server load on 3000 port');
})

// router Home page create
app.get('/',(request,response)=>{
    response.send('server live ho gaya hai');
})

// router for about
app.post('/api/cars', (request,response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
   
    response.send("This is first Backend learninng Stage");
})

// connection mongodb with server
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDb',{
    // useNewurlParser : true,
    // useUnifiedTopology : true
})
.then(()=>{console.log("connection successfull between express server with mongoDB")})
.catch(()=>{console.log("error")})