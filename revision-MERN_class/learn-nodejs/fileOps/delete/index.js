const fs=require('fs')

fs.unlink('fileOps4.txt',(err)=>
{
    if(err){
        console.log(err)
    }else{
        console.log("deleted")
    }
})