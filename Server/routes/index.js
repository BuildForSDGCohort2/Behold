var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LFA' ,B1:"Pius",B2:"Aron"});
});

// router.get('/gAuth', function(req, res, next) {
//   res.render('googleAuth');
// });


module.exports = router;
