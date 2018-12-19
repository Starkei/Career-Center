var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var officegen = require("officegen");
var async = require("async");
var fs = require("fs");
var path = require("path");

var outDir = path.join(__dirname, "../");

const expressJwt = require("express-jwt");
const db = require("./db/sequelize/db");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  expressJwt({ secret: "secret" }).unless({
    path: [
      "/usersRoles/logIn",
      "/consultaions/all",
      "/consultaions/all/free",
      "/consultaions/best/five",
      "/consultaions/getByDate",
      "/consultaions/getNearDate",
      "/reviews/forConsultantId",
      "/usersRoles/all",
      "/roles/all",
      "/employees/all",
      "/reviews/all",
      "/users/all",
      "/specializationsOfEmployees/all",
      "/spectializations/all",
      "/employees/getById",
      "/reviews/addReview"
    ]
  })
);

require("./routes/controllers")(app);

var docx = officegen("docx");
var paragraph = docx.createP();
paragraph.addText("Bla bla");
var out = fs.createWriteStream(path.join(outDir, "example.docx"));

out.on("error", function(err) {
  console.log(err);
});

async.parallel(
  [
    function(done) {
      out.on("close", function() {
        console.log("Finish to create a DOCX file.");
        done(null);
      });
      docx.generate(out);
    }
  ],
  function(err) {
    if (err) {
      console.log("error: " + err);
    } // Endif.
  }
);

var server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("server is listening on : http://%s:%s", host, port);
});
