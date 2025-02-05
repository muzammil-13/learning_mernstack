console.log("Hello, we're using global objects")
// console.clear()
console.log("File name:",__filename)
console.log("Directory name:",__dirname)

setInterval(function(){
    console.log("Hello interval")
},1000)