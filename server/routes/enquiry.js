var express = require('express');
var router = express.Router();

var Enquiry = require("../api/enquiry/enquiry.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET user profile. */
router.get('/list', Enquiry.list)

module.exports = router;