var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const db = require('./db/sequelize/db');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

require("./routes/controllers")(app);


var server = app.listen(8080, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("server is listening on : http://%s:%s",host, port);
});

db.sequelize.sync({force:true});