const http=require('http'); //including modules

    const server=http.createServer((req,res)=>{
        // handle incoming requests here
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("Hello World\n");
    });

    server.listen(3000,()=>{
        console.log("Server running at http://127.0.0.1:3000/");
    });