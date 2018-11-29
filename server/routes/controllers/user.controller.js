const db = require("../../db/sequelize/db");

const User  = db.User;
const url = '/users'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    User.findAll().then(data => res.send(data));
  });
}
