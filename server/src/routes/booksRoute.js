const express = require('express');
const router = express.Router();
const BookValidator = require('../validators/bookValidator');

const {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/booksController');

router.get('/', getBooks);

router.post('/', BookValidator.validateCreate, createBook);

router.get('/:id', getBookById);

router.put('/:id', BookValidator.validateUpdate, updateBook);

router.delete('/:id', deleteBook);

module.exports = router;