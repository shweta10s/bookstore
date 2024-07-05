var express = require('express');
var router = express.Router();
var fs = require('fs');

const BookCollection = require("../models/bookModel");
const userCollection = require("../models/userSchema");
const {sendMail} = require("../utils/sendMail");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {title: 'Home | BookStore'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About | BookStore'});
});

router.get('/library', async function(req, res, next) {
try{
  const books = await BookCollection.find()
  res.render('library', {title: 'Library | BookStore', books: books});
}
catch(error){
  console.log(error.message);
  res.send(error.message);
}
});

router.get('/create-book', function(req, res, next) {
  res.render('createbook',{title: 'Register Book | BookStore'});
});

router.post('/createbook', async function(req, res, next) {
  try{
    // await BookCollection.create(req.body);
    const newBook = await new BookCollection(req.body);
    // cn update data via newBook object and then save it to database
    await newBook.save();
    res.redirect('/library');
  } catch(error) {
    console.log(error.message);
    res.send(error.message);
  }
});

router.get('/details/:id', async function(req, res, next) {
  try{
const book = await BookCollection.findById(req.params.id)
    res.render('details', {title: 'Details | BookStore', book: book});  
  }
catch(error){
  console.log(error.message);
  res.send(error.message);
}
});

router.get('/update/:id', async function(req, res, next) {
  try{
    const book = await BookCollection.findById(req.params.id);
    res.render('update', {title: 'Update | BookStore', book: book});
  } catch(error){
    console.log(error.message);
    res.send(error.message);
  }
});

router.post('/update/:id',  async function (req, res, next) {
  try {
      const updatedBook = { ...req.body };
      if (req.file) {
          updatedBook.poster = req.file.filename;
          fs.unlinkSync(
              path.join(
                  __dirname,
                  `../public/images/${req.body.oldimage}`
              )
          );
      }
      await BookCollection.findByIdAndUpdate(req.params.id, updatedBook);
      res.redirect(`/library/${req.params.id}`);
  } catch (error) {
      console.log(error);
      res.send(error);
  }
}
);


router.get('/delete/:id', async function(req, res, next) {
  try{
    await BookCollection.findByIdAndDelete(req.params.id);
    res.redirect('library');
  }
  catch(error){
    console.log(error);
    res.send(error.message);``
  }
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login | BookStore'});
});

router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Home | BookStore'} );
});

router.post('/send-mail', function(req, res, next) {
  sendMail(req, res);
}

)

module.exports = router;
