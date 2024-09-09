// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import flower from '../Images/images.jpg'

function GetBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allbooks')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the books!", error);
            });
    }, []);

    return (
        <div className="App-books">
            <h1>Books List</h1>
            <div className="Display-books">
            <ul>
                {books.map(book => (
                    <li key={book.BookID}>
                        <img src={flower} alt={"vvv"} ></img>
                        {book.Title} by {book.Author}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default GetBooks;
