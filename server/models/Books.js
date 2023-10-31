const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    cover_img: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Books = mongoose.model('book', BookSchema)