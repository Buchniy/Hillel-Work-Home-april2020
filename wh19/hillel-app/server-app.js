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
////--------------------------/////




app.post('/', function(req, res) {
    console.log('hello path / -->> post./users.json', req.body);
    const {login , secretKey} = req.body;
    const data2 = req.body;
    res.send(data2);
});


fs.readFile('./users.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return
    }
    let fileData = jsonString;

    console.log('File data:', fileData);

fileData.order_count += 1;
fs.writeFile('./users.json', JSON.stringify(jsonString), (err) => {
    if (err) console.log('Error writing file:', err)
});
});
// node server-app