const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello its HTTP module! We are on port 8081!')
});

server.listen(8081,()=>{
    const address=server.address();
    console.log(`Server running at ${address.port}`)
})