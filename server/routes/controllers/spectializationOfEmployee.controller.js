const db = require("../../db/sequelize/db");

const SpecializationOfEmoployee  = db.SpecializationOfEmoployee;
const url = '/specializationsOfEmoployees'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    SpecializationOfEmoployee.findAll().then(data => res.send(data));
  });
}
