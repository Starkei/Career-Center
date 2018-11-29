const db = require("../../db/sequelize/db");

const Consultation = db.Consultation;
const url = '/consultaions'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    Consultation.findAll().then(data => res.send(data));
  });
}
