'strict use';
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
//Listen to request (callback)
app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
 });
//Prepare a response.
let responseMessage = "<h1>This will show on the screen.</h1>";
res.end(responseMessage);
 });
//Respond with HTML.
app.listen(port);
console.log(`The server has started and is listening on port number:  ̄ ${port}`);
console.log(`Method: ${getJSONString(req.method)}`);
