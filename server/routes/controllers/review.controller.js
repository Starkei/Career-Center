const db = require("../../db/sequelize/db");

const Review = db.Review;
const url = "/reviews";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    Review.findAll({
      include: [{ model: db.Employee }, { model: db.User }]
    }).then(data => res.send(data));
  });

  app.get(url + "/forConsultantId", (req, res) => {
    Review.findAll({
      include: [
        { model: db.User },
        { model: db.Employee, where: { id: Number(req.query.id) } }
      ]
    }).then(data => res.send(data));
  });

  app.post(url + "/addReview", (req, res) => {
    let body = req.body;
    Review.create({
      text: body.text
    })
      .then(review => {
        console.log(review);
        Review.update(
          { userId: Number(body.userId), employeeId: Number(body.employeeId) },
          { where: { id: review.id } }
        );
      })
      .then(data => {
        res.send(data);
        console.log(data);
      });
  });
};
