const db = require("../../db/sequelize/db");

const Employee  = db.Employee;
const url = '/employees'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    Employee.findAll().then(data => res.send(data));
  });
}
