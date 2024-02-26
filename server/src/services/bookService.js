const Book = require('../models/book');
const FilterAPI = require('../utils/filterApi');

const booksService = {
    getBooks: async (query) => {
        try {
            const filterAPI = new FilterAPI(Book, query);
            const results = await filterAPI.applyFilters();
            return results;
        } catch (error) {
            throw error;
        }
    },

    createBook: async (bookData) => {
        try {
            const book = await Book.create(bookData);
            return book;
        } catch (error) {
            throw error;
        }
    },

    getBookById: async (id) => {
        try {
            const book = await Book.findByPk(id);
            if (!book) {
                throw new Error('Book not found');
            }
            return book;
        } catch (error) {
            throw error;
        }
    },

    updateBook: async (id, updateData) => {
        try {
            const book = await Book.findByPk(id);
            if (!book) {
                throw new Error('Book not found');
            }
            const updatedBook = await book.update(updateData);
            return updatedBook;
        } catch (error) {
            throw error;
        }
    },

    deleteBook: async (id) => {
        try {
            const book = await Book.findByPk(id);
            if (!book) {
                throw new Error('Book not found');
            }
            await book.destroy();
            return { message: 'Book successfully deleted' };
        } catch (error) {
            throw error;
        }
    },
};

module.exports = booksService;
