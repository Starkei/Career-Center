const db = require("../../db/sequelize/db");
const jwt = require("jsonwebtoken");
const UserRole = db.UserRole;
var multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./src/assets/images");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: storage
});
const url = "/usersRoles";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    UserRole.findAll({
      include: [db.Role, db.User]
    }).then(data => res.send(data));
  });

  app.get(url + "/user", (req, res) => {
    UserRole.findAll({
      include: [
        { model: db.Role },
        {
          model: db.User,
          where: {
            id: Number(req.query.id)
          }
        }
      ]
    }).then(data => res.send(data));
  });

  app.post(url + "/signIn", (req, res) => {});
  app.post(url + "/logIn", (req, res) => {
    let body = req.body;
    let user = { ...body };

    UserRole.findAll({
      include: [
        { model: db.Role },
        {
          model: db.User,
          where: {
            nickName: user.nickName
          }
        }
      ]
    }).then(loggedUser => {
      if (loggedUser || loggedUser.password == user.password) {
        let roles = [];

        for (let i = 0; i < loggedUser.length; i++) {
          roles.push(loggedUser[i].role);
        }

        console.log(loggedUser[0]);

        let token = jwt.sign(
          {
            user: loggedUser[0].user,
            roles: roles
          },
          "secret",
          {
            expiresIn: "2h"
          }
        );
        res.send({ token });
      } else res.sendStatus(401);
    });
  });

  app.post(url + "/registration", upload.single("image"), (req, res) => {
    db.UserRole.create(
      {
        user: {
          fullName: req.body.fullName,
          age: req.body.age,
          nickName: req.body.nickName,
          password: req.body.password,
          email: req.body.email,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
          image: req.body.file
        }
      },
      { include: [db.User] }
    ).then(data => {
      db.UserRole.update({ roleId: 1 }, { where: { id: data.id } });
    });
  });
};
