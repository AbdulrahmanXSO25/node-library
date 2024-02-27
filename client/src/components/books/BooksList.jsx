// components/BooksList.jsx
import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../../services/bookService';
import Book from './Book';

function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
        try {
            const response = await getBooks();
            if (response.success) {
            setBooks(response.result); // Set books to the result array
            } else {
            throw new Error(response.error || 'Failed to fetch books');
            }
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
        await deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
        } catch (error) {
        console.error("Failed to delete book:", error);
        }
    };

    const handleUpdate = (id) => {
        // Handle updating a book (e.g., route to update form)
        console.log("Update book with id:", id);
    };

    return (
        <div className="space-y-4">
            <h1 className="mx-auto text-center font-bold text-2xl px-6 py-3 w-fit border-2 border-dashed border-violet-400">All Books</h1>
        {books.map(book => (
            <Book key={book.id} book={book} onDelete={handleDelete} />
        ))}
        </div>
    );
}

export default BooksList;
