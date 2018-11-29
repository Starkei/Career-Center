const db = require("../../db/sequelize/db");

const Role  = db.Role;
const url = '/roles'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    Role.findAll().then(data => res.send(data));
  });
}
