var express = require('express'), fs=require('fs'), buffer=require('buffer');
var app = express();
var b=fs.readFileSync("index.html");
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(b.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
