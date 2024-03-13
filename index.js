//1  import json-server
const jsonServer = require('json-server')

//2.create a lower application using jsonServer
const restServer = jsonServer.create()

//3.setup path for db.json
const router = jsonServer.router('db.json')

//4.return middleware
const middleware = jsonServer.defaults() 

//setup a port number
const port = 3008

//use in rest server 
restServer.use(middleware)
restServer.use(router)

//to run the server
restServer.listen(port,()=>{
    console.log("Restaurant server listing on port" + port);
})