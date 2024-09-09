import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBooks = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query.trim() === '') {
            setBooks([]);
            return;
        }

        const fetchBooks = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://your-backend-url/api/books?search=${query}`);
                setBooks(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const debounceFetch = setTimeout(() => {
            fetchBooks();
        }, 500); // Debounce the API call by 500ms

        return () => clearTimeout(debounceFetch); // Clear the timeout on cleanup
    }, [query]);

    return (
        <div>
            <h1>Search Books</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
            />
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBooks;
