module.exports = connection => {
  const SpecializationOfEmployee = connection.sequelize.define("specializationsOfEmployees", {

    id: {
      type: connection.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }

  });

  return SpecializationOfEmployee;
}
