module.exports = (sequelize, Sequelize) => {
    const Onwer = sequelize.define('owner', {

        firstname:{
            type: Sequelize.STRING
        },

        lastname:{
            type: Sequelize.STRING
        },

        age:{
            type: Sequelize.INTEGER
        }
        
    });

    return Onwer;
}