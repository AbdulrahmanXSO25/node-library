const booksService = require('../services/bookService');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');

const booksController = {
    getBooks: asyncErrorHandler(async (req, res) => {
        const books = await booksService.getBooks(req.query);
        res.sendSuccess(books);
    }),

    createBook: asyncErrorHandler(async (req, res) => {
        const book = await booksService.createBook(req.body);
        res.sendSuccess(book, 201);
    }),

    getBookById: asyncErrorHandler(async (req, res) => {
        const book = await booksService.getBookById(req.params.id);
        if (!book) {
            return res.sendError('Book not found', 404);
        }
        res.sendSuccess(book);
    }),

    updateBook: asyncErrorHandler(async (req, res) => {
        const updatedBook = await booksService.updateBook(req.params.id, req.body);
        res.sendSuccess(updatedBook);
    }),

    deleteBook: asyncErrorHandler(async (req, res) => {
        await booksService.deleteBook(req.params.id);
        res.sendSuccess(true, 204);
    }),
};

module.exports = booksController;