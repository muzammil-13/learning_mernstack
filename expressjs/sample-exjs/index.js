// import express
const express=require("express");

//install body-parser using npm:
const bodyParser=require("body-parser");

// app got express
const app=express();

// default port assings as 3000
const port=3000;

//routing to root
app.get('/', (req,res)=>{
    res.send("welcome to Express.js!");
});

// info taking
app.get('/users',(req,res)=>{
    const users1=[
        {id:1, name:"Muzammil Ibrahim"},
        {id:2, name:"Athul Raj"}
    ]
    res.json(users);
});


app.use(bodyParser.json());

// info giving
app.post('/users2',(req,res)=>{
    const {name, email}=req.body;
    const users2={name,email};
    res.json(users2);
});

// listening to port:3000
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

