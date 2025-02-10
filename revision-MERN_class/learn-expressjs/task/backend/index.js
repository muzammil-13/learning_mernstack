const express=require('express')
const cors=require('cors')

const student=require('./studList.js')

const app=express();
const port=3000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send(student);
})

app.listen(port,()=>{
    console.log(`server running on : http://localhost:${port}`)
})