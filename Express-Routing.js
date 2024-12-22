var express = require('express');
var app = express();

app.get('/home', function (req,res) {
    res.send('hello get');
});
app.post('/home', function (req,res) {
    res.send('hello post');
});
app.put('/home', function (req,res) {
    res.send('hello put');
});
app.delete('/del_user', function (req, res) {
    console.log('Got a delete request for /del_user');
    res.send('Hello Delete');
});

//for pattern route
//first match wins
//شغال باللي فوق يعني يمشي عليهم بالترتيب
app.get('/abcd', function (req, res,next) {
    console.log('Got a delete request for /abcd');
    //res.send('page pattern match abcd');
    next();
})
app.get('/ab*cd', function (req, res) {
    console.log('Got a delete request for /ab*cd');
    res.send('page pattern match ab*cd');
})
//this is get param
//http://locallhost:8082/getProduct/2
app.get('getProduct/:id', function (req, res) {
    console.log('Got a delete request for /:id');
    res.send('id: ' + req.params.id);
})
//in GET method[query string] http://locallhost:8082/getProduct?id=5
//in POST http://locallhost:8082/getProduct
app.get('getProduct/:id([0-9]{5})', function (req, res) {
    res.send('id: ' + req.params.id);
})
//هنا اي حاجه مش موجود شغلي هذا
//other route
app.get('*', function (req, res, next) {
    console.log('rout not found url ' + req.url);
    next();
    //next();
    //next=> هنا نقله روح للروت اللي بعده يعني اللي نفسه مش اللي بعده بالترتيب
    //next route match
});
//for all method [get, post,put]
app.all('*', function (req, res, next) {
    res.send('Sorry, Page not found...');
});

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});