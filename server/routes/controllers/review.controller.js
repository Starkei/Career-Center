const db = require("../../db/sequelize/db");

const Review  = db.Review;
const url = '/reviews'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    Review.findAll({

      include : [
        {model: db.Employee},
        {model: db.User}
      ]

    }).then(data => res.send(data));
  });

  app.get(url + '/forConsultantId', (req, res) => {
    Review.findAll({
      include : [
        {model: db.User},
        {model: db.Employee, where: {id : Number(req.query.id)}}
      ]
    }).then(data => res.send(data));
  });
}
