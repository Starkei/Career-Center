module.exports = connection => {
  const Role = connection.sequelize.define("roles", {

    id: {
      type: connection.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: connection.Sequelize.STRING,
      unique: true
    }

  });

  return Role;
}
