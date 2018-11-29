const config = require("./config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
});


const connection = {};

connection.Sequelize = Sequelize;
connection.sequelize = sequelize;

module.exports = connection;
