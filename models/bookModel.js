const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
    file: String,
    bookname: {
        type: String,
        required: [true, "Book Name is required"],
        minLength: [4, "Book Name must have atleast 4 characters"],
        trim: true,
        uppercase: true
        // match: [/regex/, message],
        // unique: true,
        //lowercase: true
    },
    author: String,
    category: String,
    price: Number,
    isbn: String,
    desc: String
});

const bookCollection = mongoose.model("book", bookModel);

module.exports = bookCollection