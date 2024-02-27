import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function Header() {
    return (
        <header className="bg-violet-800 text-white p-4 items-center">
            <div className="container mx-auto items-center flex justify-between">
                <Link to="/" className="text-white">
                    <h1 className="text-xl font-bold mr-4">Node Library</h1>
                </Link>
                <Link to="/create" className="flex items-center px-2 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                    <FaPlus className="mr-2" />
                    <span>Add Book</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;
