var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define('genres', {
        genre_id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        genre_name : {
            type: Sequelize.STRING(50),
            primaryKey: false,
            allowNull: false
        },
        genre_desc : {
            type: Sequelize.STRING(300),
            primaryKey: false,
            allowNull: false
        }
    },
        {
        tableName: 'genres',
        timestamps: false
        })
    
}