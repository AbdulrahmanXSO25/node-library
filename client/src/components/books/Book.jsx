import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../shared/ConfirmationModal';

function Book({ book, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigateTo = useNavigate();

    const handleDelete = () => {
        onDelete(book.id);
        setIsModalOpen(false);
    };

    const handleUpdate = () => {
        navigateTo(`/update/${book.id}`);
    };

    return (
        <div className="border rounded-md p-4 shadow-lg">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p>{book.authorName}</p>
            <p>Published on: {book.publishDate}</p>
            <p>Price: ${book.price}</p>
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">Edit</button>
            <button onClick={() => setIsModalOpen(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1">Delete</button>
            {isModalOpen && (
                <ConfirmationModal
                    title="Confirm Delete"
                    confirmationText={`Are you sure you want to delete ${book.title}?`}
                    onConfirm={handleDelete}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Book;
