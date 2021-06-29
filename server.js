let http = require('http');
let Router = require('node-router');

let router = Router(); // create a new Router instance
let route = router.push; // shortcut for router.push()

// handle Get request 
route('GET','/',routerHandler);

http.createServer(router).listen(8000); // Create Server with our router

console.log(`App is running on 8000`);

// Example to handle Request
function routerHandler(req,res){
    res.send("index");
}

