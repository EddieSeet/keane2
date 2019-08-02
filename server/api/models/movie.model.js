var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define('movies', {
        movie_id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title : {
            type: Sequelize.STRING(50),
            primaryKey: false,
            allowNull: false
        },
        actors : {
            type: Sequelize.STRING(200),
            primaryKey: false,
            allowNull: false
        },
        studio : {
            type: Sequelize.STRING(100),
            primaryKey: false,
            allowNull: false
        },
        genre_id : {
            type: Sequelize.INTEGER,
            primaryKey: false,
            allowNull: false,
            references: { 
                model: 'genres',
                key: 'genre_id'
              }
        },
        genre_name : {
            type: Sequelize.STRING(50),
            primaryKey: false,
            allowNull: false
        },
        genre_desc : {
            type: Sequelize.STRING(200),
            primaryKey: false,
            allowNull: false
        },
        image_url : {
            type: Sequelize.STRING(100),
            primaryKey: false,
            allowNull: false
        }
    },
        {
        tableName: 'movies',
        timestamps: false
        })
    
}