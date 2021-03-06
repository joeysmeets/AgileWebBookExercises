const port = 3000,
   http = require("http"),
   httpStatus = require("http-status-codes"),
   //Require the fs module.
   fs = require("fs");
// //Set up route mapping for HTML files
// const routeMap = {
//   "/": "views/index.html"
// };
// http.createServer((req, res) => {
//   res.writeHead(httpStatus.OK, {
//     "Content-Type": "text/html"
//   });
//   if (routeMap[req.url]){
//     //Read the contents of the mapped file.
//     fs.readFile(routeMap[req.url], (error, data) => {
//       //Respond with file contents
//       res.write(data);
//       res.end();
//       });
//   } else {
//      res.end("<h1>Sorry, not found.</h1>");
//   }

const getViewUrl = (url) => {
  return `views${url}.html`;
};

http.createServer((req, res) => {
  let viewUrl = getViewUrl(req.url);
  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write("<h1>FILE NOT FOUND</h1>");
    } else {
      res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
      });
      res.write(data);
    }
  res.end();
  });
})
.listen(port);
console.log(`The server has started and is listening  ̄ on port number: ${port}`);
