var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define('enquiries', {
        userid : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        useremail : {
            type: Sequelize.STRING(50),
            primaryKey: false,
            allowNull: false
        },
        userenquiry : {
            type: Sequelize.STRING(50),
            primaryKey: false,
            allowNull: false
        },
        usermessage : {
            type: Sequelize.STRING(300),
            primaryKey: false,
            allowNull: false
        }
    },
        {
        tableName: 'enquiries',
        timestamps: false
        })
    
}