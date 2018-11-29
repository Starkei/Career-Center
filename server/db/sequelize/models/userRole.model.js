module.exports = connection => {
  const UserRole = connection.sequelize.define("usersRoles", {

    id: {
      type: connection.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }

  });

  return UserRole;
}
