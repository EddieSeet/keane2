var configDB = require("./configDB");
var database = require("./database");


var apiURI = "http://localhost:3000";

var Genre = database.Genre;
var Movie = database.Movie;
var User = database.User;
var Enquiry = database.Enquiry;


module.exports = function () {
    if (configDB.seed) {
        Genre.bulkCreate([
            {genre_id: 0, genre_name: "All",       genre_desc: "Any kind of movie."},
            {genre_id: 201, genre_name: "Spy",       genre_desc: "James is a superficial character that is a spy."},
            {genre_id: 202, genre_name: "Thriller",  genre_desc: "Ethan Hunt always saves the world when they are in trouble."},
            {genre_id: 203, genre_name: "Superhero", genre_desc: "Avengers are a bunch of superheroes."},
            {genre_id: 204, genre_name: "Action",    genre_desc: "These drivers know how to race fast and furious."}        
        ])
            .then(function () {
                console.log("done creating genre records");

                Movie.bulkCreate([
                    {movie_id: 101, title: "James Bond 007",     actors: "Daniel Craig, Pierce Brosnan, Sean Connery",     studio: "Pinewood Studios",   genre_id: 201, genre_name: "Spy",       genre_desc: "James is a superficial character that is a spy.",                 image_url: "assets/img/jamesbond.jpg"},
                    {movie_id: 102, title: "Mission Impossible", actors: "Tom Cruise, Simon Pegg, Ving Rhames",            studio: "Tom Cruise Studios", genre_id: 202, genre_name: "Thriller",  genre_desc: "Ethan Hunt always saves the world when they are in trouble.",     image_url: "assets/img/missionimp.jpg"},
                    {movie_id: 103, title: "The Avengers",       actors: "Robert Downey Jr, Chris Evans, Chris Hemsworth", studio: "Marvel Studios",     genre_id: 203, genre_name: "Superhero", genre_desc: "Avengers are a bunch of superheroes.",                            image_url: "assets/img/avengers.jpg"},                    
                    {movie_id: 104, title: "Ant Man",       actors: " Paul Rudd, Evangeline Lilly, Michael Douglas,", studio: "Marvel Studios",     genre_id: 203, genre_name: "Superhero", genre_desc: "Pesky little ants stealing my food everyday.",                            image_url: "assets/img/antman.jpg"},
                    {movie_id: 105, title: "Fast & Furious",     actors: "Vin Diesel, Dwayne Johnson, Jason Statham",      studio: "Furious Studios",    genre_id: 204, genre_name: "Action",    genre_desc: "These drivers know how to race fast and furious.",                image_url: "assets/img/fastnfurious.jpg"}                
                ]).then(function () {
                    User.bulkCreate([
                        {email:"13eddie07@gmail.com",password:"123"}
                    ])
                    Enquiry.bulkCreate([
                        {userid:"1", useremail:"13eddie07@gmail.com",userenquiry:"hi there", usermessage:"thic"} 
                        ,{userid:"2", useremail:"13eddie06@gmail.com",userenquiry:"hi there22", usermessage:"thic3"}

                    ])

                    console.log("done creating movie records");
                });
            });
    }
}
