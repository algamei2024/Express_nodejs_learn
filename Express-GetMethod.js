var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/' + 'Express-GetMethod.html');
    //__direname => this is global in node
});
app.get('/process_get', function (req, res) {
    res.end('<b>Welcome</b>:'+req.query.firstName + " "+req.query.lastName);
});
//this is query string

var server = app.listen(5080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});