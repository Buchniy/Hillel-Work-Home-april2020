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
app.get('/sign-in', function (req, res) {

    readFile('./models/auth.json', (json) => {
        const data = JSON.parse(json);
        const status = data.isAuthorized ? 200 : 401;
        console.log(json, 'json');
        console.log(status, 'status');
        console.log(data, 'data');

        res
            .status(status)
            .send(data)

    })
});

function readFile(path, callback) {
    fs.readFile(path, 'utf-8', (error, data) => {
        callback(data);
    })
}




