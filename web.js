var express = require('express'), fs=require('fs'), buffer=require('buffer');
var app = express();
var buffer=fs.readFileSync("index.html");
App.use(express.logger());


app.get('/', function(request, response) {
  response.send("hipity pop");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
