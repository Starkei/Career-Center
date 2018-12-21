const db = require("../../db/sequelize/db");

const SpecializationOfEmoployee = db.SpecializationOfEmoployee;
const url = "/specializationsOfEmployees";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    SpecializationOfEmoployee.findAll({
      include: [db.Specialization, db.Employee]
    }).then(data => res.send(data));
  });

  app.post(url + "/add", (req, res) => {
    s_id = req.body.specialization;
    e_id = req.body.employee;

    SpecializationOfEmoployee.create({}).then(data => {
      SpecializationOfEmoployee.update(
        { employeeId: e_id, specializationId: s_id },
        { where: { id: data.id } }
      );
    });
  });

  app.get(url + "/byId", (req, res) => {
    SpecializationOfEmoployee.findAll({
      include: [db.Specialization, db.Employee],
      where: { employeeId: req.query.id }
    }).then(data => res.send(data));
  });
};
