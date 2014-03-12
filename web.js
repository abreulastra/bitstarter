var express = require('express'), fs=require('fs'), buffer=require('buffer');
var app = express();
var buffer=fs.readFileSync(index.html);
app.use(express.logger());


app.get('/', function(request, response) {
  response.send("nueva prueba 15:36");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
