// Admin.js
import React, { useState } from 'react';
import axios from 'axios';

function Addbook() {
    const [BookID, setBookID] = useState('');
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/books', {
                BookID,
                Title,
                Author,
            });
            setMessage(`Book added:${response.data.BookID} by ${response.data.Title} by ${response.data.Author}`);
            setBookID('')
            setTitle('');
            setAuthor('');
        } catch (error) {
            setMessage('Error adding book');
        }
    };

    return (
        <div>
            <h2>Add a Book</h2>
            <form onSubmit={handleAddBook}>
            <div>
                    <label>BookID:</label>
                    <input
                        type="text"
                        value={BookID}
                        onChange={(e) => setBookID(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Addbook;
