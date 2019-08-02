var Genre = require("../../database").Genre;

exports.list = function (req, resp) {

    Genre.findAll(
    ).then(
        (result) => {
            resp.status(200)
            resp.type("application/json");
            resp.json(result);
        }
    ).catch(
        (err) => {
            resp.status(500)
            resp.type("application/json");
            resp.json({error: true});
        }
    )
}

exports.add = function(req, resp) {
    if (!req.body.info) {
         handleErr(resp);
     } else {
        var newinfo = req.body.info;

        genreList.push(newinfo);
        resp.status(200)
        resp.type("application/json");
        resp.json(newinfo);
    }
}

// exports.update = function(req, resp) {
//     if (!req.body.info) {
//         handleErr(resp);
//     } else {
//         var updateInfo = req.body.info;
//         var whereClause = {genre_id: parseInt(req.params.genre_id)};

//         Genre.update(
//             updateInfo,
//             {where: whereClause}
//         ).then(
//             (result) => {
//                 (result) => {
//                     let status = (result[0] == 1);
//                     resp
//                         .status(200)
//                         .type("application.json")
//                         .json({success: status});
//                 }
//             }
//         ).catch(
//             (error) => {
//                 handleErr(resp);
//             }
//         );
//     }
// }

// exports.delete = function(req, resp) {
//     var whereClause = {genre_id: parseInt(req.params.genre_id)}; 

//     Genre.destroy(
//         {where: whereClause}
//     ).then(
//         (result) => {
//             let status = (result == 1);
//             resp
//                 .status(200)
//                 .type("application.json")
//                 .json({success: status});
//         }
//     ).catch(
//         (error) => {
//             handleErr(resp);
//         }
//     );
// }

// Error handling 
function handleErr(res) {
    handleErr(res, null);
}

function handleErr(res, err) {
    console.log(err);
    res.status(500).json({error: true});
}
