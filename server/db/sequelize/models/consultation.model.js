module.exports = connection => {

  const Consultation = connection.sequelize.define("consultations", {

    id :{
      type : connection.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    price: {
      type: connection.Sequelize.INTEGER,
    },

    date: {
      type: connection.Sequelize.DATE
    },

    title: {
      type: connection.Sequelize.STRING
    },

    room: {
      type: connection.Sequelize.INTEGER
    }

  });

  return Consultation;

}
