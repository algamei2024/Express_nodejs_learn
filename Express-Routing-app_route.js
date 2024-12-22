var express = require('express');
var app = express();
/**
 * هنا نقله في حالة ال / روح نفذ هذه الـ method;
 */
//هنا علمنا اولاً المسار ورجعنا استخدمنا الدوال حقة تحت
app.route('/')
    app.get(function (req, res) {
        res.send('hello get');
    });
    app.post(function (req, res) {
        res.send('hello post');
    });
    app.put(function (req, res) {
        res.send('hello put');
    });
//هنا انا اقله في حالة ارسال باراميتر
//.all => في كل الـ method as GET , POST , PUT
//هنا تحت كل وحده بترجع كائن من نوع http function
app.route('/name/:name')
    .all(function (req, res, next) {
    console.log('nex name');
    //الدالة next تقله ريع لوما يجي ركوست ثاني ونفذ
    next();
}).get(function (req, res) {
    res.send('Welcome' + req.params.name);
});

app.listen(7990, function () {
    console.log('read to recieve requests');
});

//لاحظ هنا تحت كل وحده ترجع كائن من نوع http handler والاوبحت هذا فيه دوال get post كذه

app.get('/name/:name', function (req, res) {
    
}).post('/name/:name',function (req, res) {
    res.send('Welcome' + req.params.name);
}).all('/name/:name',function (req, res) {
    res.send('ddld');
});