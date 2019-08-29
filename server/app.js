var path = require('path');
var express     = require ('express');
var bodyParser  = require('body-parser');
var movieCtrl  = require('./api/movies/movies.controller');
var genreCtrl  = require('./api/genres/genres.controller');
var enquiryCtrl = require('./api/enquiry/enquiry.controller');

var app  = express();
var cors = require('cors');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

//movies
app.get ("/api/movies",  movieCtrl.list);

app.get ("/api/movies2",  movieCtrl.list2);

app.post("/api/movies",  movieCtrl.add);


app.put ("/api/movies/:movie_id",  movieCtrl.update);
//app.put ("/api/movies/:id",  movieCtrl.update2);
app.delete("/api/movies/:movie_id",  movieCtrl.delete);
app.get("/api/movies/:id",movieCtrl.getamovie);


//genres
app.get ("/api/genres",  genreCtrl.list);
app.post("/api/genres",  genreCtrl.add);



// app.post('/api/enquiry', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );



var user = require('./routes/user');
var auth = require('./routes/auth');
var enquiry = require('./routes/enquiry');


const passport = require('passport');
require('./passport');


//enquiry
app.post("/api/enquiry",  enquiryCtrl.add);
//app.get ("/api/enquiry",  enquiryCtrl.list);


//listing need auth
app.use("/enquiry", passport.authenticate("jwt",{session:false}, enquiry))


app.use('/user', passport.authenticate('jwt', {session: false}), user);
app.use('/auth', auth);



app.use(function (req, resp) {
    resp.status(440);
    resp.send("Error File not Found");
});





// set port and start webserver
app.listen('3000', function () {
    console.log("Server running at http://localhost:3000");
});


