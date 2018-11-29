const db = require("../../db/sequelize/db");

const Review  = db.Review;
const url = '/reviews'

module.exports = app => {
  app.get(url + '/all', (req, res) => {
    Review.findAll().then(data => res.send(data));
  });
}
