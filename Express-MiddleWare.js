var express = require('express');
var app = express();

//هنا اول ما يدخل سوف يدخل هنا لان
//هذا Middleware
app.use(function (req, res, next) {
    console.log('Middleware');
    next();
});
//this is Middleware
//=================================
app.get('/', function (req, res) {
    console.log('get route');
    res.send('hello get');
})
app.listen(7090, function () {
    console.log('server run on port 7090');
})