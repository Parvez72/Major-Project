var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard.html', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/profile.html',function (req, res, next) {
    res.render('profile');
});
router.get('/charts.html',function (req, res, next) {
    res.render('charts');
});
module.exports = router;
