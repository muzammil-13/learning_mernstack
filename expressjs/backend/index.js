const express=require('express')
const app=express()

app.get('/',(req,res)=> {
    res.send("Hello worlddd!")
})

app.post('/hello',(req,res)=>{
    res.send("Hello world again")
})

app.listen(3000, ()=>{
    console.log(`Sample app listening on port 3000`)
})