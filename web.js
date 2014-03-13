var express = require('express'), fs=require('fs'), buffer=require('buffer');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readSyncFile('index.html',"utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
