const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new book
router.post('/books', (req, res, next) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const newBook = new Product(null, title, ISBN, publishedDate, author).save();
    res.status(201).json(newBook);
});

// Read all books
router.get('/books', (req, res, next) => {
    res.status(200).json(Product.fetchAll());
});

// Read a specific book by ID
router.get('/books/:id', (req, res, next) => {
    const bookId = req.params.id;
    const book = Product.findById(bookId);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Update a book by ID
router.put('/books/:id', (req, res, next) => {
    const bookId = req.params.id;
    const { title, ISBN, publishedDate, author } = req.body;
    const updatedBook = new Product(bookId, title, ISBN, publishedDate, author).update();
    if (updatedBook) {
        res.status(200).json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Delete a book by ID
router.delete('/books/:id', (req, res, next) => {
    const bookId = req.params.id;
    Product.deleteById(bookId);
    res.status(200).end();
});

module.exports = router;