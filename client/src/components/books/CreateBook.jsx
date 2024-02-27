import React, { useState } from 'react';
import { createBook } from '../../services/bookService';
import { useNavigate } from 'react-router-dom';

function CreateBook({ onBookCreated }) {
    const navigateTo = useNavigate();

    const [bookData, setBookData] = useState({
        title: '',
        publishDate: '',
        quantity: 0,
        price: 0.00,
        authorName: ''
    });

    onBookCreated = () => {
        navigateTo('/');
    }

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBook(bookData);
            onBookCreated();
        } catch (error) {
            console.error("Failed to create book:", error);
        }
    };

    return (
        <div>
            <h1 className="mx-auto text-center font-bold text-2xl px-6 py-3 w-fit border-2 border-dashed border-violet-400">Create Book</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={bookData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishDate">
                        Publish Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="publishDate"
                        type="date"
                        name="publishDate"
                        placeholder="Publish Date"
                        value={bookData.publishDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                        Quantity
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={bookData.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={bookData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
                        Author Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="authorName"
                        type="text"
                        name="authorName"
                        placeholder="Author Name"
                        value={bookData.authorName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create Book
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateBook;