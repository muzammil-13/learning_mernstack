const express=require('express')
const cors=require('cors')

const app=express();
const port=3000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Data fetched successfully");
})

app.listen(port,()=>{
    console.log(`server running on : http://localhost:${port}`)
})
