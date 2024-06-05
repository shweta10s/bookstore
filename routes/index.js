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

router.get('/library', async function(req, res) {
try{
  const books = await BookCollection.find()
  res.render('library', {title: 'Library | BookStore', books: books});
}
catch(error){
  console.log(error);
  res.send(error);
}
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

router.get('/details/:id', async function(req, res) {
  try{
const book = await BookCollection.findById(req.params.id)
    res.render('details', {title: 'Details | BookStore', book: book});
  }
catch(error){
  console.log(error);
  res.send(error);
}
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
