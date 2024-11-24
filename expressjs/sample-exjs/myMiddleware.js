const express=require("express");
const app=express();

const port=process.env.PORT||3000;

// middlware function to log request details
const myMiddlware=(req,res,next)=>{
    console.log(`Request method: ${req.method} | Request URL: ${req.url} `);
    next();
};

//use the middlware for all routes
app.use(myMiddlware);

// HTTP methods: get, put, delete
app.get('/', (req,res)=>{
    res.send("Hello, this response from Route handler!");
});

app.put('/',(req,res)=>{
    res.send("Log-in success!")
});

app.delete('/',(req,res)=>{
    res.send("Log-out success!")
});


// listening to port
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});