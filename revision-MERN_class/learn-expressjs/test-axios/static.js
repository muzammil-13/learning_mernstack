const express=require('express');
const axios=require('axios');

const app=express();
const PORT=3000

app.use(express.json());

app.get('/posts',async(req,res)=>{
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        res.json(response.data)
    }
    catch(error){
        console.error(error);
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});