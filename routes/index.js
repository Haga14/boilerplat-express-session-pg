var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(req.session);
  console.log(req.session)
});


module.exports = router;
