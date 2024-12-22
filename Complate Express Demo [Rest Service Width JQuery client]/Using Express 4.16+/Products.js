var express = require('express');
var app = express();
//هنا في موديول اسمه كورس نهدله
var cors = require('cors');

//من الاصدار 4.16 وما فوق قالو بطلو تعتمدو على الـ body-parser
//وانا الموديول express عد اهندل هذا الموضوع من نفسي
/**
 * يتبع السطور الاوله 
 * فبقي بدل body parser 
 * express.json()
 * و express.urlencoded
 * يعني شلنا الـ body parser واستخدمناها في الــ express
 * اي ان مودويول ا لــexpress قالو بدل من تجلس تضمن موديول ثاني وتستخدمه احنا نسهلك الموضوع بنستخدم هذا الموديول داخل حقنا داخل الــ express 
 * او انهم ممكن علمو وراثه للمودويل body-parser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
/**
 * هنا نهندل الكورس في الــ Middleware
 */


var products = [
    { "Name": "Laptop", "Price": 20000 },
    { "Name": "HDD", "Price": 500 },
    { "Name": "Mobile", "Price": 3000 }
];

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/getProducts', function (req, res) {
    res.status(200).send(products);
});
app.get('/add', function (req, res) {
    res.sendFile(__dirname + "/" + "addProduct.html");
});
app.post('/insert', function (req, res) {
    console.log(req.body);
    products.push(req.body);
    //res.send(200).redirect('getProducts');
    res.status(200).json({ redirectUrl: '/' });
});

app.delete('/del/:pName', function (req, res) {
    console.log('d')
    let productName = req.params.pName;
    for (let prdIndex in products) {
        if (products[prdIndex].Name == productName)
            products.splice(prdIndex, 1);
    }
    res.status(200).json({ message: 'تم الحذف بنجاح', redirectUrl: '/getProducts' });
});
var server = app.listen(6060, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listen at http://%s:%s', host, port);
});