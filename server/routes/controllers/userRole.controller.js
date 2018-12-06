const db = require("../../db/sequelize/db");

const UserRole  = db.UserRole;
const url = '/usersRoles'

module.exports = app => {

  app.get(url + '/all', (req, res) => {
    UserRole.findAll({
     include: [db.Role, db.User]
    }).then(data => res.send(data));
  });


  app.get(url + '/user', (req, res) => {
    UserRole.findAll({
     include: [
       {model: db.Role},
       {model: db.User, where: {
            nickName: req.query.nickName,
            password: req.query.password
          }
        }
    ]
    }).then(data => res.send(data));
  });


}
