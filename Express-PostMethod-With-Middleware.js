var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//هنا app.use => default used next()
app.use(bodyParser.urlencoded({ extended: true }));//هنا يتعامل مع بيانات تكست
//هنا فوق على طول حط في الكونستركتو حق فك التشفير
app.use(bodyParser.json());//هنا يتعامل مع بيانات جيسون
// هنا بالسطر اللي فوق انا اقول له اذا جاء ركوست فيه Json
//السطرين اللي فوق انا اقله نفذهم بكل الحالات يعني اول ما يجي ركوست نفذ هوذا اللي فوق

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/' + 'Express-GetMethod.html');
});

app.post('process_post', function (req, res) {
    res.send('process_post');
});
var server = app.listen(9090, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});