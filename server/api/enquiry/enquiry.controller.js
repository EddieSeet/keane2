var Enquiry = require("../../database").Enquiry;

exports.list = function (req, resp) {

    Enquiry.findAll(
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

exports.add = function(req, res) {

    //console.log(req.body)

//    console.log(req.body.useremail)

    var {
        useremail,
        userenquiry,
        usermessage
      } = req.body;


    enquiry ={
        useremail,
        userenquiry,
        usermessage
    } 

    Enquiry.create(enquiry)
    .then( 
        (data)=>{
            console.log("enquiry added todb")
            res.status("200")
        }

    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )


    // if (!req.body.info) {
    //      handleErr(resp);
    //  } else {
    //     var newinfo = req.body.info;

    //     enquiryList.push(newinfo);
    //     resp.status(200)
    //     resp.type("application/json");
    //     resp.json(newinfo);
    // }


}

// exports.update = function(req, resp) {
//     if (!req.body.info) {
//         handleErr(resp);
//     } else {
//         var updateInfo = req.body.info;
//         var whereClause = {userid: parseInt(req.params.userid)};

//         Enquiry.update(
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
//     var whereClause = {userid: parseInt(req.params.userid)}; 

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
