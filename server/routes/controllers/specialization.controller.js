const db = require("../../db/sequelize/db");

const Specialization = db.Specialization;
const url = "/spectializations";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    Specialization.findAll().then(data => res.send(data));
  });

  app.post(url + "/add", (req, res) => {
    console.log(req.body);
    Specialization.create({
      name: req.body.name
    });
  });
};
