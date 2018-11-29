const db = require("../../db/sequelize/db");

const UserRole  = db.UserRole;
const url = '/usersRoles'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    UserRole.findAll().then(data => res.send(data));
  });
}
