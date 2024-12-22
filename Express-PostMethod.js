var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//هنا نستخدم المكتبة هذه عشان لان البيانات تجي مشفره لانه مستخدمين بوست
//ممكن نستغني عن السطر التالي لانه هذا اذا ما تريد تقله انه ما يستقبل البيانات كنستد اوبجت فقد تعمله فولس
var urlencodedParser = bodyParser.urlencoded({ extended: true });
/**
 * {extended:true} => هنا نقله انه يقدر يبعت اوبجت داخل اوبجت
 * Nested Object = {person:{name:'cv'}}
 */
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/' + 'Express-PostMethod.html');
    //__direname => this is global in node
});
app.post('/process_post', urlencodedParser, function (req, res) {
    res.end('<b>Welcome</b>:' + req.body.firstName + " " + req.body.lastName);
    //هنا استقبله بال => reu.body
});
//this is query string

var server = app.listen(5080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});