const db = require("../../db/sequelize/db");

const Consultation = db.Consultation;
const url = "/consultaions";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    Consultation.findAll({
      include: [db.Employee, db.User]
    }).then(data => res.send(data));
  });

  app.get(url + "/all/free", (req, res) => {
    let date = new Date(Date.now());

    Consultation.findAll({
      include: [{ model: db.Employee }, { model: db.User }],
      where: {
        userId: null,
        date: { [db.Sequelize.Op.gte]: date }
      }
    }).then(data => res.send(data));
  });

  app.get(url + "/best/five", (reg, res) => {
    Consultation.findAll({
      attributes: [
        "price",
        "room",
        "date",
        "title",
        [
          db.sequelize.fn("sum", db.sequelize.col("payments.payment_amount")),
          "total_cost"
        ]
      ],
      include: [{ model: db.Employee }, { model: db.User }]
    });
  });

  app.get(url + "/getByDate", (req, res) => {
    let date = new Date(req.query.date);
    date.setDate(date.getDate() + 1);

    Consultation.findAll({
      where: {
        date: {
          [db.Sequelize.Op.and]: [
            { [db.Sequelize.Op.lt]: date },
            { [db.Sequelize.Op.gte]: new Date(req.query.date) }
          ],
          userId: null
        }
      },
      include: [{ model: db.Employee }, { model: db.User }]
    }).then(data => res.send(data));
  });

  app.get(url + "/getNearDate", (req, res) => {
    let date = new Date(Date.now());

    Consultation.min("date", {
      where: { date: { [db.Sequelize.Op.gte]: date }, userId: null }
    }).then(min => {
      Consultation.findAll({
        where: {
          date: {
            [db.Sequelize.Op.and]: [{ [db.Sequelize.Op.eq]: min }]
          }
        },
        include: [{ model: db.Employee }, { model: db.User }]
      }).then(data => res.send(data));
    });
  });
};
