const fs=require('fs')
fs.writeFile('fileOps1.txt',"Doing some file operations",(err)=>{
    if(err){
        console.err("Error occured",err)
    }else{
        console.log("File created successfully")
    }
})
