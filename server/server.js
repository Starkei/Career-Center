var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const db = require('./db/sequelize/sequelize.config.js');

require("./db/sequelize/routes/owner.route.js")(app);

app.get('/', function(req, res){
    console.log('hi');
    res.send('hi');
});

var server = app.listen(8080, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("server is listening on : http://%s:%s",host, port);
});