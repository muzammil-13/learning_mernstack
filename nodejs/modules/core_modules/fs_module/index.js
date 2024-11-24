const fs=require('fs');
// writing a file aynchronously:
const content='Oops! lorem lipsum not working her';

fs.writeFile('example.txt', content,'utf8',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File has been saved!")
});