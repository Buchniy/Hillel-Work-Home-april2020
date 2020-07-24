var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 3005;

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});
/*-----------------------------*/
app.get('/', function (req, res) {

    console.log('kuku1');
    fs.readFile('country/list1.json', 'utf8', (err, dataJson) => {
        let data = JSON.parse(dataJson);
        console.log('kuku2');
        console.log('dataJson', data);
            res.status(200).send(data);

    })
});
app.get('/:val', function (req, res) {
    let {street} = req.query;

    console.log('req.query', req.query );
    let urlToJson = 'city/' + `${street}` + '.json';
    console.log('urlToJson', urlToJson );
    fs.readFile(urlToJson , 'utf8', (err, cityJson) => {
        let City = JSON.parse(cityJson);

        res.status(200).send(City);

    })
});

app.get('/street/:str', function (req, res) {
    let {str} = req.query;
    console.log('kuku3');
    console.log('{str}--> ', {str} );

    let urlToStreet = `street/${str}.json`;
    console.log('urlToStreet', urlToStreet );
    fs.readFile(urlToStreet , 'utf8', (err, cityJson) => {
        let City = JSON.parse(cityJson);
        console.log('City', City);
        res.status(200).send(City);

    })
});


// app.post('/:id', function (req, res) {
//     let urlToJson = 'goods/' + `${JSON.parse(req.body)}` + '.json';
//     fs.readFile(urlToJson, 'utf8', (err, goodsJson) => {
//         let userGoods = goodsJson;
//         res.send(userGoods);
//     })
// })
