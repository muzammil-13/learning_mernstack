const fs=require('fs')

fs.readFile('fileOps2.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
