const BASE_URL = 'http://localhost:3000/api/books';

export const getBooks = async () => {
    try {
        const response = await fetch(`${BASE_URL}?sortBy=createdAt&order=ASC`);
        if (!response.ok) {
        throw new Error('Failed to fetch books');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
    };

    export const getBookById = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch book');
            }
            const data = await response.json();
            return data.result;
        } catch (error) {
            throw error;
        }
    };
    

    export const createBook = async (bookData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
        throw new Error('Failed to create book');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
    };

    export const updateBook = async (id, bookData) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
        throw new Error('Failed to update book');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
    };

    export const deleteBook = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete book');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};
