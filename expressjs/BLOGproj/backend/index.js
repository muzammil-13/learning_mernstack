require('dotenv').config();

const express=require('express')
const app= express()
const env=process.env;
const mongoose=require('mongoose')

const postRouter=require('./router/postRouter')

app.use('/post',postRouter)

mongoose.connect(env.MONG_URL)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("ERROR OCCURRED ON ",err)
});

app.listen(env.PORT, ()=>{
    console.log("Server running on PORT: ",env.PORT);
})