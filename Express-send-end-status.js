var express = require('express');
var app = express();


app.get('/test', function (req, res) {
    res.send('request received');
    res.send('<p>some html</p>');
    res.end();//use to quickly response without any data

    //sending json data
    res.send({ some: 'json' });
    res.json({ some: 'json' });
    res.status(500).json({ error: 'message' });//in http http.writeHead(500);
    res.send(404, 'sorry not found');
    //res.sendFile('path');

    res.status(400).send('Bad Request');
    res.end();
});