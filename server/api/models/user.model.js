var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define('User', {
        // userid : {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        email : {
            type: Sequelize.STRING(250),
            primaryKey: true,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING(250),
        },
    },
        {
        tableName: 'User',
        timestamps: false
        })
    
}