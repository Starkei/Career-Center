module.exports = connection => {
  const Employee = connection.sequelize.define('employees', {

      id: {
        type: connection.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      fullName:{
        type: connection.Sequelize.STRING,
        unique: true
      },

      age:{
        type: connection.Sequelize.INTEGER
      },

      phoneNumber:{
        type: connection.Sequelize.INTEGER
      },

      email: {
        type: connection.Sequelize.STRING
      }

  });

  return Employee;
}
