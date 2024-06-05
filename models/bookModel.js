const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
    file: {
        type: String,
        required: [true, "Book Name is required"],
        minLength: [4, "Book Name must have atleast 4 characters"],
        trim: true,
    },
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
    author: {
        type: String,
        required: [true, "Author Name is required"],
        minLength: [5, "Author Name must have atleast 5 characters"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Book Price is required"],
        trim: true,
    },
    isbn: {
        type: String,
        required: [true, "ISBN Number is required"],
        minLength: [13, "ISBN must have atleast 13 characters"],
        trim: true,
        unique: true,
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
        minLength: [30, "Description must have atleast 30 characters"],
        trim: true,
    } 
},{timestamps: true});

const bookCollection = mongoose.model("book", bookModel);

module.exports = bookCollection