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

app.post('/', function (req, res){
    let {login, password} =JSON.parse(req.body);



    fs.readFile('./users.json', 'utf8', (err, dataJson) => {

        let data2 = JSON.parse(dataJson);



        console.log(data2, 'data2');

        // let currentUser = data2.some(data2 => data2.login === login && data2.password === password);
        let currentUser = data2.filter(data2 => data2.login === login && data2.password === password)
                    .map(item =>console.log(item.id, 'id'));


        // });
        // console.log(id, 'data2.login');

        // console.log(currentUser, 'currentUser');

        if(currentUser) {


            res.status(200).send(`id`);
        }else {

            res.status(401).send('Not found');
        }

    });
});
