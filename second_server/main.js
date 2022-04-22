'strict use';
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
//Listen for requests.
app.on("request", (req, res) => {
  //Create an array to hold chunk contents
  var body = [];
  //Process it in another callback function.
  req.on("data", (bodyData) => {
    //Add received data to the body array.
    body.push(bodyData);
  });
  //Run code when data transmission ends.
  req.on("end", () => {
    //Convert the body array to a String of text.
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });
  //Log the request’s contents to your console.
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);

  res.writeHead(httpStatus.OK, { "Content-Type": "text/html"});
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);
});
app.listen(port);
console.log(`The server has started and is listening on port number:  ̄ ${port}`);
