var Movie = require("../../database").Movie;

exports.list = function(req, resp) {
  var whereClauseCat = req.params.desc_id
    ? { desc_id: parseInt(req.params.desc_id) }
    : {};

  Movie.findAll({
    where: whereClauseCat
  })
    .then(result => {
      resp.status(200);
      resp.type("application/json");
      resp.json(result);
    })
    .catch(err => {
      resp.status(500);
      resp.type("application/json");
      resp.json({ error: true });
    });
};

exports.list2 = function(req, resp) {
  Movie.findAll({
    raw: true
  })
    .then(result => {
      resp.status(200);
      resp.type("application/json");
      resp.json(result);
    })
    .catch(err => {
      resp.status(500);
      resp.type("application/json");
      resp.json({ error: true });
    });
};

exports.getamovie = function(req, res) {
  //    console.log(req)
  //    console.log(req.params["id"])
  id = req.params["id"];
  Movie.findAll({
    where: { movie_id: id }
  }).then(data => {
    res.json(data);
  });
};

exports.add = function(req, resp) {
  if (!req.body.info) {
    handleErr(resp);
  } else {
    var newinfo = req.body.info;

    movieList.push(newinfo);
    resp.status(200);
    resp.type("application/json");
    resp.json(newinfo);
  }
};

exports.update = function(req, res) {
//  console.log("eh");
 

//console.log(req.body.movie_id);
console.log(req.body)
 
  w = { where: { movie_id: req.body.movie_id } };

  Movie.update(
    {
      title: req.body.title,
      actor: req.body.actor,
      studio: req.body.studio,
      genre_name: req.body.genre_name,
      genre_desc: req.body.genre_desc
    },
    w
  ).then(() => {
    res.send("200");
  });

  // if (!req.body.info){
  //     handleErr(resp);
  // } else {
  //     var updateInfo = req.body.info;
  //     var whereClause = { movie_id: parseInt(req.params.movie_id)};

  //     Movie.update(
  //         updateInfo,
  //         {where: whereClause}
  //     ).then(
  //         (result)=> {
  //             let status = (result[0] == 1);
  //             resp
  //             .status(200)
  //             .type("application/json")
  //             .json({success: status});
  //         } //if correct
  //     ).catch(
  //         (error) => {
  //             handleErr(resp);
  //         } //if wrong
  //     );
  // }
};

// exports.update2 = function (req, resp) {
// console.log("hi")

// }
exports.delete = function(req, resp) {
  var whereClause = { movie_id: parseInt(req.params.movie_id) };

  Movie.destroy({ where: whereClause })
    .then(result => {
      let status = result == 1;
      resp
        .status(200)
        .type("application/json")
        .json({ success: status });
    })
    .catch(error => {
      handleErr(resp);
    });
};

// Error handling
function handleErr(res) {
  handleErr(res, null);
}

function handleErr(res, err) {
  console.log(err);
  res.status(500).json({ error: true });
}
