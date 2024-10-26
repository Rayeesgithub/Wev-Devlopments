// for Backend Setup
(1)- Create a Folder
(2)-Terminal pe us folder me jao
(3)-npm init -y
(4)- vs code me us folder ko open karen
(5)- npm i express

for Run-> node server.js (but this need to run evry update)
for automatically run-> npm run dev (serval change in Packge Json script file->  "start": "nodemon index.js", "dev": "nodemon index.js")


// for Mongodb connection 
(1) by default conect on 27017
(2) create Database click on +)
(3) Add data
(4) run->npm i moongoose

CRUD Concept
C-Create (above creation)
R->Read (eg. name="Rayees" click on find)
U->Update (click on Pencil symbol to update)
D->Delate (click on Deleate symbol to delete)


// step1->create your own server
const express = require('express');
const app=express();

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
    useNewurlParser : true,
    useUnifiedTopology : true
})
