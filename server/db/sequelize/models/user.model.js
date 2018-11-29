module.exports = connection => {
  const User = connection.sequelize.define("users", {

    id: {
      type: connection.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    address: {
      type: connection.Sequelize.STRING
    },

    fullName: {
      type: connection.Sequelize.STRING,
      unique: true
    },

    age: {
      type: connection.Sequelize.INTEGER
    },

    nickName: {
      type: connection.Sequelize.STRING,
      unique: true
    },

    phoneNumber: {
      type: connection.Sequelize.INTEGER
    },

    email: {
      type: connection.Sequelize.STRING
    },

    password: {
      type: connection.Sequelize.STRING
    }

  });

  return User;
}
