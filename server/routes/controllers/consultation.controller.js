const db = require("../../db/sequelize/db");

const Consultation = db.Consultation;
const url = '/consultaions'

module.exports = app => {

  app.get(url + '/all', (req, res) => {
    Consultation.findAll().then(data => res.send(data));
  });

  app.get(url + '/all/free', (req, res) => {
    Consultation.findAll({
      include: [
        {model: db.Employee},
        {model: db.User}
      ],
      where: {
        userId: null
      }
    }).then(data => res.send(data));
  });

  app.get(url + "/best/five", (reg, res) => {
    Consultation.findAll({
      attributes: [
        'price',
        'room',
        'date',
        'title',
        [models.sequelize.fn('sum', models.sequelize.col('payments.payment_amount')), 'total_cost']
      ],
      include: [
        {model: db.Employee},
        {model: db.User}
      ],
    });
  });

}
