const fs=require('fs')
fs.writeFile('fileOps.txt',"Doing some file operations",(err)=>{
    if(err){
        console.err("Error occured",err)
    }else{
        console.log("File created successfully")
    }
})
