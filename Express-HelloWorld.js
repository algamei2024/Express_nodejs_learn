var express = require('express');
//search about factory method in js
var app = express();//this is factory function return from module
//app => well be the server
app.listen(8081, function () {
    console.log('Example app listening');
});

app.get('/', function (req, res) {
    res.send('<h1>Hello Get</h1>');
});
app.get('/welcome', function (req, res) {
    res.send('<h1>Hello Get again</h1>');
});
app.post('/', function (req, res) {
    res.send('<h1>Hello Post</h1>');
});
