var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const expressJwt = require("express-jwt");
const db = require("./db/sequelize/db");
const cors = require("cors");
const path = require("path");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

app.use(express.static(path.join(__dirname, "./assets")));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  expressJwt({ secret: "secret" }).unless({
    path: [
      /\/images\/*/,
      "/consultaions/all",
      "/consultaions/all/free",
      /\/consultaions\/all\/byId*/,
      "/consultaions/best/five",
      "/consultaions/getByDate",
      "/consultaions/getNearDate",
      "/consultaions/add",
      "/consultaions/remove",
      "/consultaions/writeUser",
      "/consultaions/docx",
      "/consultaions/excel",
      "/consultaions/reports",
      "/reviews/forConsultantId",
      "/reviews/addReview",
      "/usersRoles/all",
      "/usersRoles/logIn",
      "/usersRoles/registration",
      "/roles/all",
      "/employees/all",
      "/employees/add",
      "/employees/remove",
      "/reviews/all",
      "/users/all",
      "/specializationsOfEmployees/all",
      "/specializationsOfEmployees/add",
      /\/specializationsOfEmployees\/byId*/,
      "/spectializations/all",
      "/spectializations/add",
      "/employees/getById"
    ]
  })
);

//db.sequelize.sync({ alter: true, sync: true });

require("./routes/controllers")(app);

var server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("server is listening on : http://%s:%s", host, port);
});
