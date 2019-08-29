var Sequelize = require("sequelize");
var configDB = require("./configDB");

var database;

database = new Sequelize(
    configDB.mysql.database,
    configDB.mysql.username,
    configDB.mysql.password, {
        host: configDB.mysql.host,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: configDB.mysql.logging
    }
);

var Genre = require("./api/models/genre.model")(database);
var Movie = require("./api/models/movie.model")(database);
var Enquiry = require("./api/models/enquiry.model")(database);
var User = require("./api/models/user.model")(database)


database
    .sync({
        force: configDB.seed
    })
    .then(function () {
        console.log("Database in Sync Now");
        require("./seed")();
    })

module.exports = {
    Genre: Genre,
    Movie: Movie,
    Enquiry: Enquiry,
    User:User
}