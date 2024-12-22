var express = require('express');
var app = express();

/**
 * هنا على طول انا ممكن ارسله ملف بدل ما كان من قبل ارسله كنص
 */
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/' + 'Express-GetMethod.html');
});

app.get('/process_get', function (req, res) {
    var fullName = req.query.firstName + " " + req.query.lastName;
    res.redirect('/home?fullName=' + fullName);
});

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});