module.exports = connection => {

  const Review = connection.sequelize.define("reviews", {

    id :{
      type : connection.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    text: {
      type: connection.Sequelize.STRING
    }

  });

  return Review;

}
