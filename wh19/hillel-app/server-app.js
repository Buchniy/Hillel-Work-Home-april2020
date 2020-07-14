var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 3003;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});
// http://localhost:3003/

app.post('/', function (req, res) {
    let {login, secretKey} = req.body;
    let data = req.body;

    fs.readFile('./users.json', 'utf8', (err, dataJson) => {
        if (err) {
            console.log("File read failed:", err);
            return
        }
        let data2 = JSON.parse(dataJson);
        let currentUser = data2.some(data2 => data2.login === login && data2.secretKey === secretKey);

        if (currentUser) {
            let message = `Пользователь "${login}" с таким secretKey уже существует`;
            res.status(301).send(message);
        } else {
            data2.push(data);
            message = `Пользователь "${login}" успешно добавлен`;
            res.status(200).send(message);
        }

        fs.writeFile('./users.json', JSON.stringify(data2), (err) => {

            if (err) console.log('Error writing file:', err)
        });

    });
});
