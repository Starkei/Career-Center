var fs = require("fs");
var XLSXChart = require("xlsx-chart");
var xlsxChart = new XLSXChart();
var officegen = require("officegen");
var async = require("async");
var path = require("path");
var outDir = path.join(__dirname, "../../assets/export/");

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
          ]
        },
        userId: null
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

  app.post(url + "/add", (req, res) => {
    let consultation = req.body;
    db.Consultation.create({
      price: consultation.price,
      date: new Date(consultation.date),
      title: consultation.title,
      room: Number(consultation.room)
    }).then(data => {
      if (Number(consultation.userId) !== 0)
        db.Consultation.update(
          {
            userId: Number(consultation.userId),
            employeeId: Number(consultation.employeeId)
          },
          { where: { id: data.id } }
        );
      else
        db.Consultation.update(
          { employeeId: Number(consultation.employeeId) },
          { where: { id: data.id } }
        );
    });
  });

  app.post(url + "/remove", (req, res) => {
    let cis = [];
    req.body.forEach(element => {
      cis.push(element.id);
    });
    db.Consultation.destroy({
      where: { id: cis }
    });
  });

  app.post(url + "/writeUser", (req, res) => {
    let u_id = req.body.token.user.id;
    let c_id = req.body.consultaion.id;
    db.Consultation.update({ userId: u_id }, { where: { id: c_id } });
  });

  app.get(url + "/excel", (req, res) => {
    db.Consultation.findAll({
      attributes: [
        [db.sequelize.fn("sum", db.sequelize.col("price")), "total_cost"]
      ],
      include: [
        {
          model: db.Employee,
          attributes: ["fullName"]
        },
        {
          model: db.User,
          attributes: ["id"],
          require: true
        }
      ],
      where: { userId: { [db.Sequelize.Op.ne]: null } },
      group: ["employee.id", "user.id"]
    }).then(data => {
      fields = data.map(element => {
        return element.employee.fullName;
      });
      price = data.map(element => {
        return element.dataValues.total_cost;
      });
      var Price = {};
      for (let i = 0; i < fields.length; i++) {
        Price[fields[i]] = price[i];
        console.log(Price);
      }
      res.send(Price);
      var opts = {
        chart: "column",
        titles: ["Price"],
        fields,
        data: {
          Price
        },
        chartTitle: "Last 7 days results"
      };
      xlsxChart.generate(opts, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          fs.writeFileSync("DiagramLast7Days.xlsx", data);
        }
      });
    });
  });

  app.get(url + "/docx", (req, res) => {
    let min_date = new Date();
    let max_date = new Date();
    min_date.setDate(date.getDate() - 7);
    db.Consultation.findAll({
      include: [{ model: db.User }, { model: db.Employee }],
      where: {
        date: {
          [db.Sequelize.Op.and]: {
            [db.Sequelize.Op.gte]: min_date,
            [db.Sequelize.Op.lte]: max_date
          }
        }
      }
    }).then(data => {
      var docx = officegen({
        type: "docx",
        orientation: "portrait",
        pageMargins: { top: 1000, left: 1000, bottom: 1000, right: 1000 }
      });
      var paragraph = docx.createP();
      paragraph.addText("Report of last 7 days");
      paragraph.addText(" with color", { color: "000088" });
      paragraph.addText(" and back color.", {
        color: "00ffff",
        back: "000088"
      });

      var paragraph = docx.createP();

      var out = fs.createWriteStream(
        path.join(outDir, "DiagramLast7Days.docx")
      );

      out.on("error", function(err) {
        console.log(err);
      });

      async.parallel(
        [
          function(done) {
            out.on("close", function() {
              console.log("Finish to create a DOCX file.");
              done(null);
            });
            docx.generate(out);
          }
        ],
        function(err) {
          if (err) {
            console.log("error: " + err);
          } // Endif.
        }
      );
    });
  });

  app.get(url + "/reports", (req, res) => {
    db.Consultation.findAll({
      attributes: [
        [db.sequelize.fn("sum", db.sequelize.col("price")), "total_cost"]
      ],
      include: [
        {
          model: db.Employee,
          attributes: ["fullName"]
        },
        {
          model: db.User,
          attributes: ["id"],
          require: true
        }
      ],
      where: { userId: { [db.Sequelize.Op.ne]: null } },
      group: ["employee.id", "user.id"]
    }).then(data => {
      fields = data.map(element => {
        return element.employee.fullName;
      });
      price = data.map(element => {
        return element.dataValues.total_cost;
      });
      var Price = {};
      for (let i = 0; i < fields.length; i++) {
        Price[fields[i]] = price[i];
        console.log(Price);
      }
      res.send(Price);
      var opts = {
        chart: "column",
        titles: ["Price"],
        fields,
        data: {
          Price
        },
        chartTitle: "Last 7 days results"
      };
      xlsxChart.generate(opts, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          fs.writeFileSync("DiagramLast7Days.xlsx", data);
        }
      });
    });
  });
};
