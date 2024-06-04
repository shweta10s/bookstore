var express = require('express');
var router = express.Router();

const BookCollection = require("../models/bookModel")

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
  res.render('createbook',{title: 'Register Book | BookStore'});
});

router.post('/createbook', async function(req, res) {
  try{
    // await BookCollection.create(req.body);
    const newBook = await new BookCollection(req.body);
    // cn update data via newBook object and then save it to database
    await newBook.save();
    res.redirect('/library');
  } catch(error) {
    console.log(error);
    res.send(error);
  }
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
