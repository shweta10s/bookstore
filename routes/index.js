var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {title: 'Home | BookStore'});
});

router.get('/about', function(req, res) {
  res.render('about', {title: 'About | BookStore'});
});

router.get('/library', function(req, res) {
  res.render('library', {title: 'Library | BookStore'});
});

router.get('/create-book', function(req, res) {
  res.render('createbook',{title: 'Registser Book | BookStore'});
});

router.post('/createbook', function(req, res) {
  res.render('library', {title: 'Library | BookStore'});
});

router.get('/details', function(req, res) {
  res.render('details', {title: 'Details | BookStore'});
});

router.get('/update', function(req, res) {
  res.render('update', {title: 'Update | BookStore'});
});

router.get('/delete', function(req, res) {
  res.render('library', {title: 'Library | BookStore'});
});

router.get('/login', function(req, res) {
  res.render('login', {title: 'Login | BookStore'});
});

router.get('/register', function(req, res) {
  res.render('register', {title: 'Home | BookStore'} );
});

module.exports = router;
