const db = require("../../db/sequelize/db");
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

const Employee = db.Employee;
const url = "/employees";

module.exports = app => {
  app.get(url + "/all", (req, res) => {
    Employee.findAll().then(data => res.send(data));
  });

  app.get(url + "/getById", (req, res) => {
    var handler = {};
    Employee.findOne({
      where: { id: Number(req.query.id) }
    }).then(data => {
      handler = data;
      db.SpecializationOfEmoployee.findAll({
        include: [{ model: db.Specialization }],
        where: { employeeId: data.id }
      }).then(specializations => {
        specializations = specializations.map(element => {
          return element.specialization.name;
        });
        console.log(specializations);
        res.send({ specializations, handler });
      });
    });
  });

  app.post(url + "/add", upload.single("image"), (req, res) => {
    db.Employee.create({
      fullName: req.body.fullName,
      age: Number(req.body.age),
      phoneNumber: Number(req.body.phoneNumber),
      email: req.body.email,
      image: req.body.file
    });
  });

  app.post(url + "/remove", (req, res) => {
    let cis = [];
    req.body.forEach(element => {
      cis.push(element.id);
    });
    db.Employee.destroy({
      where: { id: cis }
    });
  });
};
