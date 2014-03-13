var express = require('express'), fs=require('fs'), buffer=require('buffer');
var app = express();
App.use(express.logger());

app.get('/', function(request, response) {
    var b=fs.readFileSync('index.html');
    response.send(b.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
