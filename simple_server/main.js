// const port = 3000;
// //Require the http and http-status-codes modules.
// const http = require("http");
// const httpStatus = require("http-status-codes");
//Create the server with request and response parameters.
// const app = http.createServer((request, response) => {
//       console.log("Received an incoming request!");
//       response.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"});
//
//       let responseMessage = "<h1>Hello, Universe!</h1>";
//
//       response.write(responseMessage);
//       response.end();
//       console.log(`Sent a response : ${responseMessage}`);
//     });
// //Tell the application server to listen on port 3000.
// app.listen(port);
// console.log(`The server has started and is listening on port number:  ̄ ${port}`);

//Define mapping of routes with resonses
const routeResponseMap = {
"/info": "<h1>Info Page</h1>",
"/contact": "<h1>Contact Us</h1>",
"/about": "<h1>Learn More About Us.</h1>",
"/hello": "<h1>Say hello by emailing us here</h1>",
"/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};
const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    //Check whether a request route defined in the map
    if (routeResponseMap[req.url]) {
      //res.end(routeResponseMap[req.url]);
      // added a 2000 ms delay before the page loades
      setTimeout(() => res.end(routeResponseMap[req.url]), 2000);

    } else {
      //response with HTML
      res.end("<h1>Welcome!</h1>");
    }
});
app.listen(port);
console.log(`The server has started and is listening on port number: ➥ ${port}`);
