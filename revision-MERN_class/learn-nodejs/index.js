// console.log("Hello there, we're learning and working with NodeJs today!")

const http=require('http')
http.createServer(function(req,res){
    res.write("Hello node, its http module")
    res.end();
}
).listen("8080")

console.log("Server is running")