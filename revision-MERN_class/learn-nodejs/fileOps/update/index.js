const fs=require('fs')

fs.appendFile('fileOps3.txt',"\n Update something",(err)=>
{
    if(err){
        console.log(err)
    }else{
        console.log("updated")
    }
})