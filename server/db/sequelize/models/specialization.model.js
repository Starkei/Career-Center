module.exports = connection => {
  const Specialization = connection.sequelize.define('specializations', {

      id: {
        type: connection.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name:{
        type: connection.Sequelize.STRING,
        unique: true
      }

  });

  return Specialization;
}
